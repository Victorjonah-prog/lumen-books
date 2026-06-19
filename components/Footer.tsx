import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 mt-auto">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-xl font-serif font-bold">L</span>
            </div>
            <span className="font-serif text-2xl text-white tracking-tight">Lumen Books</span>
          </div>

          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/books" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
          </nav>

          <div className="text-xs text-zinc-500 text-center md:text-right">
            © {new Date().getFullYear()} Lumen Books<br />
            Curated Literature • Built with care
          </div>
        </div>
      </div>
    </footer>
  );
}