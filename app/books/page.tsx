import { getFilteredBooks } from "@/lib/data";
import BookCard from "@/components/BookCard";

type SearchParams = {
  category?: string;
  sort?: string;
};

export default async function BooksPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const sort =
    params.sort === "price-asc" || params.sort === "price-desc" || params.sort === "newest"
      ? params.sort
      : undefined;

  const books = await getFilteredBooks({
    category: params.category,
    sort,
  });

  const categories = [
    "Fiction",
    "Self-Help",
    "Science Fiction",
    "Thriller",
    "Memoir",
    "Fantasy",
    "Non-Fiction",
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Catalog</h1>
          <p className="text-zinc-600 mt-2">{books.length} books</p>
        </div>

        {/* Plain GET form — no JS needed, fully server-rendered */}
        <form className="flex flex-wrap gap-3">
          <select
            name="category"
            defaultValue={params.category ?? ""}
            className="rounded border border-zinc-300 px-3 py-2 text-black text-sm"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            name="sort"
            defaultValue={params.sort ?? ""}
            className="rounded border border-zinc-300 px-3 py-2 text-sm"
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>

          <button
            type="submit"
            className="rounded bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-black"
          >
            Apply
          </button>
        </form>
      </div>

      {books.length === 0 ? (
        <p className="text-zinc-500 text-center py-16">No books match your filters.</p>
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