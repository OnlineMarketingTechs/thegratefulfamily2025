import Link from "next/link";

export default function CommunityHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100 flex flex-col items-center py-10 px-4 font-sans">
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-6 text-center">Community Hub</h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
                Welcome to the heart of The Grateful Family! Connect, share, and celebrate Colorado’s psychedelic art & music scene. Explore artist features, join the forum, submit your art, and discover local events.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                <Link href="/community/blog" className="block bg-white rounded-lg shadow p-6 hover:bg-purple-50 transition">
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">Artist Features & Blog</h2>
                    <p className="text-gray-600">Read interviews, stories, and spotlights on local artists.</p>
                </Link>
                <Link href="/community/forum" className="block bg-white rounded-lg shadow p-6 hover:bg-purple-50 transition">
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">Community Forum</h2>
                    <p className="text-gray-600">Join discussions, connect with fans, and introduce yourself.</p>
                </Link>
                <Link href="/community/ugc-gallery" className="block bg-white rounded-lg shadow p-6 hover:bg-purple-50 transition">
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">Fan Gallery</h2>
                    <p className="text-gray-600">Showcase your art, photos, and stories. Submit your work!</p>
                </Link>
                <Link href="/community/events" className="block bg-white rounded-lg shadow p-6 hover:bg-purple-50 transition">
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">Events Calendar</h2>
                    <p className="text-gray-600">Discover upcoming Colorado music and art events.</p>
                </Link>
            </div>
        </div>
    );
}
