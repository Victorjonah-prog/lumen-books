import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllBooks, getBookBySlug } from "@/lib/data";
import type { Metadata } from "next";
import Recommendations from "./Recommendations";
import RecommendationsSkeleton from "./RecommendationsSkeleton";

// SSG: pre-render every known book at build time
export async function generateStaticParams() {
  const books = await getAllBooks();
  return books.map((book) => ({ slug: book.slug }));
}

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    return { title: "Book not found — Lumen Books" };
  }

  return {
    title: `${book.title} by ${book.author} — Lumen Books`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [{ url: book.coverImageUrl }],
    },
  };
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative aspect-[2/3] w-full max-w-sm overflow-hidden rounded-lg bg-zinc-100">
          <Image
            src={book.coverImageUrl}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-semibold">{book.title}</h1>
          <p className="text-zinc-600 mt-1">by {book.author}</p>
          <p className="text-2xl font-semibold mt-4">${book.price.toFixed(2)}</p>
          <p className="text-sm text-zinc-500 mt-1">
            {book.ratingsCount.toLocaleString()} ratings · {book.category}
          </p>
          <p className="mt-6 text-zinc-700 leading-relaxed">{book.description}</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6">Recommended for you</h2>
        <Suspense fallback={<RecommendationsSkeleton />}>
          <Recommendations currentSlug={book.slug} category={book.category} />
        </Suspense>
      </div>
    </div>
  );
}