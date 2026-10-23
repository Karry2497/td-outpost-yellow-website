import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Crosshair, Shield, Wrench, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/outpost-yellow-logo.png.asset.json";
import heroAsset from "@/assets/outpost-billboard.webp.asset.json";
import heroMobileAsset from "@/assets/outpost-billboard-mobile.webp.asset.json";
import screen1 from "@/assets/screen-image-4.webp.asset.json";
import screen2 from "@/assets/screen-image-5.webp.asset.json";
import screen3 from "@/assets/screen-image-6.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TD: Outpost Yellow – Byg. Stop. Overlev." },
      {
        name: "description",
        content:
          "Tower defense extraction: forsvar den sidste outpost mod gule zombier i fem bølger, til helikopteren kommer.",
      },
      { property: "og:title", content: "TD: Outpost Yellow – Byg. Stop. Overlev." },
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
    icon: Crosshair,
    t: "Tårne på tagene",
    d: "Placér tårne på bygningernes tage og dæk alle tre veje ind i byen.",
  },
  { n: "02", icon: Shield, t: "Bots & pigtråd", d: "Køb forsvarsbots og pigtråd, der bremser horden før den når murene." },
  { n: "03", icon: Wrench, t: "Reparér & forstærk", d: "Lap outposten sammen og forstærk murene mellem bølgerne." },
  { n: "04", icon: Plane, t: "Luftangreb", d: "Når presset bliver for stort: kald et luftangreb ned over vejene." },
];

/* ---------------------------------------------------------------------------
   Billedpladser: tomme rammer, du fylder med dine egne billeder senere.
   Læg fx dine filer i src/assets/ og udskift <Slot /> med:
   <img src={mitBillede} alt="..." className="h-full w-full object-cover" />
   --------------------------------------------------------------------------- */

const slots = [
  { t: "Outposten fra luften", d: "Overblik over de tre veje ind i byen.", img: screen1.url },
  { t: "Tårn på taget", d: "Placering af tårn, mens horden nærmer sig.", img: screen2.url },
  { t: "Bølge 5", d: "Helikopteren er på vej ind over outposten.", img: screen3.url },
];

function Slot({ title, hint, img }: { title: string; hint: string; img: string }) {
  return (
    <figure className="metal-panel overflow-hidden rounded-sm border bg-card">
      <img src={img} alt={title} loading="lazy" width={1280} height={720} className="aspect-video w-full border-b object-cover" />
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
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-4 md:px-12">
        <Logo />
        <Button asChild className="hazard-button shrink-0 rounded-sm px-4 font-heavy text-xs uppercase sm:px-5 sm:text-sm">
          <a href="#spil">Ønskeliste <ArrowUpRight /></a>
        </Button>
      </header>

      <section className="outpost-hero relative flex items-end overflow-hidden">
        <img
          src={heroAsset.url}
          srcSet={`${heroMobileAsset.url} 640w, ${heroAsset.url} 1152w`}
          sizes="100vw"
          alt="Gult outpost-skilt med teksten SET. BLAST. REPEAT. og SPRAY & PRAY."
          width={1152}
          height={768}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div aria-hidden className="hero-fade absolute inset-0" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-14 pt-40 text-center">
          <p className="field-label mb-2 text-xs uppercase text-primary">Tower defense / Extraction</p>
          <h1 className="sr-only">TD: Outpost Yellow</h1>
          <p className="max-w-xl text-base text-foreground/85 sm:text-lg">
            Den sidste outpost står alene mod de gule zombier. Overlev fem bølger, så helikopteren kan hente de
            overlevende ud.
          </p>
          <Button asChild variant="outline" className="mt-7 rounded-sm border-primary/50 bg-background/70 font-heavy uppercase text-primary">
            <a href="#spil">Ind i outposten <ArrowDown /></a>
          </Button>
        </div>
      </section>

      <div className="tiger h-3 w-full border-y border-primary/50" aria-hidden />

      <section id="spil" className="field-section scroll-mt-6 px-6 py-16 md:px-12 md:py-24">
        <p className="field-label uppercase text-primary">01 / Forsvar den sidste outpost</p>
        <h2 className="mt-3 max-w-4xl font-heavy text-3xl uppercase leading-tight sm:text-4xl md:text-6xl">
          No brains<Dot /> No problem<Dot />
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Fra et fast kamera højt over byen ser du slagmarken og bygger dit forsvar, mens horden nærmer sig gennem
          byens tre veje. Brug dine kreditter klogt.
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article key={f.n} className="metal-panel group rounded-sm border bg-card p-6 transition hover:border-primary">
              <div className="flex items-center justify-between"><f.icon aria-hidden className="h-8 w-8 text-primary" /><span className="field-label text-sm text-muted-foreground">{f.n}</span></div>
              <h3 className="mt-6 font-heavy text-xl uppercase">{f.t}</h3>
              <p className="mt-2 text-muted-foreground">{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="field-section border-t px-6 py-16 md:px-12 md:py-24">
        <p className="field-label uppercase text-primary">02 / Fra outposten</p>
        <h2 className="mt-3 max-w-3xl font-heavy text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
          Udsigt fra frontlinjen<Dot />
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((s) => (
            <Slot key={s.t} title={s.t} hint={s.d} img={s.img} />
          ))}
        </div>
      </section>

      <section className="extraction-band relative border-y px-6 py-16 md:px-12 md:py-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="field-label mb-5 text-xs uppercase text-primary">Sidste ordre / Hold linjen</p>
          <p className="font-display text-7xl text-primary md:text-8xl">5</p>
          <h2 className="mt-2 font-heavy text-2xl uppercase sm:text-3xl md:text-5xl">Bølger til udtræk<Dot /></h2>
          <p className="mt-4 text-muted-foreground">Hold outposten i live. Vent på helikopteren.</p>
          <Button asChild size="lg" className="hazard-button mt-8 rounded-sm font-heavy uppercase">
            <a href="#spil">Følg udviklingen <ArrowUpRight /></a>
          </Button>
        </div>
      </section>

      <footer className="px-6 py-10 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="field-label text-xs uppercase text-muted-foreground">Stay. Build. Survive.</span>
          </div>
        </div>
        <p className="mt-8 text-[10px] leading-snug text-muted-foreground">
          TD: Outpost Yellow™ indeholder op til 100% gule zombier. Ingen overlevende blev efterladt under udviklingen.
          Bivirkninger kan omfatte forhøjet puls, pludselig trang til at bygge pigtråd og ukontrolleret råb efter
          luftangreb. Lad være med at drille horden.
        </p>
      </footer>
    </main>
  );
}

function Logo() {
  return (
    <a href="#" aria-label="TD: Outpost Yellow – forsiden" className="block w-24 shrink-0 sm:w-32">
      <img src={logoAsset.url} alt="TD: Outpost Yellow" width={1152} height={768} className="h-auto w-full mix-blend-screen" />
    </a>
  );
}
