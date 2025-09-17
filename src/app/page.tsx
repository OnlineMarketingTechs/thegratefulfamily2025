import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center font-sans overflow-hidden bg-custom-bg"
    >
      {/* Overlay gradient and animated effect */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 opacity-30" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full animate-pulse bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 opacity-30 blur-2xl" />
      </div>
      <main className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-12 p-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/the official cutout logo.png"
            alt="The Grateful Family Official Logo"
            width={140}
            height={140}
            priority
            className="drop-shadow-xl"
          />
          <h1
            className="text-5xl sm:text-6xl font-extrabold text-center text-red-800 tracking-tight mb-10"
            style={{
              textShadow: "2px 2px 8px #222, 0 0 12px #fff"
            }}
          >
            The Grateful Family
          </h1>
          <p className="text-xl sm:text-2xl text-center text-gray-700 max-w-2xl mb-2">
            Colorado’s home for psychedelic art, music, and community. Co-creating, sharing, and celebrating the Grateful Dead spirit.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="/community" className="bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-800 transition font-semibold text-lg">Community Hub</Link>
            <Link href="/shop" className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition font-semibold text-lg">Shop Art & Prints</Link>
          </div>
        </div>

        {/* Featured Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
          <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-purple-50 transition">
            <Image src="/file.svg" alt="Artist Features" width={48} height={48} className="mb-2" />
            <h2 className="text-xl font-bold text-purple-800 mb-1">Artist Features</h2>
            <p className="text-gray-600 mb-2">Meet Colorado’s visionary artists, read interviews, and explore their creative journeys.</p>
            <Link href="/community/blog" className="text-purple-700 font-semibold hover:underline">Explore Blog</Link>
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-pink-50 transition">
            <Image src="/window.svg" alt="Events Calendar" width={48} height={48} className="mb-2" />
            <h2 className="text-xl font-bold text-pink-700 mb-1">Events Calendar</h2>
            <p className="text-gray-600 mb-2">Discover upcoming shows, festivals, and gatherings in Colorado’s vibrant scene.</p>
            <Link href="/community/events" className="text-pink-700 font-semibold hover:underline">See Events</Link>
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-yellow-50 transition">
            <Image src="/vercel.svg" alt="Shop" width={48} height={48} className="mb-2" />
            <h2 className="text-xl font-bold text-yellow-700 mb-1">Shop & Support</h2>
            <p className="text-gray-600 mb-2">Browse prints, blankets, and digital art. Every purchase supports local artists.</p>
            <Link href="/shop" className="text-yellow-700 font-semibold hover:underline">Shop Now</Link>
          </div>
        </section>
      </main>
      <footer className="relative z-10 mt-auto py-8 text-center text-gray-500 text-sm w-full bg-white/60 backdrop-blur">
        &copy; {new Date().getFullYear()} The Grateful Family. All rights reserved.
      </footer>
    </div>
  );
}
