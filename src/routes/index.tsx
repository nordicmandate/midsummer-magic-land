import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
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
      <DutyFree />
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
          Skogbergsholmen
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
            Due to the tremendous success last year
            <em className="block font-normal italic text-mist">we're doing it again — this time on Åland.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/85 md:text-lg">
            Expect a weekend of drinking, sauna, boating and shit-talking as usual.
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
    { label: "Basecamp", value: "Skogbergsholmen", sub: "Eckerö, Åland" },
    { label: "Vibe", value: "Drinking & no stress", sub: "Sauna, sea, schnapps" },
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
              Three slow days with the crew — cold beers on the rocks, herring
              at midnight, and the sun barely setting before we pour the next
              round.
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
              Most of you are taking the first ferry across the Sea of Åland on
              the Eckerö Line. Remember the duty-free shop on board — stock up
              on the way over.
          </p>

          <div className="mt-10 space-y-4">
            <FerryOption
              tag="First ferry"
              time="10:00 — 13:00"
              route="Grisslehamn → Eckerö"
            />
            <FerryOption
              tag="Backup"
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

function DutyFree() {
  const allowances = [
    { label: "Spirits over 22%", value: "1 litre", sub: "→ one bottle of Skåne Akvavit" },
    { label: "Wine up to 15%", value: "4 litres", sub: "→ a box of wine does the job" },
    { label: "Beer", value: "16 litres", sub: "→ a couple of cases of Mariestads" },
  ];
  return (
    <section id="dutyfree" className="relative bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow">Duty-free to Åland</p>
            <h2 className="mt-4 text-4xl text-bark md:text-5xl">
              The shopping list, per person.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              These are the duty-free limits per person entering Åland. Take
              this as the toll amount you can bring — no need to max it out.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-2xl bg-border md:col-span-7">
            {allowances.map((a) => (
              <div key={a.label} className="flex items-baseline justify-between gap-6 bg-card p-8">
                <div>
                  <dt className="eyebrow">{a.label}</dt>
                  <p className="mt-2 text-sm text-muted-foreground">{a.sub}</p>
                </div>
                <dd className="font-display text-2xl text-bark whitespace-nowrap">{a.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
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
          <p className="eyebrow text-mist">From the ferry</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Take the forest path — we'll pick you up.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/85 md:text-lg">
            From the ferry terminal in Berghamn, follow the forest path as marked
            on the map. We'll meet you at Bodegan with the boat. Walk takes about
            15 minutes.
          </p>
          <a
            href="https://www.google.com/maps/dir/Ecker%C3%B6linjen+%7C+Berghamn,+Berghamn+22270,+%C3%85land+Islands/60.2326237,19.5392815/@60.2286658,19.5264418,2300m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x468abd533fb99e33:0x4c70a0cafee77f3e!2m2!1d19.5370964!2d60.2252967!1m0!3e2"
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
      detail: "Skåne Akvavit, ice-cold, served in tiny glasses with a song before each shot.",
      tag: "Tradition",
    },
    {
      name: "Duty-free gin & tonic",
      detail: "Whatever bottle looked best on the Eckerö Line shelf, with proper tonic.",
      tag: "Sundowner",
    },
    {
      name: "Cold lager",
      detail: "Mariestads or Eversti Sandels, cold — straight from the sea-chilled crate.",
      tag: "All day",
    },
    {
      name: "Finnish Bål",
      detail: "Vodka with mixer. The slow-sipper for the long afternoons.",
      tag: "Afternoon",
    },
    {
      name: "Sauna beer",
      detail: "The one between the second and third round. Non-negotiable.",
      tag: "Sacred",
    },
    {
      name: "Minttu",
      detail: "Cold or lukewarm, your call. The nightcap that signs off the day.",
      tag: "Nightcap",
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
      </div>
    </section>
  );
}

type ListItem = {
  id: string;
  text: string;
  author: string;
  created_at: string;
};

const NAME_KEY = "skogbergsholmen.grocery.name";

function GroceryList() {
  const [items, setItems] = useState<ListItem[]>([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedName = localStorage.getItem(NAME_KEY);
      if (savedName) setAuthor(savedName);
    } catch {
      // ignore
    }

    let mounted = true;

    (async () => {
      const { data } = await supabase
        .from("grocery_items")
        .select("*")
        .order("created_at", { ascending: false });
      if (mounted && data) setItems(data as ListItem[]);
      if (mounted) setLoading(false);
    })();

    const channel = supabase
      .channel("grocery_items_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "grocery_items" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setItems((prev) => [payload.new as ListItem, ...prev.filter((i) => i.id !== (payload.new as ListItem).id)]);
          } else if (payload.eventType === "DELETE") {
            setItems((prev) => prev.filter((i) => i.id !== (payload.old as ListItem).id));
          }
        },
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  async function addItem(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim().slice(0, 80);
    const who = author.trim().slice(0, 24) || "Anonymous";
    if (!trimmed) return;

    try {
      localStorage.setItem(NAME_KEY, who);
    } catch {
      // ignore
    }
    setText("");

    await supabase.from("grocery_items").insert({ text: trimmed, author: who });
  }

  async function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
    await supabase.from("grocery_items").delete().eq("id", id);
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
          extra bottle of akvavit — drop it on the shared list and we'll grab it
          on the Friday run. Everyone sees the same list, live.
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
            Shared with everyone — share the link and the gang can add their own.
          </p>
        </form>

        <ul className="mt-8 space-y-2">
          {!loading && items.length === 0 && (
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
        <p>Skogbergsholmen · Midsummer 2026</p>
        <p className="italic">Made with long light & cold water.</p>
      </div>
    </footer>
  );
}
