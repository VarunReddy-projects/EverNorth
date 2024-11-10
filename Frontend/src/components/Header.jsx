import React from 'react';
import { Pill, ShoppingCart, Upload, LogIn } from 'lucide-react';

export default function Header({ onLoginClick }) {
  return (
    <header className="bg-[#2A6041] text-white py-4 px-6 flex items-center justify-between">
      <a href="/" className="text-2xl font-bold hover:text-[#A5D6A7] transition-colors">
        Price A Med
      </a>
      
      <nav className="flex items-center gap-6">
        <a href="/prescriptions" className="flex items-center gap-2 hover:text-[#A5D6A7] transition-colors">
          <Pill size={20} />
          <span>Prescriptions</span>
        </a>
        <a href="/order" className="flex items-center gap-2 hover:text-[#A5D6A7] transition-colors">
          <span>Order</span>
        </a>
        <a href="/cart" className="flex items-center gap-2 hover:text-[#A5D6A7] transition-colors">
          <ShoppingCart size={20} />
          <span>Cart</span>
        </a>
        <a href="/upload" className="flex items-center gap-2 hover:text-[#A5D6A7] transition-colors">
          <Upload size={20} />
          <span>Upload</span>
        </a>
        <button
          onClick={onLoginClick}
          className="bg-[#4CAF50] hover:bg-[#66BB6A] text-white px-6 py-2 rounded-md flex items-center gap-2 transition-colors"
        >
          <LogIn size={20} />
          <span>Login</span>
        </button>
      </nav>
    </header>
  );
}
