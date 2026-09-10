import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import FinalCTA from './FinalCTA';

export interface EventItem {
  id: string;
  title: string;
  summary: string;
  kitUid: string;
}

const events: EventItem[] = [
  {
    id: 'strength-training-over-60s',
    title: 'Strength Training for Over 60s',
    summary:
      'A practical session focused on building strength, fitness and confidence to help you keep doing the things you enjoy.',
    kitUid: '54270f86c9',
  },
  {
    id: 'preventing-injuries-womens-football',
    title: "Preventing Injuries in Women's Football",
    summary:
      'A practical talk focused on helping women stay strong, reduce injury risk and keep playing the sport they enjoy.',
    kitUid: 'c0b5b4eb56',
  },
  {
    id: 'tennis-injury-prevention',
    title: 'Tennis Injury Prevention',
    summary:
      'A practical session for tennis players focused on reducing injury risk, building resilience and helping you keep playing the sport you enjoy.',
    kitUid: 'c699184b10',
  },
  {
    id: 'preventing-running-injuries',
    title: 'Preventing Running Injuries',
    summary:
      'A practical talk focused on helping runners reduce injury risk, understand common running injuries and keep doing more of what they enjoy.',
    kitUid: '6749280a76',
  },
];

const KitEmbed: React.FC<{ uid: string; shouldLoad: boolean }> = ({ uid, shouldLoad }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!shouldLoad || loadedRef.current) return;
    loadedRef.current = true;

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', uid);
    script.src = `https://christileyphysiotherapy.kit.com/${uid}/index.js`;
    containerRef.current?.appendChild(script);
  }, [uid, shouldLoad]);

  return <div ref={containerRef} className="kit-embed-container" />;
};

const EventCard: React.FC<{ event: EventItem; isActive: boolean; onToggle: () => void }> = ({
  event,
  isActive,
  onToggle,
}) => {
  return (
    <article
      className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-shadow duration-200 ${
        isActive ? 'ring-2 ring-sky-500' : ''
      }`}
    >
      <div className="bg-gradient-to-br from-navy-700 to-navy-900 px-8 py-10 flex items-center justify-center min-h-[140px]">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center leading-snug">{event.title}</h2>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-medium text-xs sm:text-sm">
            Coming soon
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{event.summary}</p>

        <button
          onClick={onToggle}
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors duration-200"
        >
          {isActive ? 'Close waiting list form' : 'Join the waiting list'}
        </button>
      </div>
    </article>
  );
};

const Events: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeEvent = events.find((e) => e.id === activeEventId) || null;

  const handleToggle = (eventId: string) => {
    setActiveEventId((prev) => (prev === eventId ? null : eventId));
  };

  const handleClose = () => {
    setActiveEventId(null);
  };

  useEffect(() => {
    if (activeEventId && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeEventId]);

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isActive={activeEventId === event.id}
                onToggle={() => handleToggle(event.id)}
              />
            ))}
          </div>

          <div
            ref={panelRef}
            className={`max-w-6xl mx-auto overflow-hidden transition-all duration-300 ease-in-out ${
              activeEvent ? 'mt-8 opacity-100' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            {activeEvent && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-navy-700 to-navy-900 px-8 py-6 flex items-center justify-between">
                  <div>
                    <p className="text-sky-300 font-medium text-sm mb-1">Join the waiting list</p>
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">{activeEvent.title}</h2>
                  </div>
                  <button
                    onClick={handleClose}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 flex-shrink-0 ml-4"
                    aria-label="Close waiting list form"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="p-8 md:p-10">
                  <KitEmbed uid={activeEvent.kitUid} shouldLoad={true} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Events;
