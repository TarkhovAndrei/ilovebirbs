"use client";

import Image from "next/image";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
      <div className="relative w-24 h-24 bg-gradient-to-br from-green-50 to-sky-50 rounded-lg flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex-grow">
        <h3 className="font-bold text-gray-900">{product.name}</h3>
        <p className="text-green-600 font-medium">${product.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          -
        </button>
        <span className="w-8 text-center font-medium">{quantity}</span>
        <button
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="font-bold text-gray-900">
          ${(product.price * quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 text-sm transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
