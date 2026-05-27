import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-aland.jpg";
import poleImg from "@/assets/midsummer-pole.jpg";
import cottageImg from "@/assets/summer-cottage.jpg";
import trailImg from "@/assets/hiking-trail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Midsummer 2026 · Åland Islands" },
      {
        name: "description",
        content:
          "A long Nordic weekend on the Åland Islands — 19–21 June 2026. Duty-free runs, midsummer schnapps, and the bar list for the gang.",
      },
      { property: "og:title", content: "Midsummer 2026 · Åland Islands" },
      {
        property: "og:description",
        content: "Three days of midsummer schnapps, cold beer and quiet sea on the Åland archipelago.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Details />
      <Travel />
      <Hiking />
      <Bar />
      <Packing />
      <GroceryList />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#details", label: "Details" },
    { href: "#travel", label: "Travel" },
    { href: "#bar", label: "The Bar" },
    { href: "#list", label: "Grocery list" },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="font-display text-lg text-cream tracking-wide">
          Knackilandia
          <span className="ml-2 text-cream/70">·</span>
          <span className="ml-2 text-sm text-cream/80">MMXXVI</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/85 transition hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Granite shores and wildflower meadow on the Åland Islands at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-bark/20 to-bark/70" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-mist">19 — 21 June 2026 · Eckerö, Åland</p>
          <h1 className="mt-5 text-5xl leading-[1.05] text-cream md:text-7xl lg:text-[5.5rem]">
            Schnapps, sea, and the longest day
            <em className="block font-normal italic text-mist">of the year.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/85 md:text-lg">
            Three slow days on the archipelago, fuelled by ferry duty-free,
            cold lagers in the sauna anteroom, and one too many toasts under a
            sun that never quite sets.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#bar"
              className="rounded-full bg-cream px-7 py-3 text-sm font-semibold text-bark transition hover:bg-mist"
            >
              See the bar
            </a>
            <a
              href="#list"
              className="rounded-full border border-cream/40 px-7 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              Add to the list
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Details() {
  const items = [
    { label: "When", value: "19 — 21 June", sub: "Friday to Sunday" },
    { label: "Where", value: "Eckerö", sub: "Åland Islands, Finland" },
    { label: "Basecamp", value: "Bodegan Gastro Pub", sub: "& the summer place" },
    { label: "Vibe", value: "Slow & sun-soaked", sub: "Nordic nature, no rush" },
  ];
  return (
    <section id="details" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow">The weekend</p>
            <h2 className="mt-4 text-4xl text-bark md:text-5xl">
              A small gathering, a wide horizon.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              We're heading back to the summer place for the longest weekend of the
              year. Expect bare feet on warm granite, herring at midnight, and the
              sun barely setting before it rises again.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-2xl bg-border md:col-span-7 md:grid-cols-2">
            {items.map((i) => (
              <div key={i.label} className="bg-card p-8">
                <dt className="eyebrow">{i.label}</dt>
                <dd className="mt-3 font-display text-2xl text-bark">{i.value}</dd>
                <p className="mt-1 text-sm text-muted-foreground">{i.sub}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Travel() {
  return (
    <section id="travel" className="relative overflow-hidden bg-mist">
      <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-[640px]">
          <img
            src={cottageImg}
            alt="Red wooden Åland summer cottage by the sea"
            loading="lazy"
            width={1600}
            height={1100}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="px-6 py-20 md:px-14 md:py-28">
          <p className="eyebrow">Getting there</p>
          <h2 className="mt-4 text-4xl text-bark md:text-5xl">
            Grisslehamn to Eckerö.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bark/80 md:text-lg">
            We're crossing the Sea of Åland on the Eckerö Line. Pick the ferry that
            suits your Friday — and remember the duty-free shop on board.
          </p>

          <div className="mt-10 space-y-4">
            <FerryOption
              tag="Option 1"
              time="10:00 — 13:00"
              route="Grisslehamn → Eckerö"
            />
            <FerryOption
              tag="Option 2"
              time="15:00 — 18:00"
              route="Grisslehamn → Eckerö"
            />
          </div>

          <a
            href="https://www.eckerolinjen.se/en"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-bark px-7 py-3 text-sm font-semibold text-cream transition hover:bg-moss"
          >
            Book your ferry
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FerryOption({ tag, time, route }: { tag: string; time: string; route: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-bark/15 pb-4">
      <div>
        <p className="eyebrow">{tag}</p>
        <p className="mt-1 font-display text-xl text-bark">{time}</p>
      </div>
      <p className="text-sm text-bark/70">{route}</p>
    </div>
  );
}

function Hiking() {
  return (
    <section id="hiking" className="relative isolate overflow-hidden">
      <img
        src={trailImg}
        alt="Forest path on Åland leading toward the Baltic Sea"
        loading="lazy"
        width={1600}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bark/80 via-bark/55 to-bark/30" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <div className="max-w-xl text-cream">
          <p className="eyebrow text-mist">The trail</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Walk in, we'll meet you with the boat.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/85 md:text-lg">
            From Bodegan, follow the path along the shoreline. It's an easy
            stretch through pine forest and pink granite — call when you're close
            and we'll pick you up from the rocks.
          </p>
          <a
            href="https://www.google.com/maps/dir/60.2422315,19.5135643/60.2326237,19.5392815"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm font-semibold text-bark transition hover:bg-mist"
          >
            Open route in Google Maps
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Packing() {
  const items = [
    { title: "Sheets & a towel", note: "If you can — linens are limited at the cottage." },
    { title: "Bathing suit", note: "For the sea, the sauna, and the slightly-too-cold morning dip." },
    { title: "A warm layer", note: "Evenings on the rocks get crisp, even in June." },
    { title: "Duty-free from the ferry", note: "The most important item on the list." },
  ];
  return (
    <section id="packing" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Pack lightly</p>
            <h2 className="mt-4 text-4xl text-bark md:text-5xl">
              Bring less than you think.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The summer place is cozy but compact. A small bag, the right layers,
              and a willingness to share the sauna — that's all you really need.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <img
                src={poleImg}
                alt="A birch midsummer pole dressed with leaves and wildflowers"
                loading="lazy"
                width={1280}
                height={1280}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <ul className="space-y-4 md:col-span-7">
            {items.map((it, idx) => (
              <li
                key={it.title}
                className="group flex items-start gap-6 rounded-2xl border border-border bg-card p-6 transition hover:border-moss md:p-8"
              >
                <span className="mt-1 font-display text-2xl text-moss tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-bark">{it.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{it.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Bar() {
  const pours = [
    {
      name: "Midsummer schnapps",
      detail: "Akvavit, ice-cold, served in tiny glasses with a song before each shot.",
      tag: "Tradition",
    },
    {
      name: "Duty-free gin & tonic",
      detail: "Whatever bottle looked best on the Eckerö Line shelf, with proper tonic.",
      tag: "Sundowner",
    },
    {
      name: "Cold Åland lager",
      detail: "Stallhagen on tap-temperature, straight from the sea-chilled crate.",
      tag: "All day",
    },
    {
      name: "Strawberry spritz",
      detail: "Local strawberries, dry white, a splash of soda. For the slower hours.",
      tag: "Afternoon",
    },
    {
      name: "Sauna beer",
      detail: "The one between the second and third round. Non-negotiable.",
      tag: "Sacred",
    },
    {
      name: "Nightcap whisky",
      detail: "On the rocks, on the rocks. Bring your favourite bottle.",
      tag: "After midnight",
    },
  ];
  return (
    <section id="bar" className="relative bg-bark py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow text-mist">The bar</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            What we'll be pouring.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/80 md:text-lg">
            The duty-free shop on the ferry is half the reason we do this. Stock
            up on the way over — here's roughly what the weekend tastes like.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
          {pours.map((p) => (
            <li key={p.name} className="bg-bark p-8">
              <p className="eyebrow text-mist">{p.tag}</p>
              <h3 className="mt-3 font-display text-2xl text-cream">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{p.detail}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm italic text-cream/60">
          Drink water between rounds. The sun won't set, but you might.
        </p>
      </div>
    </section>
  );
}

type ListItem = {
  id: string;
  text: string;
  author: string;
  createdAt: number;
};

const STORAGE_KEY = "knackilandia.grocery.v1";

function GroceryList() {
  const [items, setItems] = useState<ListItem[]>([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
      const savedName = localStorage.getItem(STORAGE_KEY + ".name");
      if (savedName) setAuthor(savedName);
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  function addItem(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim().slice(0, 80);
    const who = author.trim().slice(0, 24) || "Anonymous";
    if (!trimmed) return;
    setItems((prev) => [
      { id: crypto.randomUUID(), text: trimmed, author: who, createdAt: Date.now() },
      ...prev,
    ]);
    setText("");
    try {
      localStorage.setItem(STORAGE_KEY + ".name", who);
    } catch {
      // ignore
    }
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <section id="list" className="relative bg-moss py-24 text-cream md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="eyebrow text-mist">Friday morning haul</p>
        <h2 className="mt-4 text-4xl md:text-5xl">
          Add what you can't midsummer without.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-cream/90 md:text-lg">
          Pickled herring, fresh strawberries, that one specific cheese, an
          extra bottle of akvavit — drop it on the list and we'll grab it on
          the Friday run.
        </p>

        <form
          onSubmit={addItem}
          className="mt-10 rounded-2xl bg-cream p-5 text-bark shadow-lg md:p-6"
        >
          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                maxLength={24}
                placeholder="Your name"
                aria-label="Your name"
                className="w-full rounded-xl border border-bark/15 bg-cream px-4 py-3 text-sm text-bark placeholder:text-bark/40 focus:border-moss focus:outline-none"
              />
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={80}
                placeholder="e.g. dill, strawberries, more akvavit…"
                aria-label="Grocery item"
                required
                className="w-full rounded-xl border border-bark/15 bg-cream px-4 py-3 text-sm text-bark placeholder:text-bark/40 focus:border-moss focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-bark px-6 py-3 text-sm font-semibold text-cream transition hover:bg-moss"
            >
              Add to list
            </button>
          </div>
          <p className="mt-3 text-xs text-bark/55">
            Saved on this device. Share the link with the gang so everyone can add their own.
          </p>
        </form>

        <ul className="mt-8 space-y-2">
          {items.length === 0 && hydrated && (
            <li className="rounded-xl border border-dashed border-cream/30 px-5 py-6 text-center text-sm italic text-cream/70">
              Nothing on the list yet — start with the snaps.
            </li>
          )}
          {items.map((it) => (
            <li
              key={it.id}
              className="flex items-center justify-between gap-4 rounded-xl bg-cream/10 px-5 py-4 backdrop-blur-sm"
            >
              <div className="min-w-0">
                <p className="truncate font-display text-lg text-cream">{it.text}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-cream/60">
                  — {it.author}
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeItem(it.id)}
                aria-label={`Remove ${it.text}`}
                className="rounded-full border border-cream/30 px-3 py-1 text-xs text-cream/80 transition hover:border-cream hover:text-cream"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm font-semibold text-bark transition hover:bg-mist"
          >
            Back to the top
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row md:px-10">
        <p>Knackilandia · Midsummer 2026</p>
        <p className="italic">Made with long light & cold water.</p>
      </div>
    </footer>
  );
}
