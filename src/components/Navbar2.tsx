// create a navbar with three menus Home, Products,cart in next js . Style with css

import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
const Navbar = () => {
    return (    
        <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/"> MyShop </Link>
          </div>
    
          {/* Menu Items */}    
          <div className="hidden md:flex space-x-6 hover:text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/products" className="hover:text-gray-300">
              Products  </Link>                   
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
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    </button>
                </div>  
            </div>
            </nav>
    );
};
}