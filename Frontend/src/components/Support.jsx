import React from 'react';
import { HeadphonesIcon, Clock, MessageSquare } from 'lucide-react';

export default function Support() {
  return (
    <section className="py-16 bg-[#A5D6A7]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2A6041] text-center mb-12">
          Our Support
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <HeadphonesIcon size={48} className="text-[#4CAF50] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2A6041] mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our team is always here to help you</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock size={48} className="text-[#4CAF50] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2A6041] mb-2">Quick Response</h3>
            <p className="text-gray-600">Get answers to your questions fast</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MessageSquare size={48} className="text-[#4CAF50] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2A6041] mb-2">Expert Advice</h3>
            <p className="text-gray-600">Professional healthcare guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
}