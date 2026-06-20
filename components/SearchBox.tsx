"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/lib/data";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    const timeout = setTimeout(() => {
      fetch(`/api/books?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data: Book[]) => {
          setResults(data);
          setLoading(false);
        });
    }, 300); // debounce so it doesn't fetch on every keystroke

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative max-w-md">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded border border-zinc-300 px-4 py-2"
      />

      {loading && <p className="text-sm text-zinc-500 mt-2">Searching...</p>}

      {results.length > 0 && (
        <ul className="mt-2 border border-zinc-200 rounded divide-y bg-white">
          {results.map((book) => (
            <li key={book.id}>
              <Link
                href={`/books/${book.slug}`}
                className="flex items-center gap-3 p-2 hover:bg-zinc-50"
              >
                <div className="relative w-8 h-12 flex-shrink-0">
                  <Image src={book.coverImageUrl} alt={book.title} fill className="object-cover rounded" />
                </div>
                <div>
                  <p className="text-sm font-medium">{book.title}</p>
                  <p className="text-xs text-zinc-500">{book.author}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}