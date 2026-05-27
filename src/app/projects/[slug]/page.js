import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/app/components/caseStudy/CaseStudyTemplate";
import {
  getAllCaseStudySlugs,
  getCaseStudy,
} from "@/data/caseStudies";

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Project not found | TheDigiSeed" };
  }

  return {
    title: `${study.title} | TheDigiSeed`,
    description: study.tagline,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyTemplate study={study} />;
}
