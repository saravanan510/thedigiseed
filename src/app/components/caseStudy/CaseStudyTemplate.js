import Image from "next/image";
import Link from "next/link";
import Button from "../common/button/Button";
import CTA from "../HomePage/CTA";

const container = "mx-auto px-4 sm:px-6 2xl:px-20";

function CaseStudyHero({ study }) {
  return (
    <section className="!pt-6 sm:!pt-8 md:!pt-10 !pb-0">
      <div className={container}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#1c1c1c] transition-colors mb-6 sm:mb-8"
        >
          <span aria-hidden="true">←</span> All projects
        </Link>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
          {study.services.map((service) => (
            <span
              key={service}
              className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700"
            >
              {service}
            </span>
          ))}
        </div>

        <h1 className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl !font-bold !leading-tight max-w-4xl">
          {study.title}
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          {study.tagline}
        </p>

        <dl className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-gray-200 pt-6 sm:pt-8">
          <div>
            <dt className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
              Client
            </dt>
            <dd className="mt-1 text-sm sm:text-base font-semibold text-[#1c1c1c]">
              {study.client}
            </dd>
          </div>
          <div>
            <dt className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
              Year
            </dt>
            <dd className="mt-1 text-sm sm:text-base font-semibold text-[#1c1c1c]">
              {study.year}
            </dd>
          </div>
          {study.website && (
            <div className="col-span-2 sm:col-span-2">
              <dt className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                Live site
              </dt>
              <dd className="mt-1 text-sm sm:text-base font-semibold">
                <a
                  href={study.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  Visit project →
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12 relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden">
        <Image
          src={study.heroImage}
          alt={`${study.title} hero`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

function CaseStudyStats({ stats }) {
  if (!stats?.length) return null;

  return (
    <section className="!py-8 sm:!py-10">
      <div className={container}>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="bg-[#fafafa] rounded-2xl p-6 sm:p-8 text-center sm:text-left"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c1c1c]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CaseStudyOverview({ overview, deliverables }) {
  return (
    <section>
      <div className={container}>
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-20">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
              {overview}
            </p>
          </div>
          {deliverables?.length > 0 && (
            <aside className="mt-8 lg:mt-0 lg:w-72 xl:w-80 shrink-0">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                Deliverables
              </h3>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="text-sm sm:text-base text-[#1c1c1c] pl-4 border-l-2 border-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

function CaseStudySections({ sections }) {
  return (
    <section>
      <div className={container}>
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 max-w-3xl">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="!text-xl sm:!text-2xl md:!text-3xl !font-bold !mb-3 sm:!mb-4">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyGallery({ gallery }) {
  if (!gallery?.length) return null;

  return (
    <section>
      <div className={container}>
        <h2 className="mb-6 sm:mb-8">Project gallery</h2>
        <ul className="flex flex-col gap-4 sm:gap-6">
          {gallery.map((item, index) => (
            <li
              key={`${item.alt}-${index}`}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-200"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CaseStudyTestimonial({ testimonial }) {
  if (!testimonial) return null;

  return (
    <section>
      <div className={container}>
        <blockquote className="bg-[#fafafa] rounded-2xl p-6 sm:p-8 md:p-10 max-w-3xl">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#1c1c1c]">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-4 sm:mt-6">
            <cite className="not-italic font-semibold text-sm sm:text-base">
              {testimonial.author}
            </cite>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {testimonial.role}
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function CaseStudyNext({ nextProject }) {
  if (!nextProject) return null;

  return (
    <section className="border-t border-gray-200">
      <div className={container}>
        <p className="text-sm text-gray-500 mb-2">Next project</p>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group inline-block"
        >
          <h2 className="!text-2xl sm:!text-3xl md:!text-4xl !font-bold group-hover:opacity-70 transition-opacity">
            {nextProject.title}
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </h2>
        </Link>
      </div>
    </section>
  );
}

export default function CaseStudyTemplate({ study }) {
  return (
    <article>
      <CaseStudyHero study={study} />
      <CaseStudyStats stats={study.stats} />
      <CaseStudyOverview
        overview={study.overview}
        deliverables={study.deliverables}
      />
      <CaseStudySections sections={study.sections} />
      <CaseStudyGallery gallery={study.gallery} />
      <CaseStudyTestimonial testimonial={study.testimonial} />
      <CaseStudyNext nextProject={study.nextProject} />
      <CTA />
    </article>
  );
}
