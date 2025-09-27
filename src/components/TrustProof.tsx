import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const TrustProof: React.FC = () => {
  const reviews = [
    {
      name: "Ali Issa",
      rating: 5,
      text: "Over the past four months, My mom has been training with Chris, and his expertise has yielded remarkable results, particularly for those with MS condition. I've noticed significant improvement in her balance exercises, thanks to his innovative techniques. Initially, some exercises seemed impossible to tackle, but with his guidance, she was not only been able to perform them but also enhanced her endurance, especially on the Bosu half ball.",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXyzFHKR7O3mjpiPmcoLkv3leQ1fbAOj_fE225vVx37i-krMA=w72-h72-p-rp-mo-br100"
    },
    {
      name: "Emma Morris",
      rating: 5,
      text: "I went to Chris for some back problems I'd been having for about 2 years expecting to need physio for months and months to see a difference...only had 3 sessions and it's improved so much!  I have my confidence back with exercise again which means the world, and anxiety about the issue has been massively reduced. I'd recommend especially for people who have a goal of getting back into sport or exercise. Nice little treatment room and gym, plenty of parking.",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWtsFKfqDnFC3-Dy4GGiMQe3l6CIJyzdcgJl8P9yiD4pv3v5ws=w72-h72-p-rp-mo-br100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Reviews Slider */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-navy-700 mb-6">What My Patients Say</h3>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-navy-700 mb-6">Why Choose Chris?</h3>
            <div className="space-y-4">
              {[
                "100+ Verified 5-Star Reviews",
                "15+ Years Experience",
                "Trusted by Harborne Residents",
                "HCPC Registered Physiotherapist"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-sky-500 mr-3" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustProof;