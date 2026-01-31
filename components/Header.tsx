"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🐦</span>
            <span className="text-xl font-bold text-gray-900">
              I Love Birbs
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Kits
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/submit-photo"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Share Your Birbs
            </Link>
          </div>

          <Link
            href="/cart"
            className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="font-medium">Wishlist</span>
            {totalItems > 0 && (
              <span className="bg-white text-green-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="flex justify-center space-x-6">
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Kits
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Gallery
            </Link>
            <Link
              href="/submit-photo"
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Share
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
