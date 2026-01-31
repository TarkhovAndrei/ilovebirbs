"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-48 bg-gradient-to-br from-green-50 to-sky-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
          {product.featured && (
            <span className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              product.inStock
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {product.inStock ? "I Want This" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}
