import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">
          "I was facing knee surgery until I found Chris."
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative w-full h-0 pb-[56.25%] bg-gray-100 rounded-xl overflow-hidden">
            {/* Custom thumbnail overlay */}
            <div className="absolute inset-0 z-10">
              <img 
                src="/Black and Red Modern Interview Podcast Youtube Thumbnail.png"
                alt="Patient success story interview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Interview thumbnail failed to load');
                  e.currentTarget.src = 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all cursor-pointer">
                  <Play size={32} className="text-navy-700 ml-1" />
                </div>
              </div>
            </div>
            <iframe
              src="https://player.vimeo.com/video/1099137450?badge=0&autopause=0&player_id=0&app_id=58479"
              title="Patient Testimonial"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0 opacity-0 hover:opacity-100 transition-opacity z-20"
            ></iframe>
          </div>
        </div>
        
        <p className="mt-6 text-lg text-gray-600">
          Real patient. Real recovery. Real proof.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;