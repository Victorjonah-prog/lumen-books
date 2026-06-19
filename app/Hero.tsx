import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-zinc-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium">
              Curated with care
            </div>

            <h1 className="text-6xl lg:text-7xl font-serif tracking-tighter leading-tight text-zinc-900">
              Stories that<br />
              <span className="text-amber-600">illuminate</span> the soul
            </h1>

            <p className="text-xl text-zinc-600 max-w-md">
              Discover handpicked books that inspire, challenge, and transport you. 
              Welcome to your next great read.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="/books"
                className="bg-zinc-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-medium text-lg transition-all active:scale-95"
              >
                Browse Collection
              </Link>
              <Link
                href="/books"
                className="border text-black border-zinc-300  px-8 py-4 rounded-2xl font-medium text-lg transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

         
          <div className="relative hidden lg:block">
            <div className="relative h-[520px] w-full">
            
              <div className="absolute right-8 top-12 w-64 rotate-6 shadow-2xl rounded-2xl overflow-hidden z-20">
                <Image
                  src="/img1.jpg"
                  alt="The Alchemist"
                  width={400}
                  height={520}
                  className="object-cover"
                />
              </div>

            
              <div className="absolute right-80 top-32 w-60 -rotate-12 shadow-2xl rounded-2xl overflow-hidden z-10">
                <Image
                  src="/img2.jpg"
                  alt="The Midnight Library"
                  width={380}
                  height={500}
                  className="object-cover"
                />
              </div>

            
              <div className="absolute right-40 top-64 w-52 rotate-3 shadow-2xl rounded-2xl overflow-hidden">
                <Image
                  src="/img3.jpg"
                  alt="Project Hail Mary"
                  width={340}
                  height={480}
                  className="object-cover"
                />
              </div>

           
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-transparent to-transparent z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </div>
  );
}