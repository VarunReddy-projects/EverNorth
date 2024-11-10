import React from 'react';
import { Clock, DollarSign, Truck, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Access your medication needs anytime, anywhere',
  },
  {
    icon: DollarSign,
    title: 'Best Prices',
    description: 'Competitive prices on all medications',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your doorstep',
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Your health information is protected',
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2A6041] text-center mb-12">
          Your Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4">
                <benefit.icon size={24} className="text-[#2A6041]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A6041] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}