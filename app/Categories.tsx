import Link from "next/link";

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif tracking-tight text-zinc-900">
            Browse by Genre
          </h2>
          <p className="text-zinc-600 mt-3 text-lg">
            Find your next favorite book
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          
         
          <Link href="/books?category=Fiction" className="group">
            <div className="h-52 flex flex-col items-center justify-center rounded-3xl border border-zinc-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                📖
              </div>
              <h3 className="font-medium text-xl text-zinc-900 group-hover:text-amber-600 transition-colors">
                Fiction
              </h3>
            </div>
          </Link>

          <Link href="/books?category=Self-Help" className="group">
            <div className="h-52 flex flex-col items-center justify-center rounded-3xl border border-zinc-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                🌱
              </div>
              <h3 className="font-medium text-xl text-zinc-900 group-hover:text-amber-600 transition-colors">
                Self-Help
              </h3>
            </div>
          </Link>

          
          <Link href="/books?category=Science Fiction" className="group">
            <div className="h-52 flex flex-col items-center justify-center rounded-3xl border border-zinc-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h3 className="font-medium text-xl text-zinc-900 group-hover:text-amber-600 transition-colors">
                Science Fiction
              </h3>
            </div>
          </Link>

        
          <Link href="/books?category=Thriller" className="group">
            <div className="h-52 flex flex-col items-center justify-center rounded-3xl border border-zinc-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                🕵️
              </div>
              <h3 className="font-medium text-xl text-zinc-900 group-hover:text-amber-600 transition-colors">
                Thriller
              </h3>
            </div>
          </Link>

          
          <Link href="/books?category=Memoir" className="group">
            <div className="h-52 flex flex-col items-center justify-center rounded-3xl border border-zinc-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                📜
              </div>
              <h3 className="font-medium text-xl text-zinc-900 group-hover:text-amber-600 transition-colors">
                Memoir
              </h3>
            </div>
          </Link>

          
          <Link href="/books?category=Fantasy" className="group">
            <div className="h-52 flex flex-col items-center justify-center rounded-3xl border border-zinc-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-violet-100 text-violet-700 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                🧝
              </div>
              <h3 className="font-medium text-xl text-zinc-900 group-hover:text-amber-600 transition-colors">
                Fantasy
              </h3>
            </div>
          </Link>

          <Link href="/books?category=Non-Fiction" className="group">
            <div className="h-52 flex flex-col items-center justify-center rounded-3xl border border-zinc-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-20 h-20 bg-zinc-100 text-zinc-700 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                📚
              </div>
              <h3 className="font-medium text-xl text-zinc-900 group-hover:text-amber-600 transition-colors">
                Non-Fiction
              </h3>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}