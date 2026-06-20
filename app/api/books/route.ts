import { NextResponse } from "next/server";
import { getAllBooks } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() ?? "";

  const allBooks = await getAllBooks();

  const results = query
    ? allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
      )
    : allBooks;

  return NextResponse.json(results);
}