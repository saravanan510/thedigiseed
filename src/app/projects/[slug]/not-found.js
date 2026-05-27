import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="!text-2xl sm:!text-3xl !font-bold">Project not found</h1>
      <p className="mt-4 text-gray-600 max-w-md">
        This case study doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/projects"
        className="mt-8 text-sm font-semibold hover:underline"
      >
        ← Back to all projects
      </Link>
    </section>
  );
}
