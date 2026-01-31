"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/CartItem";

export default function CartPage() {
  const { items, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven&apos;t added any birb kits yet!
            </p>
            <Link
              href="/products"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Browse Kits
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Summary</h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Get Notified When Ready
          </Link>

          <Link
            href="/products"
            className="block text-center mt-4 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
