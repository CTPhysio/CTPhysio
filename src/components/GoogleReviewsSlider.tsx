import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Loader } from '@googlemaps/js-api-loader';

interface Review {
  rating: number;
  text: string;
  author_name: string;
  profile_photo_url: string;
  relative_time_description: string;
  time: number;
}

const GoogleReviewsSlider: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyAyhvShJVxYYJBw_iFcMw4UYWwVwWcMihY',
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      if (!google.maps.places) {
        console.error('Google Maps Places API failed to load.');
        setLoading(false);
        return;
      }

      const service = new google.maps.places.PlacesService(document.createElement('div'));
      
      const getAllReviews = () => {
        service.getDetails({
          placeId: 'ChIJ6cVvXkG9cEgRzjaZHfyZ-5w',
          fields: ['reviews', 'rating', 'user_ratings_total', 'name'],
          language: 'en'
        }, (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
            // Get ALL available reviews from Google Places API
            const sortedReviews = [...place.reviews].sort((a, b) => {
              return new Date(b.time * 1000).getTime() - new Date(a.time * 1000).getTime();
            });
            console.log(`Loaded ${sortedReviews.length} reviews from Google Places API`);
            setReviews(sortedReviews);
          }
          setLoading(false);
        });
      };

      getAllReviews();
    }).catch(error => {
      console.error('Error loading Google Maps API:', error);
      setLoading(false);
    });
  }, []);

  // Create extended reviews array for infinite scroll effect
  const extendedReviews = reviews.length > 0 ? [...reviews, ...reviews, ...reviews] : [];
  
  const nextReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const next = prev + 1;
      // Reset to beginning when we reach the end of first set
      if (next >= reviews.length) {
        setTimeout(() => {
          setCurrentIndex(0);
          setIsTransitioning(false);
        }, 300);
        return next;
      }
      setIsTransitioning(false);
      return next;
    });
  };

  const prevReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const next = prev - 1;
      // Jump to end of first set when going back from beginning
      if (next < 0) {
        setTimeout(() => {
          setCurrentIndex(reviews.length - 1);
          setIsTransitioning(false);
        }, 300);
        return reviews.length - 1;
      }
      setIsTransitioning(false);
      return next;
    });
  };

  // Auto-advance reviews every 5 seconds
  useEffect(() => {
    if (reviews.length === 0) return;
    
    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length, isTransitioning]);

  // Get 3 consecutive reviews starting from currentIndex
  const getVisibleReviews = () => {
    if (reviews.length === 0) return [];
    
    // On mobile, show only 1 review
    const isMobile = window.innerWidth < 768;
    const reviewsToShow = isMobile ? 1 : 3;
    
    const visible = [];
    for (let i = 0; i < reviewsToShow; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  if (loading) {
    return (
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 bg-sky-500 rounded-full animate-bounce"></div>
          </div>
          <p className="mt-4 text-gray-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy-700">
      <section className="py-12 md:py-16 bg-navy-800 text-white rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Over 100+ Happy Patients
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">Google</span>
              <a 
                href="https://www.google.com/maps/place/Chris+Tiley+Physiotherapy/@52.4603497,-1.9725524,17z/data=!4m18!1m9!3m8!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!2sChris+Tiley+Physiotherapy!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw!3m7!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="View all Google reviews"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-lg">5.0</span>
            <span className="text-sm text-gray-300">(109 reviews)</span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {reviews.length > 1 && (
            <>
              <button 
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-10 disabled:opacity-50"
                aria-label="Previous reviews"
                disabled={isTransitioning}
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>

              <button 
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-10 disabled:opacity-50"
                aria-label="Next reviews"
                disabled={isTransitioning}
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <div 
              className={`transition-all duration-300 ${
                isTransitioning ? 'opacity-90' : 'opacity-100'
              }`}
            >
              {/* Mobile Layout - Single Review */}
              <div className="md:hidden">
                {visibleReviews.slice(0, 1).map((review, index) => (
                  <div key={`mobile-${review.author_name}-${review.time}-${currentIndex}`} className="bg-white/5 p-6 rounded-lg min-h-[280px] flex flex-col mx-auto max-w-sm">
                    <div className="flex items-center mb-4">
                      <img 
                        src={review.profile_photo_url} 
                        alt={review.author_name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/48x48/4285F4/ffffff?text=' + review.author_name.charAt(0);
                        }}
                      />
                      <div>
                        <h4 className="font-semibold text-white">{review.author_name}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-200 mb-4 flex-grow text-sm leading-relaxed">
                      {review.text}
                    </p>
                    <span className="text-xs text-gray-400 mt-auto">
                      {review.relative_time_description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Desktop Layout - Three Reviews */}
              <div className="hidden md:grid md:grid-cols-3 gap-8">
                {visibleReviews.map((review, index) => (
                  <div key={`desktop-${review.author_name}-${review.time}-${currentIndex}-${index}`} className="bg-white/5 p-6 rounded-lg min-h-[280px] flex flex-col">
                    <div className="flex items-center mb-4">
                      <img 
                        src={review.profile_photo_url} 
                        alt={review.author_name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/48x48/4285F4/ffffff?text=' + review.author_name.charAt(0);
                        }}
                      />
                      <div>
                        <h4 className="font-semibold text-white">{review.author_name}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-200 mb-4 flex-grow text-base leading-relaxed">
                      {review.text}
                    </p>
                    <span className="text-sm text-gray-400 mt-auto">
                      {review.relative_time_description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        {reviews.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => !isTransitioning && setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors disabled:cursor-not-allowed ${
                  index === currentIndex ? 'bg-sky-500' : 'bg-white/30'
                }`}
                aria-label={`Go to review ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Chris+Tiley+Physiotherapy/@52.4603497,-1.9725524,17z/data=!4m18!1m9!3m8!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!2sChris+Tiley+Physiotherapy!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw!3m7!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default GoogleReviewsSlider;