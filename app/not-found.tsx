import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-semibold mb-2">Page not found</h2>
        <p className="text-zinc-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded bg-zinc-900 text-white px-6 py-2.5 font-medium hover:bg-black"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}