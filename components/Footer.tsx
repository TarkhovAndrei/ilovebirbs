import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🐦</span>
              <span className="text-xl font-bold text-white">I Love Birbs</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Bringing you closer to nature with our Raspberry Pi-powered bird
              feeder camera kits. Watch, photograph, and share the beautiful
              birds in your backyard.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Explore Kits
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Bird Gallery
                </Link>
              </li>
              <li>
                <Link href="/submit-photo" className="hover:text-white transition-colors">
                  Share Your Photos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@ilovebirbs.com" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <span className="text-gray-500">Assembly Guides (coming soon)</span>
              </li>
              <li>
                <span className="text-gray-500">FAQ (coming soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} I Love Birbs. All rights reserved.</p>
          <p className="mt-2">Made with 💚 for bird lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
}
