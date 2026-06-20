export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="h-8 w-48 bg-zinc-200 rounded animate-pulse mb-10" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="aspect-[2/3] bg-zinc-200 rounded-lg animate-pulse" />
            <div className="h-4 bg-zinc-200 rounded animate-pulse" />
            <div className="h-3 w-2/3 bg-zinc-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}