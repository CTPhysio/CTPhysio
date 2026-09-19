import React from 'react';
import Seo from './Seo';
import TreatmentCTA from './TreatmentCTA';

interface RelatedCondition {
  label: string;
  href: string;
}

interface TreatmentPageTemplateProps {
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  h1: string;
  heroParagraphs: string[];
  ctaHeading: string;
  ctaText: string;
  mainHeading: string;
  mainParagraphs: string[];
  bulletList: string[];
  imageUrl: string;
  relatedConditions: RelatedCondition[];
  conditionName: string;
}

const TreatmentPageTemplate: React.FC<TreatmentPageTemplateProps> = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  h1,
  heroParagraphs,
  ctaHeading,
  ctaText,
  mainHeading,
  mainParagraphs,
  bulletList,
  imageUrl,
  relatedConditions,
  conditionName,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title={seoTitle}
        description={seoDescription}
        canonicalPath={canonicalPath}
      />

      {/* Hero */}
      <section className="bg-navy-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            {h1}
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            {heroParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* First CTA */}
      <section className="bg-gray-100 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-4">
            {ctaHeading}
          </h2>
          <p className="text-lg md:text-xl text-navy-700 max-w-3xl mx-auto mb-8">
            {ctaText}
          </p>
          <a
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-lg"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative">
        {/* Parallax Background */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${imageUrl}")`, zIndex: -1 }}
          role="img"
          aria-label=""
        >
          <div className="absolute inset-0 bg-navy-900 bg-opacity-70"></div>
        </div>

        <div className="relative z-10">
          <div className="h-24"></div>

          <div className="bg-navy-800 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    {mainHeading}
                  </h2>

                  {mainParagraphs.map((p, i) => (
                    <p key={i} className="text-lg leading-relaxed">{p}</p>
                  ))}

                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>

                  <ul className="space-y-2 text-lg">
                    {bulletList.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>

                  <div className="pt-8">
                    <a
                      href="/booking"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-800 transition-colors text-lg"
                    >
                      Book an Appointment
                    </a>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="lg:sticky lg:top-8">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={imageUrl}
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-24 bg-navy-800"></div>
        </div>
      </section>

      {/* Related Conditions */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-navy-700 mb-6 text-center">
            Related Conditions
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedConditions.map((rc, i) => (
              <a
                key={i}
                href={rc.href}
                className="px-5 py-2.5 bg-gray-100 text-navy-700 font-semibold rounded-lg hover:bg-navy-700 hover:text-white transition-colors"
              >
                {rc.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <TreatmentCTA conditionName={conditionName} />
    </div>
  );
};

export default TreatmentPageTemplate;
