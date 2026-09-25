import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Seo from './Seo';
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

const AdvicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title="Advice | Chris Tiley Physiotherapy"
        description="Practical advice from Chris, Kate and the Chris Tiley Physiotherapy team to help you stay active, get stronger and manage injuries."
      />

      {/* Hero */}
      <section className="bg-navy-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Advice</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Practical advice from the Chris Tiley Physiotherapy team to help you stay active, get stronger and manage injuries.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-8">Articles</h2>
            <div className="grid gap-8">
              {/* Cornerstone article */}
              <article
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 flex-shrink-0">
                  <Link to="/strength-training-over-60s">
                    <img
                      src={cornerstoneArticle.featuredImage}
                      alt={cornerstoneArticle.featuredImageAlt}
                      className="w-full h-56 md:h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-1.5" />
                    {new Date(cornerstoneArticle.publishedDate).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-700 mb-3 leading-snug">
                    <Link to="/strength-training-over-60s" className="hover:text-sky-500 transition-colors">
                      {cornerstoneArticle.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
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

              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 flex-shrink-0">
                    <Link to={`/advice/${article.slug}`}>
                      <img
                        src={article.featuredImage}
                        alt={article.featuredImageAlt}
                        className="w-full h-56 md:h-full object-cover"
                      />
                    </Link>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={16} className="mr-1.5" />
                      {new Date(article.publishedDate).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-navy-700 mb-3 leading-snug">
                      <Link to={`/advice/${article.slug}`} className="hover:text-sky-500 transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    <div>
                      <Link
                        to={`/advice/${article.slug}`}
                        className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"
                      >
                        Read the article
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Never Too Old to Lift - YouTube */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-4">Never Too Old to Lift</h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Practical videos and advice from Chris Tiley on strength training, staying active and getting stronger as you get older.
            </p>
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-2/5 flex items-center justify-center bg-white p-6 sm:p-8 flex-shrink-0 overflow-hidden">
                <img
                  src="/assets/images/Never_Too_Old_To_Lift_-_Logo_-_Black_font_Blue_Dumbell_and_White_background.jpg"
                  alt="Never Too Old to Lift logo"
                  className="max-h-32 sm:max-h-40 max-w-full object-contain"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-navy-700 mb-3">Never Too Old to Lift on YouTube</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Practical videos and advice from Chris Tiley to help you build strength, move well and stay active as you get older.
                </p>
                <div>
                  <a
                    href="https://www.youtube.com/c/NeverTooOldtoLift"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Never Too Old to Lift Podcast */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-4">The Never Too Old to Lift Podcast</h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Practical conversations and advice from Chris Tiley about strength, staying active and getting stronger as you get older.
            </p>
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-2/5 flex items-center justify-center bg-white p-6 sm:p-8 flex-shrink-0">
                <img
                  src="/assets/images/Main_file.jpg"
                  alt="The Never Too Old to Lift Podcast logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-navy-700 mb-3">The Never Too Old to Lift Podcast</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hosted by Chris Tiley, with practical conversations and advice about strength training, healthy ageing and staying strong for life.
                </p>
                <div>
                  <a
                    href="https://nevertoooldtolift.com/category/podcast/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
                  >
                    Listen to the Podcast
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvicePage;
