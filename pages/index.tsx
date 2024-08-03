"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

const foodItems = [
  { id: 1, name: "Burger", price: 5 },
  { id: 2, name: "Pizza", price: 8 },
  { id: 3, name: "Sushi", price: 12 },
];

export default function Home() {
  const [cart, setCart] = useState<
    { id: number; name: string; price: number; quantity: number }[]
  >([]);
  console.log("Bot Token:", process.env.NEXT_PUBLIC_BOT_TOKEN);
  useEffect(() => {
    const telegram = window?.Telegram.WebApp;
    if (telegram) {
      telegram.ready();
    }
  }, []);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleCheckout = () => {
    // Here, you could integrate with Telegram WebApp or any other checkout process.
    alert("Checkout successful!");
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main className={`p-6 flex flex-col ${inter.className} max-w-md mx-auto`}>
      <h1 className="text-2xl font-bold mb-4">Order Food</h1>
      <div className="mb-8">
        {foodItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>
              {item.name} - ${item.price}
            </span>
            <Button onClick={() => addToCart(item)}>Add to Cart</Button>
          </div>
        ))}
      </div>
      {/* <div className="bg min-w-24 text-white text-sm flex justify-center items-center px-8 aspect-square bg-purple-500 rounded-xl">
        Hello Oyin!
      </div> */}
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <div className="mb-8">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold">Total:</span>
        <span className="font-bold">${totalAmount}</span>
      </div>
      <Button onClick={handleCheckout}>Checkout</Button>
    </main>
  );
}
