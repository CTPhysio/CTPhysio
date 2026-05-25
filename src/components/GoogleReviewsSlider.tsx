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

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Chris+Tiley+Physiotherapy/@52.4603497,-1.9725524,17z/data=!4m18!1m9!3m8!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!2sChris+Tiley+Physiotherapy!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw!3m7!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D';

function truncateReview(text: string, maxChars = 160): string {
  if (text.length <= maxChars) return text;
  const trimmed = text.slice(0, maxChars);
  const lastSpace = trimmed.lastIndexOf(' ');
  return trimmed.slice(0, lastSpace) + '…';
}

const ReviewCard: React.FC<{ review: Review; keyProp: string }> = ({ review, keyProp }) => (
  <div key={keyProp} className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col shadow-sm">
    <div className="flex items-center mb-3 gap-3">
      <img
        src={review.profile_photo_url}
        alt={review.author_name}
        className="w-9 h-9 rounded-full object-cover flex-shrink-0"
        onError={(e) => {
          e.currentTarget.src = `https://via.placeholder.com/36x36/0369a1/ffffff?text=${review.author_name.charAt(0)}`;
        }}
      />
      <div>
        <p className="font-semibold text-navy-700 text-sm leading-tight">{review.author_name}</p>
        <div className="flex gap-0.5 mt-0.5">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      <span className="ml-auto text-xs text-gray-400 whitespace-nowrap">{review.relative_time_description}</span>
    </div>
    <p className="text-gray-600 text-sm leading-[1.7]">
      {truncateReview(review.text)}
    </p>
  </div>
);

const GoogleReviewsSlider: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyAyhvShJVxYYJBw_iFcMw4UYWwVwWcMihY',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      if (!google.maps.places) {
        setLoading(false);
        return;
      }
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails(
        { placeId: 'ChIJ6cVvXkG9cEgRzjaZHfyZ-5w', fields: ['reviews'], language: 'en' },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
            const sorted = [...place.reviews].sort((a, b) => b.time - a.time);
            setReviews(sorted);
          }
          setLoading(false);
        }
      );
    }).catch(() => setLoading(false));
  }, []);

  const advance = (dir: 1 | -1) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const next = (prev + dir + reviews.length) % reviews.length;
      setTimeout(() => setIsTransitioning(false), 300);
      return next;
    });
  };

  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => advance(1), 6000);
    return () => clearInterval(interval);
  }, [reviews.length, isTransitioning]);

  const getVisible = () => {
    if (reviews.length === 0) return [];
    const count = window.innerWidth < 768 ? 1 : 3;
    return Array.from({ length: count }, (_, i) => reviews[(currentIndex + i) % reviews.length]);
  };

  const visible = getVisible();

  if (loading) {
    return (
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-3">
            Hear From Our Patients
          </h2>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity" aria-label="View Google reviews">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </a>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-navy-700">5.0</span>
            <span className="text-sm text-gray-400">(109 reviews)</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {reviews.length > 1 && (
            <>
              <button
                onClick={() => advance(-1)}
                disabled={isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-sky-300 transition-colors z-10 disabled:opacity-40 shadow-sm"
                aria-label="Previous reviews"
              >
                <ChevronLeft size={16} className="text-navy-700" />
              </button>
              <button
                onClick={() => advance(1)}
                disabled={isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-sky-300 transition-colors z-10 disabled:opacity-40 shadow-sm"
                aria-label="Next reviews"
              >
                <ChevronRight size={16} className="text-navy-700" />
              </button>
            </>
          )}

          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
            {/* Mobile: 1 card */}
            <div className="md:hidden px-1">
              {visible.slice(0, 1).map((review) => (
                <ReviewCard key={`m-${review.author_name}-${review.time}-${currentIndex}`} review={review} keyProp={`m-${review.time}`} />
              ))}
            </div>

            {/* Desktop: 3 cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-5">
              {visible.map((review, i) => (
                <ReviewCard key={`d-${review.author_name}-${review.time}-${currentIndex}-${i}`} review={review} keyProp={`d-${review.time}-${i}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        {reviews.length > 1 && (
          <div className="flex justify-center mt-5 gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => !isTransitioning && setCurrentIndex(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === currentIndex ? 'w-4 h-2 bg-sky-500' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Footer CTA */}
        <div className="text-center mt-5">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-700 font-medium transition-colors"
          >
            Read more reviews on Google
            <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSlider;
