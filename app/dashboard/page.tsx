import { getBooksBySeller } from "@/lib/data";
import BookCard from "@/components/BookCard";
import Link from "next/link";

export default async function DashboardPage() {
  const sellerId = "demo-seller-1";
  const books = await getBooksBySeller(sellerId);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Seller Dashboard</h1>
          <p className="text-zinc-600 mt-2">
            Managing {books.length} {books.length === 1 ? "listing" : "listings"}
          </p>
        </div>
        <Link
          href="/dashboard/new"
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 text-white px-6 py-3 font-medium hover:bg-black transition"
        >
          + Add New Book
        </Link>
      </div>

      {books.length === 0 ? (
        <p className="text-zinc-500 py-12 text-center">
          You haven&apos;t listed any books yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}