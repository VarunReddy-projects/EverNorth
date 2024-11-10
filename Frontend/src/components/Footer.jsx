import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2A6041] text-white py-2 text-[1rem]">
      <div className="max-w-7xl mx-auto px-4 py-2 ">
        <div className="flex justify-between items-center">
        <div className="flex text-center   items-center">
            &copy; {new Date().getFullYear()} Price A Med. All rights reserved.
        </div>
        <div className="flex gap-8">
            <a
              href="#"
              className="text-sm hover:text-[#A5D6A7] transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#A5D6A7] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#A5D6A7] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#A5D6A7] transition-colors"
            >
              Contact
            </a>
            </div>
        </div>

     
      </div>
    </footer>
  );
}
