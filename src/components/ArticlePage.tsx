import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import Seo from './Seo';
import { getArticleBySlug } from '../data/articles';

const CLINIC_PHONE = '0121 517 0806';
const CLINIC_PHONE_TEL = 'tel:01215170806';

const ArticlePage: React.FC = () => {
  const article = getArticleBySlug('injury-prevention-womens-football');

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Article not found.</p>
      </div>
    );
  }

  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    author: {
      '@type': 'Person',
      name: article.author,
      description: article.authorBio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chris Tiley Physiotherapy',
    },
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    description: article.metaDescription,
    image: window.location.origin + article.featuredImage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title={article.metaTitle}
        description={article.metaDescription}
        image={article.featuredImage}
        article
      />

      {/* Article header with featured image */}
      <section className="relative bg-navy-800 text-white">
        <div className="absolute inset-0">
          <img
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <Link
              to="/insights"
              className="inline-flex items-center text-sky-300 hover:text-sky-200 transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft size={16} className="mr-2" />
              All Insights
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-3">
              By {article.author}, {article.authorBio}
            </p>
            <p className="text-sm text-gray-400">{formattedDate}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Hidden featured image for structured data / accessibility */}
            <img
              src={article.featuredImage}
              alt={article.featuredImageAlt}
              className="sr-only"
            />

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="prose-content">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Recently, physiotherapist and former professional footballer Kate Evans delivered a talk on injury prevention in women&rsquo;s football. Here are the key takeaways to help you reduce injury risk and improve your performance.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                As a footballer, you can&rsquo;t eliminate injury risk completely, but you can put strategies in place that significantly reduce it. Football is a high-intensity sport involving repeated sprinting, jumping, landing, deceleration, changes of direction and contact. You need to prepare your body for these demands through an effective warm-up, structured{' '}
                <Link to="/services" className="text-sky-600 hover:text-sky-700 underline">strength training</Link>
                , sensible load management and consistent recovery habits.
              </p>

              {/* Section 1 */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                1. Start With an Effective Football Warm-Up
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                An effective warm-up has eight key elements:
              </p>
              <ul className="space-y-3 mb-6 pl-0 list-none">
                <li className="text-gray-700 leading-relaxed"><strong>Pulse raiser</strong> - Jogging, high knees, heel flicks and hamstring sweeps increase your heart rate, blood flow and muscle temperature.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Deceleration</strong> - Controlled stutter steps help you slow down safely and prepare for changes of direction.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Jumping and landing</strong> - Squat jumps or broad jumps teach you to absorb force and land in a strong athletic position with torso, hips, knees and ankles aligned.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Changes of direction</strong> - Combine deceleration with pushing off into a new direction using small stutter steps.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Contact</strong> - Simulate aerial challenges by jumping and gently shoulder-tapping before landing in an athletic position.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Sprint</strong> - Start with a 10m sprint at 80% effort and build to 90&ndash;100% effort over 30m.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Single-leg balance</strong> - Add a ball by performing single-leg volleys without putting your foot down.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Single-leg landing</strong> - Add small jumps between volleys or practice single-leg hopping and landing with good alignment.</li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                2. Strength Training for Female Footballers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Strength training is essential for injury prevention and also improves your power, speed and agility - all of which translate directly to better performance on the pitch.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">
                The Six Fundamental Movement Patterns
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your programme should include:
              </p>
              <ul className="space-y-2 mb-6 pl-6 list-disc">
                <li className="text-gray-700 leading-relaxed">Squat</li>
                <li className="text-gray-700 leading-relaxed">Hinge</li>
                <li className="text-gray-700 leading-relaxed">Lunge</li>
                <li className="text-gray-700 leading-relaxed">Push</li>
                <li className="text-gray-700 leading-relaxed">Pull</li>
                <li className="text-gray-700 leading-relaxed">Carry</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">
                Don&rsquo;t Forget Power and Jumping
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Football is explosive, so you should include power-based exercises such as box jumps, skater hops, lunge jumps or Olympic lifting variations like cleans and snatches. Complete these at the start of your gym session after a good warmup.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">
                How Many Sets and Reps Should You Do?
              </h3>
              <div className="overflow-x-auto mb-6 -mx-4 sm:mx-0">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="border-b-2 border-navy-200">
                      <th className="py-3 px-3 sm:px-4 font-bold text-navy-700">Training focus</th>
                      <th className="py-3 px-3 sm:px-4 font-bold text-navy-700">Reps</th>
                      <th className="py-3 px-3 sm:px-4 font-bold text-navy-700">Sets</th>
                      <th className="py-3 px-3 sm:px-4 font-bold text-navy-700">Load</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-3 sm:px-4 text-gray-700">Power</td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">2&ndash;5</td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">3&ndash;5</td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">Medium</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-3 sm:px-4 text-gray-700">Strength</td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">6</td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">3&ndash;6</td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">Heavy</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-3 sm:px-4 text-gray-700">Endurance</td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">12&ndash;15</td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">2&ndash;3</td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">Light</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you&rsquo;re new to strength training, start with 3 sets of 12 reps at a comfortable weight once or twice per week. As you progress, you can increase the weight and reduce the repetitions.
              </p>

              {/* Section 3 */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                3. Manage Your Football Training Load
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                More training isn&rsquo;t always better. You need to balance football sessions, gym work, matches and recovery. Aim for a consistent weekly schedule with adequate rest between sessions and at least one full rest day per week.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Remember that stress isn&rsquo;t only physical - work, school and life pressures also contribute to your overall load. During busy periods, adjust your training accordingly.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">
                Load Management for Young Footballers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you&rsquo;re a younger player, the same principles apply. Research suggests delaying sport specialisation and playing multiple sports supports better long-term athletic development. Sport-specific training hours per week should not exceed your age, and you should have two full rest days from organised sport each week.
              </p>

              {/* Section 4 */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                4. Prehabilitation and Recovery for Footballers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Prehabilitation is a proactive approach to strength training with exercises tailored to your injury history, experience and goals.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">
                Personalised Strength and Conditioning
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every player has different needs so your strength programme should account for this. For example, if you&rsquo;ve had an{' '}
                <Link to="/treatments/knee-pain" className="text-sky-600 hover:text-sky-700 underline">ACL reconstruction</Link>
                , you may need more single-leg quadriceps and hamstring strengthening to maintain your strength and avoid compensations.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">
                Recovery After Football Training
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Recovery is simple: do the basics well. Prioritise your nutrition, hydration and sleep - these have the biggest impact on how well you recover.
              </p>

              {/* Consistency section */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                Injury Prevention Is About Consistency
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Injury prevention isn&rsquo;t one exercise or one session, it&rsquo;s what you do consistently every week:
              </p>
              <ul className="space-y-2 mb-6 pl-6 list-disc">
                <li className="text-gray-700 leading-relaxed">Warm up effectively</li>
                <li className="text-gray-700 leading-relaxed">Build strength and power</li>
                <li className="text-gray-700 leading-relaxed">Manage your training load</li>
                <li className="text-gray-700 leading-relaxed">Individualise prehab and strength plans</li>
                <li className="text-gray-700 leading-relaxed">Recover effectively</li>
              </ul>

              {/* How we can help section */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                How Chris Tiley Physiotherapy Can Help
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer individualised assessments,{' '}
                <Link to="/treatments/surgical-rehab" className="text-sky-600 hover:text-sky-700 underline">rehabilitation plans</Link>
                {' '}and advice for recurring injuries or niggles. We also provide personalised strength and conditioning programmes and return-to-football support.
              </p>
              <p className="text-gray-700 leading-relaxed mb-10">
                If you&rsquo;re concerned about an injury, struggling with a niggle or want a tailored injury-prevention plan, contact Chris Tiley Physiotherapy via email or telephone.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-navy-800 text-white rounded-xl p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need help with an injury?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-xl mx-auto">
                If you&rsquo;re concerned about an injury, struggling with a niggle or would like help with a tailored strength or injury-prevention programme, we&rsquo;re happy to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors text-base"
                >
                  <Calendar className="mr-2" size={20} />
                  Book an Appointment
                </a>
                <a
                  href={CLINIC_PHONE_TEL}
                  className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold text-lg hover:text-sky-300 transition-colors"
                >
                  <Phone className="mr-2" size={20} />
                  {CLINIC_PHONE}
                </a>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-10 text-center">
              <Link
                to="/insights"
                className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all Insights
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
