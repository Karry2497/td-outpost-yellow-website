import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yellow Outpost – Byg. Stop. Overlev." },
      { name: "description", content: "Tower defense extraction: forsvar den sidste outpost mod gule zombier i fem bølger, til helikopteren kommer." },
      { property: "og:title", content: "Yellow Outpost – Byg. Stop. Overlev." },
      { property: "og:description", content: "Forsvar outposten mod de gule zombier, og vent på helikopteren." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Dot = () => <span className="text-primary">.</span>;

const features = [
  { n: "01", t: "Tårne på tagene", d: "Placér tårne på bygningernes tage og dæk alle tre veje ind i byen." },
  { n: "02", t: "Bots & pigtråd", d: "Køb forsvarsbots og pigtråd, der bremser horden før den når murene." },
  { n: "03", t: "Reparér & forstærk", d: "Lap outposten sammen og forstærk murene mellem bølgerne." },
  { n: "04", t: "Luftangreb", d: "Når presset bliver for stort: kald et luftangreb ned over vejene." },
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-12">
        <Logo />
        <a href="#spil" className="rounded-full bg-primary shrink-0 px-4 py-2 font-heavy text-xs sm:px-5 sm:text-sm uppercase text-primary-foreground hover:opacity-90">Ønskeliste</a>
      </header>

      <section className="relative flex min-h-screen items-end">
        <img src={hero} alt="Gule zombier stormer outposten fra byens tre veje" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="absolute inset-0" style={{ background: "var(--glow)" }} />
        <div className="relative z-10 w-full px-6 pb-16 md:px-12 md:pb-24">
          <h1 className="font-heavy text-5xl sm:text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
            Byg<Dot /> Stop<Dot /><br />Overlev<Dot />
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Den sidste outpost står alene mod de gule zombier. Overlev fem bølger, så helikopteren kan hente de overlevende ud.
          </p>
        </div>
      </section>

      <div className="tiger h-6 w-full" aria-hidden />

      <section id="spil" className="px-6 py-16 md:py-24 md:px-12">
        <p className="font-heavy uppercase text-primary">Hvad handler spillet om?</p>
        <h2 className="mt-3 max-w-4xl font-heavy text-3xl sm:text-4xl uppercase leading-tight md:text-6xl">
          Du styrer ikke en helt<Dot /> Du styrer forsvaret<Dot />
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Fra et fast kamera højt over byen ser du slagmarken og bygger dit forsvar, mens horden nærmer sig gennem byens tre veje. Brug dine kreditter klogt.
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

      <section className="tiger relative px-6 py-16 md:py-24 md:px-12">
        <div className="mx-auto max-w-3xl rounded-2xl bg-background p-6 sm:p-10 text-center md:p-14">
          <p className="font-display text-7xl text-primary md:text-8xl">5</p>
          <h2 className="mt-2 font-heavy text-2xl sm:text-3xl uppercase md:text-5xl">Bølger til udtræk<Dot /></h2>
          <p className="mt-4 text-muted-foreground">Hold outposten i live. Vent på helikopteren.</p>
          <a href="#spil" className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-heavy uppercase text-primary-foreground hover:opacity-90">Følg udviklingen</a>
        </div>
      </section>

      <footer className="px-6 py-10 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4"><Logo /><span className="font-heavy text-sm text-muted-foreground">hold the line</span></div>
        </div>
        <p className="mt-8 text-[10px] leading-snug text-muted-foreground">
          Yellow Outpost™ indeholder op til 100% gule zombier. Ingen overlevende blev efterladt under udviklingen. Bivirkninger kan omfatte forhøjet puls, pludselig trang til at bygge pigtråd og ukontrolleret råb efter luftangreb. Lad være med at drille horden.
        </p>
      </footer>
    </main>
  );
}

function Logo() {
  return (
    <span className="font-display text-base sm:text-xl leading-none text-primary">
      YELLOW<br />OUTPOST
    </span>
  );
}
