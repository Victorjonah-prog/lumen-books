export default function RecommendationsSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="aspect-[2/3] bg-zinc-200 rounded-lg animate-pulse" />
          <div className="h-4 bg-zinc-200 rounded animate-pulse" />
          <div className="h-3 w-2/3 bg-zinc-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
}