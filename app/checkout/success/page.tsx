"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function WaitlistSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            You&apos;re on the Waitlist!
          </h1>

          <p className="text-gray-600 mb-6">
            Thanks for your interest in I Love Birbs kits! We&apos;ll send you
            an email as soon as your selected kits are ready to ship.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-green-900 mb-2">
              What Happens Next?
            </h2>
            <ul className="text-green-800 text-left space-y-2">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>
                  You&apos;ll get an email when your kits are ready to order
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🐦</span>
                <span>
                  Early waitlist members get priority access and a discount
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>📸</span>
                <span>
                  In the meantime, check out our community bird gallery!
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View Bird Gallery
            </Link>
            <Link
              href="/products"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Explore More Kits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
