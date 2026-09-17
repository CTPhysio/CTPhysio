import React from 'react';

const resources = [
  {
    image: '/assets/images/Never_Too_Old_To_Lift_-_Logo_-_Black_font_Blue_Dumbell_and_White_background.jpg',
    imageAlt: 'Never Too Old to Lift logo',
    title: 'Never Too Old to Lift on YouTube',
    description: 'Practical videos and advice to help you build strength, move well and stay active as you get older.',
    buttonText: 'Watch on YouTube',
    href: 'https://www.youtube.com/c/NeverTooOldtoLift',
    imageClassName: 'max-h-full max-w-full object-contain scale-[1.6]',
  },
  {
    image: '/assets/images/Main_file.jpg',
    imageAlt: 'The Never Too Old to Lift Podcast logo',
    title: 'The Never Too Old to Lift Podcast',
    description: 'Practical conversations and advice about strength training, healthy ageing and staying strong for life.',
    buttonText: 'Listen to the Podcast',
    href: 'https://nevertoooldtolift.com/category/podcast/',
    imageClassName: 'max-h-full max-w-full object-contain',
  },
];

const ListenWatch: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="listen-watch-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 id="listen-watch-heading" className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
            Listen &amp; Watch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Practical advice from Chris on strength training, staying active and getting stronger as you get older.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <article key={resource.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="h-40 sm:h-48 flex items-center justify-center bg-white p-5 sm:p-6">
                <img
                  src={resource.image}
                  alt={resource.imageAlt}
                  className={resource.imageClassName}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-navy-700 mb-4">{resource.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{resource.description}</p>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
                >
                  {resource.buttonText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListenWatch;
