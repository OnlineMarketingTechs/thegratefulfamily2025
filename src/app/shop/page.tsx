import Link from "next/link";

export default function Shop() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 flex flex-col items-center py-10 px-4 font-sans">
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-6 text-center">Shop Art & Prints</h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
                Explore curated art prints, woven blankets, digital downloads, and artist services. Every purchase supports Colorado’s psychedelic art community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                <Link href="/shop/prints" className="block bg-white rounded-lg shadow p-6 hover:bg-yellow-50 transition">
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">Art Prints</h2>
                    <p className="text-gray-600">High-quality prints from featured artists.</p>
                </Link>
                <Link href="/shop/blankets" className="block bg-white rounded-lg shadow p-6 hover:bg-yellow-50 transition">
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">Woven Blankets</h2>
                    <p className="text-gray-600">Premium, collectible woven blankets.</p>
                </Link>
                <Link href="/shop/digital" className="block bg-white rounded-lg shadow p-6 hover:bg-yellow-50 transition">
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">Digital Downloads</h2>
                    <p className="text-gray-600">Instant access to digital art and resources.</p>
                </Link>
                <Link href="/shop/services" className="block bg-white rounded-lg shadow p-6 hover:bg-yellow-50 transition">
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">Artist Services</h2>
                    <p className="text-gray-600">Production, fulfillment, and web setup for artists.</p>
                </Link>
            </div>
        </div>
    );
}
