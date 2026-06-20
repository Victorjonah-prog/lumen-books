import { createBookAction } from "./actions";

export default function NewBookPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-semibold mb-8">Add New Book</h1>

      <form action={createBookAction} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input name="title" required className="w-full rounded border border-zinc-300 px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input name="author" required className="w-full rounded border border-zinc-300 px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug (URL-friendly, e.g. my-book-title)</label>
          <input name="slug" required pattern="[a-z0-9-]+" className="w-full rounded border border-zinc-300 px-3 py-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price ($)</label>
            <input name="price" type="number" step="0.01" required className="w-full rounded border border-zinc-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input name="category" required className="w-full rounded border border-zinc-300 px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Cover Image URL</label>
          <input name="coverImageUrl" type="url" required className="w-full rounded border border-zinc-300 px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea name="description" rows={4} required className="w-full rounded border border-zinc-300 px-3 py-2" />
        </div>

        <button type="submit" className="w-full rounded bg-zinc-900 text-white py-3 font-medium hover:bg-black">
          Add Book
        </button>
      </form>
    </div>
  );
}