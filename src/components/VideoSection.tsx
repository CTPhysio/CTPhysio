import React from 'react';
import { Play, MessageSquare, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white rounded-b-[60px]">
      <div className="container mx-auto text-center px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mt-12">
          <div className="md:flex md:flex-col md:items-center md:space-y-3">
            <div className="hidden md:flex items-center gap-2">
              <MessageSquare size={24} className="text-sky-500" />
              <h3 className="font-bold text-navy-700 text-base">Discovery Visit</h3>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-base md:text-lg w-full">
              <span className="md:hidden">Book Free Consultation</span>
              <span className="hidden md:inline">Get In Touch</span>
            </a>
          </div>
          <div className="md:flex md:flex-col md:items-center md:space-y-3">
            <div className="hidden md:flex items-center gap-2">
              <MapPin size={24} className="text-sky-500" />
              <h3 className="font-bold text-navy-700 text-base">Locations</h3>
            </div>
            <a href="https://www.google.com/maps/place/Chris+Tiley+Physiotherapy/data=!4m2!3m1!1s0x0:0x9cfb99fc1d9936ce?sa=X&ved=1t:2428&ictx=111" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-base md:text-lg w-full">
              <span className="md:hidden">Location</span>
              <span className="hidden md:inline">Find Us</span>
            </a>
          </div>
          <div className="md:flex md:flex-col md:items-center md:space-y-3">
            <div className="hidden md:flex items-center gap-2">
              <User size={24} className="text-sky-500" />
              <h3 className="font-bold text-navy-700 text-base">About Chris</h3>
            </div>
            <a href="tel:01215170806" className="inline-flex md:hidden items-center justify-center px-6 py-3 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-base w-full">
              Call Chris
            </a>
            <Link to="/team" className="hidden md:inline-flex items-center justify-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-lg w-full">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;