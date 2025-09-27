import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Chris is brilliant and pays careful attention to detail, offering a tailored plan. I've used his physio for both pre and post op spinal surgery and he was brilliant in facilitating for both. Id highly recommend his services.",
      author: "Roxy",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
    },
    {
      text: "Chris is very good at finding what the issue is and explaining in a way that is easy for anyone to understand what the damage is. He sets out a clear plan of what needs to be done to get back to full strength and shows you the exercises in the gym and helps to make sure you'Nathan",
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
    },
    {
      text: "I suffered a knee injury a few months ago and was struggling to get back to running and strength training without pain. Chris really took the time to understand my injury, and was great at explaining why he’d chosen certain exercises for the rehab plan, how they would help, and how to progress with them. After just a few weeks working on the exercises I have made significant improvements! I definitely recommend working with Chris!",
      author: "Lizzie",
      image: "https://images.pexels.com/photos/7402641/pexels-photo-7402641.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <span className="font-medium text-navy-700">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;