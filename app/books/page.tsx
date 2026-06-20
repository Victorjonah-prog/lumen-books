import { getFilteredBooks } from "@/lib/data";
import BookCard from "@/components/BookCard";
import SearchBox from "@/components/SearchBox";

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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Catalog</h1>
          <p className="text-zinc-600 mt-2">{books.length} books</p>
        </div>

        <form className="flex flex-wrap gap-3">
     
        </form>
      </div>

    
      <div className="mb-10">
        <SearchBox />
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