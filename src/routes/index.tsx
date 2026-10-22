import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yellow Outpost – Byg. Stop. Overlev." },
      {
        name: "description",
        content:
          "Tower defense extraction: forsvar den sidste outpost mod gule zombier i fem bølger, til helikopteren kommer.",
      },
      { property: "og:title", content: "Yellow Outpost – Byg. Stop. Overlev." },
      {
        property: "og:description",
        content: "Forsvar outposten mod de gule zombier, og vent på helikopteren.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Dot = () => <span className="text-primary">.</span>;

const features = [
  {
    n: "01",
    t: "Tårne på tagene",
    d: "Placér tårne på bygningernes tage og dæk alle tre veje ind i byen.",
  },
  { n: "02", t: "Bots & pigtråd", d: "Køb forsvarsbots og pigtråd, der bremser horden før den når murene." },
  { n: "03", t: "Reparér & forstærk", d: "Lap outposten sammen og forstærk murene mellem bølgerne." },
  { n: "04", t: "Luftangreb", d: "Når presset bliver for stort: kald et luftangreb ned over vejene." },
];

/* ---------------------------------------------------------------------------
   Baggrund: tegnet i ren CSS og inline SVG – ingen billeder fra spillet.
   --------------------------------------------------------------------------- */

type Building = { x: number; w: number; h: number; turret?: boolean };

const FAR: Building[] = [
  { x: 0, w: 110, h: 180 },
  { x: 120, w: 90, h: 140 },
  { x: 220, w: 130, h: 210 },
  { x: 360, w: 80, h: 160 },
  { x: 450, w: 140, h: 240 },
  { x: 600, w: 100, h: 150 },
  { x: 710, w: 120, h: 200 },
  { x: 840, w: 90, h: 170 },
  { x: 940, w: 150, h: 250 },
  { x: 1100, w: 100, h: 160 },
  { x: 1210, w: 120, h: 210 },
  { x: 1340, w: 100, h: 180 },
];

const NEAR: Building[] = [
  { x: -20, w: 160, h: 280 },
  { x: 190, w: 120, h: 220, turret: true },
  { x: 340, w: 180, h: 320, turret: true },
  { x: 550, w: 110, h: 240 },
  { x: 690, w: 160, h: 300, turret: true },
  { x: 880, w: 130, h: 230 },
  { x: 1040, w: 180, h: 310, turret: true },
  { x: 1250, w: 190, h: 260 },
];

const BASE = 400;

function windows(b: Building) {
  const cols = Math.max(0, Math.floor((b.w - 24) / 26));
  const rows = Math.max(0, Math.floor((b.h - 34) / 34));
  const out: { key: string; x: number; y: number }[] = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if ((b.x + c * 7 + r * 11) % 6 < 2) {
        out.push({ key: `${b.x}-${c}-${r}`, x: b.x + 14 + c * 26, y: BASE - b.h + 20 + r * 34 });
      }
    }
  }
  return out;
}

