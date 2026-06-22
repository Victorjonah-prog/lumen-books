import { getAllBooks } from "@/lib/data";
import BookCard from "@/components/BookCard";


async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Recommendations({
  currentSlug,
  category,
}: {
  currentSlug: string;
  category: string;
}) {
  await delay(1500);

  const allBooks = await getAllBooks();
  const recommended = allBooks
    .filter((b) => b.slug !== currentSlug && b.category === category)
    .slice(0, 4);

  if (recommended.length === 0) {
    return <p className="text-zinc-500">No related recommendations yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {recommended.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}