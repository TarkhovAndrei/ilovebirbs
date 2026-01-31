import { ProductCard } from "@/components/ProductCard";
import products from "@/data/products.json";
import { Product } from "@/types";

export const metadata = {
  title: "Bird Feeder Kits | I Love Birbs",
  description:
    "Explore our upcoming Raspberry Pi-powered bird feeder camera kits. From starter kits to advanced AI-powered setups. Join the waitlist!",
};

export default function ProductsPage() {
  const allProducts = products as Product[];
  const mainKits = allProducts.filter(
    (p) => p.id.includes("kit") && !p.id.includes("upgrade") && !p.id.includes("addon")
  );
  const addons = allProducts.filter(
    (p) => p.id.includes("upgrade") || p.id.includes("addon")
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bird Feeder Kits
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to start capturing amazing bird photos in your
            backyard. Each kit includes a Raspberry Pi, camera, and our
            easy-to-follow assembly guide. Pick the kits you want and join the
            waitlist to get notified when we start shipping!
          </p>
        </div>

        {/* Main Kits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Kits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainKits.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Add-ons */}
        {addons.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Upgrades & Add-ons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addons.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Info Section */}
        <section className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What&apos;s Included?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Hardware</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Raspberry Pi (model varies by kit)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Camera module with mount
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Pre-configured SD card
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Power adapter or solar panel
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Feeder base with mounting hardware
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Software & Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Motion-detection camera software
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Photo gallery web interface
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Step-by-step assembly guide
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Email support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Free software updates
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
