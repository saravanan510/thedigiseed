import Link from "next/link";
import Image from "next/image";
import Button from "../common/button/Button";
import { caseStudyList } from "@/data/caseStudies";

const Works = () => {
  const featured = caseStudyList.slice(0, 4);

  return (
    <section id="works">
      <div className="mx-auto px-4 sm:px-6 2xl:px-20">
        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Turn your ideas into impactful{" "}
            <br className="hidden sm:block" />
            <span className="opacity-50">Solutions like them!</span>
          </h2>
          <div className="w-full sm:w-auto shrink-0">
            <Button type={"contained"} href="/projects">
              <span className="text-sm md:text-base lg:text-lg">
                View all projects
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-24">
          <div className="basis-full md:basis-1/2 flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24">
            {featured.slice(0, 2).map((study) => (
              <ProjectCard key={study.slug} study={study} />
            ))}
          </div>
          <div className="basis-full md:basis-1/2 flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 md:mt-8 lg:mt-16 xl:mt-24">
            {featured.slice(2, 4).map((study) => (
              <ProjectCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ study }) {
  return (
    <Link
      href={`/projects/${study.slug}`}
      className="group block w-full aspect-[4/3] sm:aspect-auto sm:h-64 md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-lg overflow-hidden bg-gray-200 relative"
    >
      <Image
        src={study.heroImage}
        alt={study.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6">
        <p className="text-white text-lg sm:text-xl font-bold">{study.title}</p>
        <p className="text-white/80 text-sm mt-1 line-clamp-2">{study.tagline}</p>
        <span className="text-white text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          View case study →
        </span>
      </div>
    </Link>
  );
}

export default Works;