function Skyline() {
  return (
    <svg
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute inset-x-0 bottom-0 h-[42vh] min-h-[200px] w-full"
    >
      <g className="fill-secondary" opacity="0.6">
        {FAR.map((b) => (
          <rect key={`far-${b.x}`} x={b.x} y={BASE - b.h} width={b.w} height={b.h} />
        ))}
      </g>
      <g className="fill-card">
        {NEAR.map((b) => (
          <g key={`near-${b.x}`}>
            <rect x={b.x} y={BASE - b.h} width={b.w} height={b.h} />
            {b.turret ? (
              <>
                <rect className="fill-primary" x={b.x + b.w / 2 - 6} y={BASE - b.h - 26} width={12} height={26} />
                <circle className="fill-primary" cx={b.x + b.w / 2} cy={BASE - b.h - 32} r={5} />
              </>
            ) : null}
            {windows(b).map((w) => (
              <rect key={w.key} className="fill-primary" opacity="0.5" x={w.x} y={w.y} width={10} height={14} />
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}

function Backdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="city-night absolute inset-0" />
      <div className="tiger absolute inset-0 opacity-[0.10]" />
      <div className="haze-pulse absolute right-[10%] top-[12%] h-28 w-28 rounded-full bg-primary sm:h-40 sm:w-40" />
      <div className="absolute inset-0" style={{ background: "var(--glow)" }} />
      <div className="street-grid absolute inset-x-0 bottom-0 h-1/2" />
      <div className="halftone haze-pulse absolute inset-0" />
      <Skyline />
      <div className="scanlines absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Billedpladser: tomme rammer, du fylder med dine egne billeder senere.
   Læg fx dine filer i src/assets/ og udskift <Slot /> med:
   <img src={mitBillede} alt="..." className="h-full w-full object-cover" />
   --------------------------------------------------------------------------- */

const slots = [
  { t: "Outposten fra luften", d: "Overblik over de tre veje ind i byen." },
  { t: "Tårn på taget", d: "Placering af tårn, mens horden nærmer sig." },
  { t: "Bølge 5", d: "Helikopteren er på vej ind over outposten." },
];

function Slot({ title, hint }: { title: string; hint: string }) {
  return (
    <figure className="overflow-hidden rounded-xl border bg-card">
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 border-b border-dashed px-4 text-center">
        <svg viewBox="0 0 24 24" aria-hidden className="h-8 w-8 stroke-primary" fill="none" strokeWidth="2">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
        <span className="font-heavy text-[11px] uppercase text-muted-foreground">Sæt dit billede ind her</span>
      </div>
      <figcaption className="p-5">
        <h3 className="font-heavy text-base uppercase">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{hint}</p>
      </figcaption>
    </figure>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-12">
        <Logo />
        <a
          href="#spil"
          className="rounded-full bg-primary shrink-0 px-4 py-2 font-heavy text-xs uppercase text-primary-foreground hover:opacity-90 sm:px-5 sm:text-sm"
        >
          Ønskeliste
        </a>
      </header>

      <section className="relative flex min-h-screen items-end">
        <Backdrop />
        <div className="relative z-10 w-full px-6 pb-16 md:px-12 md:pb-24">
          <h1 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
            Byg<Dot /> Stop<Dot />
            <br />
            Overlev<Dot />
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Den sidste outpost står alene mod de gule zombier. Overlev fem bølger, så helikopteren kan hente de
            overlevende ud.
          </p>
        </div>
      </section>

      <div className="tiger h-6 w-full" aria-hidden />

      <section id="spil" className="px-6 py-16 md:px-12 md:py-24">
        <p className="font-heavy uppercase text-primary">Hvad handler spillet om?</p>
        <h2 className="mt-3 max-w-4xl font-heavy text-3xl uppercase leading-tight sm:text-4xl md:text-6xl">
          Du styrer ikke en helt<Dot /> Du styrer forsvaret<Dot />
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Fra et fast kamera højt over byen ser du slagmarken og bygger dit forsvar, mens horden nærmer sig gennem
          byens tre veje. Brug dine kreditter klogt.
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article key={f.n} className="group rounded-xl border bg-card p-6 transition hover:border-primary">
              <span className="font-display text-3xl text-primary">{f.n}</span>
              <h3 className="mt-6 font-heavy text-xl uppercase">{f.t}</h3>
              <p className="mt-2 text-muted-foreground">{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <p className="font-heavy uppercase text-primary">Fra outposten</p>
        <h2 className="mt-3 max-w-3xl font-heavy text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
          Pladserne er klar<Dot />
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Her kommer dine egne billeder fra spillet ind, når du har dem. Indtil videre er rammerne tomme.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((s) => (
            <Slot key={s.t} title={s.t} hint={s.d} />
          ))}
        </div>
      </section>

      <section className="tiger relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl bg-background p-6 text-center sm:p-10 md:p-14">
          <p className="font-display text-7xl text-primary md:text-8xl">5</p>
          <h2 className="mt-2 font-heavy text-2xl uppercase sm:text-3xl md:text-5xl">Bølger til udtræk<Dot /></h2>
          <p className="mt-4 text-muted-foreground">Hold outposten i live. Vent på helikopteren.</p>
          <a
            href="#spil"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-heavy uppercase text-primary-foreground hover:opacity-90"
          >
            Følg udviklingen
          </a>
        </div>
      </section>

      <footer className="px-6 py-10 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="font-heavy text-sm text-muted-foreground">hold the line</span>
          </div>
        </div>
        <p className="mt-8 text-[10px] leading-snug text-muted-foreground">
          Yellow Outpost™ indeholder op til 100% gule zombier. Ingen overlevende blev efterladt under udviklingen.
          Bivirkninger kan omfatte forhøjet puls, pludselig trang til at bygge pigtråd og ukontrolleret råb efter
          luftangreb. Lad være med at drille horden.
        </p>
      </footer>
    </main>
  );
}

function Logo() {
  return (
    <span className="font-display text-base leading-none text-primary sm:text-xl">
      YELLOW<br />
      OUTPOST
    </span>
  );
}
