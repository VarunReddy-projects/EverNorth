import React from 'react';
import { X, Facebook, Mail } from 'lucide-react'; // Ensure to import any icons used

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-[#2A6041] mb-6 text-center">
          Welcome to Price A Med
        </h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4CAF50] focus:border-[#4CAF50]"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4CAF50] focus:border-[#4CAF50]"
              placeholder="Enter your password"
            />
          </div>
          
          <button className="w-full bg-[#4CAF50] text-white py-2 rounded-md hover:bg-[#66BB6A] transition-colors">
            Login
          </button>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <button className="w-full bg-[#1877F2] text-white py-2 rounded-md hover:bg-[#166FE5] transition-colors flex items-center justify-center gap-2">
            <Facebook size={20} />
            Continue with Facebook
          </button>
          
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Mail size={20} />
            Continue with Google
          </button>
          
          <div className="text-center mt-4">
            <a href="#" className="text-[#4CAF50] hover:text-[#66BB6A]">
              Forgot password?
            </a>
          </div>
          
          <p className="text-sm text-gray-500 text-center mt-6">
            By continuing, you agree to our{' '}
            <a href="#" className="text-[#4CAF50] hover:text-[#66BB6A]">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#4CAF50] hover:text-[#66BB6A]">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
