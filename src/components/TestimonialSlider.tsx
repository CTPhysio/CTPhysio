import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    "/testimonials/16.png",
    "/testimonials/8.png",
    "/testimonials/19.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-8 md:py-16 bg-gray-50 rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-7 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-navy-700 mb-3">
            Real People. Real Recoveries.
          </h2>
        </div>

        <div className="relative max-w-lg md:max-w-2xl mx-auto px-10 sm:px-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={testimonials[currentSlide]}
              alt={`Patient testimonial ${currentSlide + 1}`}
              className="w-full h-auto"
              onError={(e) => {
                console.log('Testimonial image failed to load:', testimonials[currentSlide]);
                e.currentTarget.src = 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg';
              }}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2.5 rounded-full hover:bg-gray-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-navy-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2.5 rounded-full hover:bg-gray-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-navy-700" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <span className={`w-3 h-3 rounded-full block transition-colors ${index === currentSlide ? 'bg-navy-700' : 'bg-gray-300'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
