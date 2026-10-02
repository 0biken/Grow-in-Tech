import { useRef } from "react";
import { CalendarBlank, MapPin, Handshake } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import Photo from "../components/Photo";
import CtaLink from "../components/CtaLink";
import { archiveTotal, byNewest, events } from "../content/events";
import { KOMMUNITY_URL } from "../content/site";
import { useReveal } from "../hooks/useReveal";

const upcoming = events.filter((event) => event.status === "upcoming").sort(byNewest);
const recent = events.filter((event) => event.status === "recent").sort(byNewest);
const archive = events.filter((event) => event.status === "archive").sort(byNewest);
const maxAttendance = Math.max(...archive.map((event) => event.attendees ?? 0));

const EventsPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <div ref={ref}>
      <section className="container-page pb-16 pt-14 md:pb-24 md:pt-20" aria-labelledby="events-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-7">
            <p className="kicker mb-6">Events</p>
            <h1 id="events-heading" className="text-[length:var(--text-display)] leading-[1.0]">
              Where the kommunity shows up.
            </h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-git-muted lg:col-span-5">
            What&apos;s next, what just happened, and the rooms we have filled since 2021, newest first.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <section className="px-2 sm:px-3" aria-labelledby="upcoming-heading">
          <h2 id="upcoming-heading" className="sr-only">Upcoming</h2>
          <div className="flex flex-col gap-3">
            {upcoming.map((event) => (
              <article
                key={event.name}
                className="dark-section relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(160deg,#158FFC_0%,#0A4BA7_40%,#010552_100%)] md:rounded-[2.25rem]"
                data-reveal
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/15" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
                <div className="container-page relative grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-8">
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-git-ice" aria-hidden="true" />
                      Up next
                    </p>
                    <h3 className="text-[length:var(--text-display)] leading-[1.0] text-white">{event.name}</h3>
                    <p className="mt-6 flex items-center gap-2 text-git-ice">
                      <Icon icon={CalendarBlank} size={18} />
                      {event.when}
                    </p>
                    {event.summary && <p className="mt-4 max-w-xl text-lg leading-relaxed text-git-light">{event.summary}</p>}
                  </div>
                  <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                    <CtaLink href={KOMMUNITY_URL} variant="light">Get notified first</CtaLink>
                    <CtaLink to="/get-involved#partner" variant="ghost-dark" icon={Handshake}>Partner on the summit</CtaLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Most recent */}
      {recent.length > 0 && (
        <section className="chapter" aria-labelledby="recent-heading">
          <div className="container-page">
            <div className="mb-12" data-reveal>
              <p className="kicker mb-5">Most recent</p>
              <h2 id="recent-heading" className="section-heading">Just wrapped</h2>
            </div>
            {recent.map((event) => (
              <article key={event.name} className="bezel" data-reveal>
                <div className="bezel-core grid lg:grid-cols-12">
                  <div className="relative min-h-[18rem] lg:col-span-6">
                    <Photo slot="stage" width={1000} sizes="(min-width: 1024px) 45vw, 100vw" className="absolute inset-0" tone="duotone" alt="A speaker addressing an audience" />
                  </div>
                  <div className="flex flex-col p-8 sm:p-10 lg:col-span-6 lg:p-12">
                    <h3 className="text-[length:var(--text-h2)] leading-[1.05]">{event.name}</h3>
                    <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-git-body">
                      <div className="flex items-center gap-2">
                        <dt><Icon icon={CalendarBlank} size={18} label="Date" className="text-git-link" /></dt>
                        <dd>{event.when}</dd>
                      </div>
                      {event.format && (
                        <div className="flex items-center gap-2">
                          <dt><Icon icon={MapPin} size={18} label="Format" className="text-git-link" /></dt>
                          <dd>{event.format}</dd>
                        </div>
                      )}
                      {event.partner && (
                        <div className="flex items-center gap-2">
                          <dt><Icon icon={Handshake} size={18} label="Partner" className="text-git-link" /></dt>
                          <dd>With {event.partner}</dd>
                        </div>
                      )}
                    </dl>
                    {event.summary && <p className="mt-6 flex-grow leading-relaxed text-git-muted">{event.summary}</p>}
                    {event.to && (
                      <div className="mt-10">
                        <CtaLink to={event.to}>See the recap</CtaLink>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Archive */}
      <section className="chapter bg-git-surface-2/60" aria-labelledby="archive-heading">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32" data-reveal>
              <p className="kicker mb-5">The archive</p>
              <h2 id="archive-heading" className="section-heading">Rooms we have filled.</h2>
              <p className="mt-8 font-heading text-[clamp(3rem,2rem+3vw,4.5rem)] font-bold italic leading-none tracking-[-0.04em] text-git-link">
                {archiveTotal.toLocaleString()}+
              </p>
              <p className="mt-2 text-git-muted">recorded attendees across {archive.length} events</p>
            </div>
          </div>

          <ol className="flex flex-col gap-3 lg:col-span-8" data-reveal-stagger>
            {archive.map((event) => (
              <li key={event.name} className="bezel">
                <article className="bezel-core grid grid-cols-[4.5rem_1fr] items-center gap-x-5 gap-y-3 p-6 sm:grid-cols-[6rem_1fr_auto] sm:p-7">
                  <p className="font-heading text-2xl font-bold italic tracking-[-0.03em] text-git-link sm:text-3xl">
                    {event.year ?? "—"}
                  </p>
                  <div>
                    <h3 className="text-xl leading-tight">{event.name}</h3>
                    {event.year === null && <p className="mt-1 text-sm text-git-muted">{event.when}</p>}
                  </div>
                  {event.attendees !== undefined && (
                    <div className="col-span-2 sm:col-span-1 sm:w-48">
                      <p className="text-sm text-git-body sm:text-right">
                        <span className="font-semibold tabular-nums text-git-title">{event.attendees.toLocaleString()}</span> attendees
                      </p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-git-surface-2" aria-hidden="true">
                        <div className="h-full rounded-full bg-git-link" style={{ width: `${(event.attendees / maxAttendance) * 100}%` }} />
                      </div>
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
