
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 bg-white sticky top-0 z-50 w-full border-b border-gray-100">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Crenovent Logo" className="h-8" />
            <span className="ml-2 text-xl font-semibold text-dark">crenovent</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#why" className="text-sm font-medium text-gray-700 hover:text-primary">Why Crenovent</a>
            <a href="#products" className="text-sm font-medium text-gray-700 hover:text-primary">Products</a>
            <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-primary">Solutions</a>
            <a href="#customers" className="text-sm font-medium text-gray-700 hover:text-primary">Customers</a>
            <a href="#blog" className="text-sm font-medium text-gray-700 hover:text-primary">Blog</a>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="text-sm">Log In</Button>
            <Button variant="default" className="bg-primary text-white text-sm">Get Started</Button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg p-4">
          <div className="flex flex-col gap-4">
            <a href="#why" className="text-sm font-medium text-gray-700 py-2 hover:text-primary">Why Crenovent</a>
            <a href="#products" className="text-sm font-medium text-gray-700 py-2 hover:text-primary">Products</a>
            <a href="#solutions" className="text-sm font-medium text-gray-700 py-2 hover:text-primary">Solutions</a>
            <a href="#customers" className="text-sm font-medium text-gray-700 py-2 hover:text-primary">Customers</a>
            <a href="#blog" className="text-sm font-medium text-gray-700 py-2 hover:text-primary">Blog</a>
            <div className="flex gap-4 mt-2">
              <Button variant="outline" className="text-sm w-full">Log In</Button>
              <Button variant="default" className="bg-primary text-white text-sm w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
