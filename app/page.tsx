import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { PhotoCard } from "@/components/PhotoCard";
import products from "@/data/products.json";
import gallery from "@/data/gallery.json";
import { Product, GalleryPhoto } from "@/types";

export default function Home() {
  const featuredProducts = (products as Product[]).filter((p) => p.featured);
  const featuredPhotos = (gallery as GalleryPhoto[]).filter((p) => p.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Watch Beautiful Birbs
              <br />
              <span className="text-yellow-300">From Your Backyard</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto mb-8">
              Build your own smart bird feeder with our Raspberry Pi camera
              kits. Capture stunning photos of your feathered friends
              automatically! Coming soon — join the waitlist!
            </p>

            {/* Example Videos */}
            <div className="w-full max-w-[2000px] mx-auto mb-12 px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
                  <video
                    src="/videos/preview_short_cardinal.mp4"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <p className="text-xl text-green-100 mt-6 font-bold text-center">
                    Northern Cardinal
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
                  <video
                    src="/videos/preview_short_titmouse.mp4"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <p className="text-xl text-green-100 mt-6 font-bold text-center">
                    Tufted Titmouse
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                Explore Kits
              </Link>
              <Link
                href="/gallery"
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Auto-Capture Photos
              </h3>
              <p className="text-gray-600">
                Motion-activated camera captures every bird visit automatically
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Easy Assembly
              </h3>
              <p className="text-gray-600">
                Step-by-step guides make setup a breeze, even for beginners
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Eco-Friendly
              </h3>
              <p className="text-gray-600">
                Solar options available, sustainable materials used throughout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Birb Kits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect kit for your bird watching adventures. From
              beginner-friendly to advanced AI-powered options.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Birb Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out these amazing bird photos captured by our community
              using I Love Birbs kits!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
          <div className="text-center mt-10 space-x-4">
            <Link
              href="/gallery"
              className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors"
            >
              View Full Gallery
            </Link>
            <Link
              href="/submit-photo"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Share Your Photos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-400 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Meet Your Local Birbs?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Our kits are coming soon! Join the waitlist to be first in line
            and get an exclusive early-bird discount.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
