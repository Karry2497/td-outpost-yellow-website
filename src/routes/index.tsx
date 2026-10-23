import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Crosshair, Shield, Wrench, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/outpost-yellow-logo.png.asset.json";
import heroAsset from "@/assets/outpost-billboard.webp.asset.json";
import heroMobileAsset from "@/assets/outpost-billboard-mobile.webp.asset.json";
import screen1 from "@/assets/outpost-from-above.png";
import screen2 from "@/assets/rooftop-turret.png";
import screen3 from "@/assets/main-menu.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TD: Outpost Yellow – Build. Stop. Survive." },
      {
        name: "description",
        content:
          "Tower defense meets extraction. Defend the last outpost from the yellow horde for five waves. Then make it to the chopper.",
      },
      { property: "og:title", content: "TD: Outpost Yellow – Build. Stop. Survive." },
      {
        property: "og:description",
        content: "Hold the outpost against the yellow horde. Survive five waves. Get to the chopper.",
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
    t: "Towers on the rooftops",
    d: "Drop turrets on the rooftops. Cover all three roads into town.",
  },
  { n: "02", icon: Shield, t: "Bots & barbed wire", d: "Buy defense bots and string up barbed wire. Slow the horde before it hits the walls." },
  { n: "03", icon: Wrench, t: "Patch & fortify", d: "Patch up the outpost. Reinforce the walls between waves." },
  { n: "04", icon: Plane, t: "Airstrikes", d: "Getting overrun? Call in an airstrike and light up the roads." },
];

/* ---------------------------------------------------------------------------
   Image slots: empty frames for your own screenshots.
   Add files to src/assets/ and replace <Slot /> with:
   <img src={myImage} alt="..." className="h-full w-full object-cover" />
   --------------------------------------------------------------------------- */

const slots = [
  { t: "The outpost from above", d: "A bird's-eye view of all three roads into town.", img: screen1 },
  { t: "Rooftop turret", d: "Set your defenses before the horde closes in.", img: screen2 },
  { t: "Main menu", d: "Five waves. One last outpost. See what stands between you and extraction.", img: screen3 },
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
          <a href="#spil">The game <ArrowUpRight /></a>
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
            The last outpost is all that stands between the yellow horde and everyone left alive. Survive five waves
            and get the survivors out before the chopper leaves without you.
          </p>
          <Button asChild variant="outline" className="mt-7 rounded-sm border-primary/50 bg-background/70 font-heavy uppercase text-primary">
            <a href="#spil">Drop into the outpost <ArrowDown /></a>
          </Button>
        </div>
      </section>

      <div className="tiger h-3 w-full border-y border-primary/50" aria-hidden />

      <section id="spil" className="field-section scroll-mt-6 px-6 py-16 md:px-12 md:py-24">
        <p className="field-label uppercase text-primary">01 / Defend the last outpost</p>
        <h2 className="mt-3 max-w-4xl font-heavy text-3xl uppercase leading-tight sm:text-4xl md:text-6xl">
          No brains<Dot /> No problem<Dot />
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Keep an eye on the whole battlefield from high above. Build your defenses as the horde pushes down all
          three roads. Spend your credits wisely. The dead don’t wait for change.
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
        <p className="field-label uppercase text-primary">02 / From the outpost</p>
        <h2 className="mt-3 max-w-3xl font-heavy text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
          Frontline snapshots<Dot />
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((s) => (
            <Slot key={s.t} title={s.t} hint={s.d} img={s.img} />
          ))}
        </div>
      </section>

      <section className="extraction-band relative border-y px-6 py-16 md:px-12 md:py-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="field-label mb-5 text-xs uppercase text-primary">Latest release / v0.1.0</p>
          <p className="font-display text-7xl text-primary md:text-8xl">5</p>
          <h2 className="mt-2 font-heavy text-2xl uppercase sm:text-3xl md:text-5xl">Five waves. One way out<Dot /></h2>
          <p className="mt-4 text-muted-foreground">v0.1.0 is live. Build fast, hold the line, and get to the chopper.</p>
          <Button asChild size="lg" className="hazard-button mt-8 rounded-sm font-heavy uppercase">
            <a href="https://github.com/Karry2497/td-outpost-yellow/releases/tag/v0.1.0" target="_blank" rel="noreferrer">
              Download v0.1.0 <ArrowUpRight />
            </a>
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
          TD: Outpost Yellow™ may contain up to 100% yellow zombies. No survivors were left behind during development.
          Side effects may include a racing pulse, a sudden urge to build barbed wire, and yelling “airstrike!” at
          wildly inappropriate times. Don’t poke the horde.
        </p>
      </footer>
    </main>
  );
}

function Logo() {
  return (
    <a href="#" aria-label="TD: Outpost Yellow – home" className="block w-24 shrink-0 sm:w-32">
      <img src={logoAsset.url} alt="TD: Outpost Yellow" width={1152} height={768} className="h-auto w-full mix-blend-screen" />
    </a>
  );
}
