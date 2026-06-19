// components/FeaturedBooks.tsx
import { getFeaturedBooks } from "@/lib/data";
import BookCard from "./BookCard";
import Link from "next/link";

export default async function FeaturedBooks() {
  const featuredBooks = await getFeaturedBooks();

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-serif tracking-tight text-zinc-900">
              Featured Books
            </h2>
            <p className="text-zinc-600 mt-3 text-lg">
              Handpicked titles loved by our readers
            </p>
          </div>
          <Link
            href="/books"
            className="text-amber-600 hover:text-amber-700 font-medium mt-4 md:mt-0"
          >
            View all books →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}