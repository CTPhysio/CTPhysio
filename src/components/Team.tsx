import React from 'react';
import { Award, Building, Users, Phone } from 'lucide-react';

const Team: React.FC = () => {
  const experiences = [
    {
      icon: Building,
      title: "Hospitals",
      description: "Experience in both UK and Canadian healthcare systems"
    },
    {
      icon: Users,
      title: "Sports Teams",
      description: "Including Para Snowsport GB and Reading FC Academy"
    },
    {
      icon: Award,
      title: "Specialised Care",
      description: "Expert in rehabilitation and strength training"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-navy-800">
        <div className="absolute inset-0">
          <img 
            src="/Headshot Square.png"
            alt="Chris Tiley"
            className="w-full h-full object-cover object-center opacity-40"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Chris Tiley
            </h1>
            <p className="text-xl text-gray-200">
              15+ Years of Experience in Physiotherapy and Rehabilitation
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-navy-700 mb-6">About Me</h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 mb-6">
                  My name is Chris Tiley, and I'm a physiotherapist with over 15 years of experience. Throughout my career, I've had the privilege of working in various settings that have shaped my approach to physiotherapy and rehabilitation.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 my-12">
                  {experiences.map((exp, index) => {
                    const Icon = exp.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="inline-block p-4 bg-sky-100 rounded-full mb-4">
                          <Icon size={32} className="text-sky-500" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    );
                  })}
                </div>

                <p className="text-gray-700 mb-6">
                  Within these roles, but especially within Para Snowsport GB, I've used my experience to treat injuries as they happen. More importantly, I have routinely incorporated strength programs with the aim of reducing the risk of further injuries. I've also become confident in adapting these programs around various disabilities and injuries.
                </p>

                <p className="text-gray-700 mb-6">
                  I'm passionate about introducing strength training to those who never thought that they would be able to do it. I love seeing the results that they achieve, seeing their confidence grow and seeing how much it brings back to their everyday lives.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors"
                >
                  Get In Touch
                </a>
                <a 
                  href="tel:01215170806" 
                  className="inline-flex items-center px-8 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Call Chris: 0121 517 0806
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;