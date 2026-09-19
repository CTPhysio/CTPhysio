import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Seo from './Seo';
import { articles } from '../data/articles';

const InsightsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title="Insights | Chris Tiley Physiotherapy"
        description="Practical advice from the Chris Tiley Physiotherapy team to help you stay active, get stronger and manage injuries."
      />

      {/* Hero */}
      <section className="bg-navy-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Insights</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Practical advice from the Chris Tiley Physiotherapy team to help you stay active, get stronger and manage injuries.
            </p>
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 flex-shrink-0">
                    <Link to={`/insights/${article.slug}`}>
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
                    <h2 className="text-xl md:text-2xl font-bold text-navy-700 mb-3 leading-snug">
                      <Link to={`/insights/${article.slug}`} className="hover:text-sky-500 transition-colors">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    <div>
                      <Link
                        to={`/insights/${article.slug}`}
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
    </div>
  );
};

export default InsightsPage;
