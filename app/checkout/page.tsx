"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function WaitlistPage() {
  const router = useRouter();
  const { items, totalPrice } = useCart();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          interestedKits: items.map((item) => ({
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/checkout/success");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${
                  isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {isLoading ? "Signing up..." : "Notify Me When Ready"}
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
