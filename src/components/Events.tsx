import React from 'react';
import { Link } from 'react-router-dom';
import FinalCTA from './FinalCTA';

export interface EventItem {
  id: string;
  title: string;
  summary: string;
  waitingListUrl: string;
}

const events: EventItem[] = [
  {
    id: 'strength-training-over-60s',
    title: 'Strength Training for Over 60s',
    summary:
      'A practical session focused on building strength, fitness and confidence to help you keep doing the things you enjoy.',
    waitingListUrl: 'https://christileyphysiotherapy.kit.com/54270f86c9',
  },
  {
    id: 'preventing-injuries-womens-football',
    title: "Preventing Injuries in Women's Football",
    summary:
      'A practical talk focused on helping women stay strong, reduce injury risk and keep playing the sport they enjoy.',
    waitingListUrl: 'https://christileyphysiotherapy.kit.com/c0b5b4eb56',
  },
  {
    id: 'tennis-injury-prevention',
    title: 'Tennis Injury Prevention',
    summary:
      'A practical session for tennis players focused on reducing injury risk, building resilience and helping you keep playing the sport you enjoy.',
    waitingListUrl: 'https://christileyphysiotherapy.kit.com/c699184b10',
  },
];

const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="bg-gradient-to-br from-navy-700 to-navy-900 px-8 py-10 flex items-center justify-center">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center leading-snug">{event.title}</h2>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-medium text-xs sm:text-sm">
            Coming soon
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{event.summary}</p>

        <div className="mt-auto">
          <a
            href={event.waitingListUrl}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors duration-200"
          >
            Join the waiting list
          </a>
        </div>
      </div>
    </article>
  );
};

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[45vh] bg-navy-800 pt-20">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Events;
