import Link from "next/link";
import Image from "next/image";
import CTA from "@/app/components/HomePage/CTA";
import { caseStudyList } from "@/data/caseStudies";

export const metadata = {
  title: "Projects | TheDigiSeed",
  description: "Case studies and selected work from TheDigiSeed.",
};

export default function ProjectsPage() {
  return (
    <div>
      <section className="!pt-8 sm:!pt-10 md:!pt-12">
        <div className="mx-auto px-4 sm:px-6 2xl:px-20">
          <h1 className="!text-3xl sm:!text-4xl md:!text-5xl !font-bold !leading-tight max-w-3xl">
            Projects & case studies
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            A selection of branding, web, and product work — how we partner
            with clients from strategy through launch.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto px-4 sm:px-6 2xl:px-20">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {caseStudyList.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/projects/${study.slug}`}
                  className="group block bg-[#fafafa] rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[16/10] bg-gray-200">
                    <Image
                      src={study.heroImage}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="text-xs px-2.5 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <h2 className="!text-xl sm:!text-2xl !font-bold !mb-2 group-hover:opacity-80 transition-opacity">
                      {study.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
                      {study.tagline}
                    </p>
                    <span className="inline-block mt-4 text-sm font-medium text-[#1c1c1c]">
                      View case study →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA />
    </div>
  );
}
