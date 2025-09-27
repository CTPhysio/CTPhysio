import React from 'react';
import { AlertTriangle, Clock, TrendingDown, Activity, Heart, Brain, MessageSquare, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      text: "Feeling frustrated after trying multiple approaches without lasting results?"
    },
    {
      icon: Clock,
      text: "Wanting active solutions rather than just managing symptoms?"
    },
    {
      icon: TrendingDown,
      text: "Tried various gadgets and products with limited success?"
    },
    {
      icon: Activity,
      text: "Motivated to invest in your physical wellbeing and future quality of life?"
    },
    {
      icon: Brain,
      text: "Concerned about your condition progressing and further affecting your day-to-day life?"
    },
    {
      icon: Heart,
      text: "Looking for a clear, personalised treatment approach?"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-8 leading-tight text-center">
            Are pain and injuries holding you back?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Icon size={24} className="text-red-500 mt-1" />
                  </div>
                  <p className="text-gray-700 font-medium">{point.text}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-700 mb-4">
              Schedule a physiotherapy appointment with Chris Tiley
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              So you don't have to give up your active lifestyle.
            </p>
            <div className="hidden md:block">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-bold text-navy-700">Discovery Visit</h3>
              <MessageSquare size={32} className="text-sky-500" />
              <a href="/contact" className="btn btn-primary w-full max-w-xs">Get In Touch</a>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-bold text-navy-700">Locations</h3>
              <MapPin size={32} className="text-sky-500" />
              <a href="https://www.google.com/maps/place/Chris+Tiley+Physiotherapy/data=!4m2!3m1!1s0x0:0x9cfb99fc1d9936ce?sa=X&ved=1t:2428&ictx=111" className="btn btn-primary w-full max-w-xs">Find Us</a>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-bold text-navy-700">About Chris</h3>
              <User size={32} className="text-sky-500" />
              <Link to="/team" className="btn btn-primary w-full max-w-xs">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;