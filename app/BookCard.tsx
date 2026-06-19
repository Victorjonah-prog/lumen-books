import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/lib/data";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group block rounded-lg border border-zinc-200 p-3 hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded bg-zinc-100">
        <Image
          src={book.coverImageUrl}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="mt-2 text-sm font-medium line-clamp-1">{book.title}</h3>
      <p className="text-xs text-zinc-500">{book.author}</p>
      <p className="mt-1 text-sm font-semibold">${book.price.toFixed(2)}</p>
    </Link>
  );
}