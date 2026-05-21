import React from "react";
import { useParams, Link } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import SitePreviewCard from "../components/SitePreviewCard";
import siteContent from "../content/siteContent";
import dashboardSites from "../content/dashboardSites";

/**
 * Generic content-driven page.
 *
 * Renders the page found at siteContent[slug] (URL parameter).
 *
 * Each section can include:
 *   heading, paragraphs[], bullets[]            ← text content
 *   youtube: { id?, query?, title? }            ← embedded YouTube player
 *   gallery: [{ src, alt? }] | string[]         ← image grid
 *   card: { title, url, image, alt? }           ← inline preview card
 *
 * Page-level options:
 *   data.accordion = true                       ← collapsible sections
 *   data.cards     = "dashboard"                ← featured site grid
 *   data.youtube                                ← top-level YouTube player
 *   data.video                                  ← top-level local <video>
 *   data.heroSize  = "third" | "half"           ← shrink the hero
 */

function YouTubeEmbed({ id, query, title }) {
  const params =
    "autoplay=0&rel=0&modestbranding=1&playsinline=1&controls=1";
  const src = id
    ? `https://www.youtube.com/embed/${id}?${params}`
    : `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
        query || ""
      )}&${params}`;

  // Hide the iframe until YouTube finishes its first paint so we never
  // see the loading-skeleton rectangles.
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-stroke bg-black dark:border-strokedark">
      <div className="relative aspect-video w-full bg-black">
        <iframe
          className={`h-full w-full transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          title={title || "Embedded video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
        {!loaded ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black"
          >
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Gallery({ items }) {
  const normalized = items.map((it) =>
    typeof it === "string" ? { src: it } : it
  );

  const [hidden, setHidden] = React.useState(() => new Set());
  const hide = (src) =>
    setHidden((prev) => {
      const next = new Set(prev);
      next.add(src);
      return next;
    });

  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const visible = normalized.filter((it) => !hidden.has(it.src));
  if (visible.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {visible.map((it, i) => (
          <button
            key={`${it.src}-${i}`}
            type="button"
            onClick={() => setLightbox(it)}
            className="group relative block overflow-hidden rounded-lg border border-stroke bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-strokedark dark:bg-black/30"
            aria-label={it.alt ? `Open ${it.alt}` : "Open image"}
          >
            <img
              src={it.src}
              alt={it.alt || ""}
              loading="lazy"
              onError={() => hide(it.src)}
              className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt || "Image preview"}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt || ""}
            className="max-h-[95vh] max-w-[95vw] object-contain shadow-2xl"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            aria-label="Close image"
            className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white shadow transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L8.94 10l-5.72 5.72a.75.75 0 1 0 1.06 1.06L10 11.06l5.72 5.72a.75.75 0 0 0 1.06-1.06L11.06 10l5.72-5.72a.75.75 0 0 0-1.06-1.06L10 8.94 4.28 3.22Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
}

/** Renders the body of a section: prose + bullets + optional inline media. */
function SectionBody({ section }) {
  return (
    <div className="space-y-4">
      {section.paragraphs?.map((p, pi) => (
        <p
          key={pi}
          className="text-base leading-relaxed text-body dark:text-bodydark"
        >
          {p}
        </p>
      ))}
      {section.bullets?.length ? (
        <ul className="ml-5 list-disc space-y-1.5 text-base leading-relaxed text-body dark:text-bodydark">
          {section.bullets.map((b, bi) => (
            <li key={bi}>{b}</li>
          ))}
        </ul>
      ) : null}
      {section.card ? (
        <SitePreviewCard
          title={section.card.title}
          url={section.card.url}
          image={section.card.image}
          alt={section.card.alt || section.card.title}
        />
      ) : null}
      {section.youtube ? (
        <YouTubeEmbed
          id={section.youtube.id}
          query={section.youtube.query}
          title={section.youtube.title || section.heading}
        />
      ) : null}
      {section.gallery?.length ? <Gallery items={section.gallery} /> : null}
    </div>
  );
}

/** Section rendered as a click-to-toggle accordion. */
function AccordionSection({ section, defaultOpen }) {
  const [open, setOpen] = React.useState(Boolean(defaultOpen));
  return (
    <div className="overflow-hidden rounded-lg border border-stroke dark:border-strokedark">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 bg-gray-2 px-5 py-3 text-left text-lg font-semibold text-black transition hover:bg-stroke dark:bg-meta-4 dark:text-white dark:hover:bg-meta-4/80"
      >
        <span>{section.heading}</span>
        <svg
          className={`h-4 w-4 fill-current transition-transform ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.41 6.91a.75.75 0 0 1 1.06 0L10 11.44l4.53-4.53a.75.75 0 1 1 1.06 1.06l-5.06 5.06a.75.75 0 0 1-1.06 0L4.41 7.97a.75.75 0 0 1 0-1.06Z"
          />
        </svg>
      </button>
      {open ? (
        <div className="border-t border-stroke bg-white p-5 dark:border-strokedark dark:bg-boxdark">
          <SectionBody section={section} />
        </div>
      ) : null}
    </div>
  );
}

