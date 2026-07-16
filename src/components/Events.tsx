import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinalCTA from './FinalCTA';

export interface EventItem {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  description: string[];
  bookingUrl: string;
  price?: string;
  capacity?: string;
}

const events: EventItem[] = [
  {
    id: 'injury-prevention-womens-football',
    title: "Injury Prevention in Women's Football",
    image: '/events/womens-football-injury-prevention.jpg',
    date: 'Saturday 1st August 2026',
    time: '10:30am – 11:30am',
    location: 'Chris Tiley Physiotherapy, 24 Earls Court Road, Harborne, B17 9AH',
    summary:
      "A practical, in-person talk with Kate Evans, physiotherapist and former professional footballer, on how to prevent injuries and stay ready for next season.",
    description: [
      "Are you ready for next season? Join Kate Evans, physiotherapist and former professional footballer, for a practical, in-person talk on preventing injuries in football.",
      "Kate will cover: how to warm up properly, structuring a simple strength training programme, managing training load, and recovering effectively between sessions and games.",
      "Whether you're a player or a coach, you'll leave with practical, useable ideas. Spaces are limited to 15. Tickets are £5, with all proceeds donated to Football Beyond Borders, a charity that uses football to help young people stay engaged in education.",
      "After the talk, everyone is welcome to book a free 20-minute discovery visit or a full initial assessment, and will receive £10 off their first paid session.",
    ],
    bookingUrl:
      'https://www.eventbrite.co.uk/e/injury-prevention-in-womens-football-tickets-1993001213279',
    price: '£5',
    capacity: '15 spaces',
  },
];

const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="h-60 overflow-hidden bg-navy-100">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <h2 className="text-2xl font-bold text-navy-700 mb-4">{event.title}</h2>

        <div className="space-y-2 mb-5">
          <div className="flex items-start space-x-2 text-gray-700">
            <Calendar size={18} className="text-sky-500 mt-0.5 flex-shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-start space-x-2 text-gray-700">
            <Clock size={18} className="text-sky-500 mt-0.5 flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-start space-x-2 text-gray-700">
            <MapPin size={18} className="text-sky-500 mt-0.5 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-5">{event.summary}</p>

        <div className="space-y-3 mb-6">
          {event.description.map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {(event.price || event.capacity) && (
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            {event.price && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-medium">
                Tickets: {event.price}
              </span>
            )}
            {event.capacity && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-navy-50 text-navy-700 font-medium">
                Limited to {event.capacity}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto">
          <a
            href={event.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors duration-200"
          >
            <span>Book Your Place</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </article>
  );
};

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[45vh] bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700 opacity-90" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Upcoming Events</h1>
            <p className="text-xl text-gray-200">
              Workshops and talks to help you stay strong, move well, and perform at your best.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {events.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 mb-6">No events are currently scheduled.</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Events;
