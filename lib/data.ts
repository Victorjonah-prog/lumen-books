export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  description: string;
  coverImageUrl: string;
  category: string;
  createdAt: string; 
  ratingsCount: number;
  featured: boolean;
  sellerId: string;
};


const books: Book[] = [
  {
    id: "1",
    slug: "the-midnight-library",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 14.99,
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/0525559477-L.jpg",
    category: "Fiction",
    createdAt: "2024-01-15T00:00:00.000Z",
    ratingsCount: 1342,
    featured: true,
    sellerId: "demo-seller-1",
  },
  {
    id: "2",
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    price: 18.99,
    description:
      "An easy and proven way to build good habits and break bad ones.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/0735211299-L.jpg",
    category: "Self-Help",
    createdAt: "2024-02-01T00:00:00.000Z",
    ratingsCount: 2891,
    featured: true,
    sellerId: "demo-seller-1",
  },
  {
    id: "3",
    slug: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 16.5,
    description:
      "A lone astronaut must save the earth from disaster in this propulsive science fiction thriller.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/0593135202-L.jpg",
    category: "Science Fiction",
    createdAt: "2024-01-20T00:00:00.000Z",
    ratingsCount: 1654,
    featured: true,
    sellerId: "demo-seller-1",
  },
  {
    id: "4",
    slug: "the-silent-patient",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 13.99,
    description:
      "A woman's act of violence against her husband and the therapist obsessed with uncovering her motive.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/1250301696-L.jpg",
    category: "Thriller",
    createdAt: "2024-03-05T00:00:00.000Z",
    ratingsCount: 987,
    featured: false,
    sellerId: "demo-seller-1",
  },
  {
    id: "5",
    slug: "educated",
    title: "Educated",
    author: "Tara Westover",
    price: 15.99,
    description:
      "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/0399590501-L.jpg",
    category: "Memoir",
    createdAt: "2024-02-18T00:00:00.000Z",
    ratingsCount: 2103,
    featured: true,
    sellerId: "demo-seller-1",
  },
  {
    id: "6",
    slug: "dune",
    title: "Dune",
    author: "Frank Herbert",
    price: 12.99,
    description:
      "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/0441013597-L.jpg",
    category: "Science Fiction",
    createdAt: "2024-01-10T00:00:00.000Z",
    ratingsCount: 3201,
    featured: false,
    sellerId: "demo-seller-1",
  },
  {
    id: "7",
    slug: "the-seven-husbands-of-evelyn-hugo",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 14.5,
    description:
      "Reclusive Hollywood icon Evelyn Hugo finally tells her life story to an unknown journalist.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/1501161938-L.jpg",
    category: "Fiction",
    createdAt: "2024-03-12T00:00:00.000Z",
    ratingsCount: 1876,
    featured: false,
    sellerId: "demo-seller-1",
  },
  {
    id: "8",
    slug: "sapiens",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 19.99,
    description:
      "A sweeping look at how Homo sapiens came to dominate the planet.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/0062316095-L.jpg",
    category: "Non-Fiction",
    createdAt: "2024-01-25T00:00:00.000Z",
    ratingsCount: 2754,
    featured: false,
    sellerId: "demo-seller-1",
  },
  {
    id: "9",
    slug: "the-hobbit",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 11.99,
    description:
      "Bilbo Baggins is swept into an epic quest to reclaim a lost kingdom from a fearsome dragon.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/0547928246-L.jpg",
    category: "Fantasy",
    createdAt: "2024-02-28T00:00:00.000Z",
    ratingsCount: 4102,
    featured: false,
    sellerId: "demo-seller-1",
  },
  {
    id: "10",
    slug: "becoming",
    title: "Becoming",
    author: "Michelle Obama",
    price: 17.99,
    description:
      "An intimate, powerful memoir by the former First Lady of the United States.",
    coverImageUrl: "https://covers.openlibrary.org/b/isbn/1524763138-L.jpg",
    category: "Memoir",
    createdAt: "2024-03-20T00:00:00.000Z",
    ratingsCount: 1998,
    featured: false,
    sellerId: "demo-seller-1",
  },
];

// Simulates network/database latency, per the brief's requirement.
function delay(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getAllBooks(): Promise<Book[]> {
  await delay();
  return books;
}

export async function getFeaturedBooks(): Promise<Book[]> {
  await delay();
  return books.filter((b) => b.featured);
}

export async function getBookBySlug(slug: string): Promise<Book | undefined> {
  await delay();
  return books.find((b) => b.slug === slug);
}

export async function getBooksBySeller(sellerId: string): Promise<Book[]> {
  await delay();
  return books.filter((b) => b.sellerId === sellerId);
}

export type BookFilters = {
  category?: string;
  sort?: "price-asc" | "price-desc" | "newest";
};

export async function getFilteredBooks(filters: BookFilters): Promise<Book[]> {
  await delay();
  let result = [...books];

  if (filters.category) {
    result = result.filter(
      (b) => b.category.toLowerCase() === filters.category!.toLowerCase()
    );
  }

  if (filters.sort === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  } else if (filters.sort === "newest") {
    result.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  return result;
}

export async function addBook(
  data: Omit<Book, "id" | "createdAt">
): Promise<Book> {
  await delay();
  const newBook: Book = {
    ...data,
    id: String(books.length + 1),
    createdAt: new Date().toISOString(),
  };
  books.push(newBook);
  return newBook;
}