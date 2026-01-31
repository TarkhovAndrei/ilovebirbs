import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🐦</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! Looks like this birb flew away. The page you&apos;re looking for
          doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors"
          >
            Browse Kits
          </Link>
        </div>
      </div>
    </div>
  );
}
