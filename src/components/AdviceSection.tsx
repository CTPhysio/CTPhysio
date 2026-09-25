import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { articles } from '../data/articles';

const cornerstoneArticle = {
  slug: 'strength-training-over-60s',
  title: 'Strength Training for Over 60s: How to Get Started',
  publishedDate: '2026-09-25',
  excerpt:
    'A practical guide from Chris Tiley on how to start strength training after 60, including choosing the right exercises, progressing safely and building strength for the things you want to keep doing.',
  featuredImage: '/dhdnevertoooldtoliftimage.webp',
  featuredImageAlt: 'Strength training for over 60s',
};

const AdviceSection: React.FC = () => {
  const latest = articles[0];
  if (!latest) return null;

  const formattedDate = new Date(latest.publishedDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const cornerstoneDate = new Date(cornerstoneArticle.publishedDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="py-16 bg-white" aria-labelledby="advice-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 id="advice-heading" className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
            From the Clinic
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Practical advice from Chris, Kate and the team to help you stay active, get stronger and manage injuries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <article className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 flex-shrink-0">
              <Link to="/strength-training-over-60s">
                <img
                  src={cornerstoneArticle.featuredImage}
                  alt={cornerstoneArticle.featuredImageAlt}
                  className="w-full h-56 md:h-full object-cover"
                />
              </Link>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-center">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar size={16} className="mr-1.5" />
                {cornerstoneDate}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-navy-700 mb-3 leading-snug">
                <Link to="/strength-training-over-60s" className="hover:text-sky-500 transition-colors">
                  {cornerstoneArticle.title}
                </Link>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {cornerstoneArticle.excerpt}
              </p>
              <div>
                <Link
                  to="/strength-training-over-60s"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"
                >
                  Read the article
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <article className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 flex-shrink-0">
              <Link to={`/advice/${latest.slug}`}>
                <img
                  src={latest.featuredImage}
                  alt={latest.featuredImageAlt}
                  className="w-full h-56 md:h-full object-cover"
                />
              </Link>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-center">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar size={16} className="mr-1.5" />
                {formattedDate}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-navy-700 mb-3 leading-snug">
                <Link to={`/advice/${latest.slug}`} className="hover:text-sky-500 transition-colors">
                  {latest.title}
                </Link>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {latest.excerpt}
              </p>
              <div>
                <Link
                  to={`/advice/${latest.slug}`}
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"
                >
                  Read the article
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AdviceSection;