export default function SitePage() {
  const { slug } = useParams();
  const data = siteContent[slug];

  if (!data) {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Not found" />
        <div className="rounded-xl border border-stroke bg-white p-8 text-center shadow-default dark:border-strokedark dark:bg-boxdark">
          <h1 className="mb-2 text-2xl font-bold text-black dark:text-white">
            Page not found
          </h1>
          <p className="mb-6 text-body dark:text-bodydark">
            No content is registered for &quot;{slug}&quot;.
          </p>
          <Link
            to="/intro"
            className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-opacity-90"
          >
            Back to Introduction
          </Link>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName={data.title} />

      <article className="space-y-8 rounded-xl border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:p-10">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            {data.title}
          </h1>
          {data.subtitle ? (
            <p className="mx-auto max-w-2xl text-base text-body dark:text-bodydark sm:text-lg">
              {data.subtitle}
            </p>
          ) : null}
        </header>

        {data.hero ? (
          <div
            className={`mx-auto overflow-hidden rounded-xl border border-stroke dark:border-strokedark ${
              data.heroSize === "third"
                ? "max-w-xs"
                : data.heroSize === "half"
                ? "max-w-md"
                : ""
            }`}
          >
            <img
              src={data.hero}
              alt={data.title}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        ) : null}

        {data.youtube ? (
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              id={data.youtube.id}
              query={data.youtube.query}
              title={data.youtube.title || data.title}
            />
          </div>
        ) : null}

        {data.video ? (
          <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-stroke bg-black dark:border-strokedark">
            <video
              src={data.video.src}
              poster={data.video.poster}
              controls
              autoPlay={data.video.autoPlay !== false}
              muted={data.video.muted !== false}
              loop={data.video.loop !== false}
              playsInline
              className="block h-auto w-full"
            >
              Sorry, your browser doesn&apos;t support embedded videos.
            </video>
          </div>
        ) : null}

        {data.cards === "dashboard" ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            {dashboardSites.map((c) => (
              <SitePreviewCard
                key={c.title}
                title={c.title}
                url={c.url}
                image={c.image}
                alt={c.alt}
              />
            ))}
          </div>
        ) : null}

        {data.sections?.length > 0 ? (
          <div className="mx-auto max-w-3xl space-y-6">
            {data.accordion
              ? data.sections.map((section, idx) => (
                  <AccordionSection
                    key={idx}
                    section={section}
                    defaultOpen={idx === 0}
                  />
                ))
              : data.sections.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                    {section.heading ? (
                      <h2 className="text-xl font-semibold text-black dark:text-white">
                        {section.heading}
                      </h2>
                    ) : null}
                    <SectionBody section={section} />
                  </section>
                ))}
          </div>
        ) : null}
      </article>
    </DefaultLayout>
  );
}
