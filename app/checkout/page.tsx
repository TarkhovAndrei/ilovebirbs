"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function WaitlistPage() {
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Waitlist
          </h1>
          <p className="text-gray-600 mb-6">
            Pick some kits you&apos;re interested in first!
          </p>
          <Link
            href="/products"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Browse Kits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Get Notified When We Ship
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Selected Kits */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Kits You&apos;re Interested In
            </h2>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-4 pb-4 border-b"
                >
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-50 to-sky-50 rounded-lg flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-900">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 flex justify-between text-lg font-bold text-gray-900">
              <span>Estimated Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Leave Your Email
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <p className="text-amber-800 text-sm">
                <strong>Coming Soon!</strong>
                <br />
                We&apos;re putting the finishing touches on our kits. Leave your
                email and we&apos;ll notify you as soon as they&apos;re ready to
                ship!
              </p>
            </div>

            <form
              name="waitlist"
              method="POST"
              action="/checkout/success"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="waitlist" />

              {/* Hidden field to include wishlist items */}
              <input
                type="hidden"
                name="interested-kits"
                value={items.map(item => `${item.product.name} (Qty: ${item.quantity})`).join(', ')}
              />
              <input
                type="hidden"
                name="estimated-total"
                value={`$${totalPrice.toFixed(2)}`}
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-lg transition-colors bg-green-500 hover:bg-green-600 text-white"
              >
                Notify Me When Ready
              </button>
            </form>

            <p className="text-gray-400 text-xs text-center mt-4">
              We&apos;ll only email you about kit availability. No spam, ever.
            </p>

            <Link
              href="/cart"
              className="block text-center mt-4 text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
