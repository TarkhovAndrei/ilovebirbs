"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useCart } from "@/context/CartContext";
import products from "@/data/products.json";
import { Product } from "@/types";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();
  const product = (products as Product[]).find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-gray-700">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-80 lg:h-full min-h-[400px] bg-gradient-to-br from-green-50 to-sky-50 rounded-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
              />
              {product.featured && (
                <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full">
                  Popular Choice
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-3xl font-bold text-green-600 mb-6">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-gray-600 mb-6">{product.longDescription}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3">
                  What&apos;s Included:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="text-green-500 flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coming Soon & Add to Cart */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                  <span className="text-amber-600 font-medium">
                    Coming Soon
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 rounded-xl font-bold text-lg transition-colors bg-green-500 hover:bg-green-600 text-white"
                >
                  I Want This
                </button>

                <Link
                  href="/cart"
                  className="block text-center mt-4 text-green-600 hover:text-green-700 font-medium"
                >
                  View Cart →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Products */}
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-block text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
