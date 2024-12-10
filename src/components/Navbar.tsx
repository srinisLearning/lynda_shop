"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
      MyShop 
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 hover:text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link href="/cart" className="hover:text-gray-300">
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none focus:ring"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600">
          <Link href="/" className="block px-4 py-2 hover:bg-blue-500">
            Home
          </Link>
          <Link href="/products" className="block px-4 py-2 hover:bg-blue-500">
            Products
          </Link>
          <Link href="/cart" className="block px-4 py-2 hover:bg-blue-500">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
