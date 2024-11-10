import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Easy Medication Management",
    description: "Order and manage your prescriptions with just a few clicks",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Affordable Healthcare",
    description: "Get the best prices on your medications",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Fast Delivery",
    description: "Medications delivered right to your doorstep",
    image: "https://images.unsplash.com/photo-1583912267550-d44c9c897a76?auto=format&fit=crop&q=80&w=2000",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(${100 * (index - currentSlide)}%)`,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div>
              <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl mb-8">{slide.description}</p>
              <button className="bg-[#4CAF50] hover:bg-[#66BB6A] text-white px-8 py-3 rounded-md text-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}