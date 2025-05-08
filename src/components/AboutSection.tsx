
import React from 'react';
import { Check, Users, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About ThinkSphere</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering young minds with the essential skills they need to thrive in tomorrow's world through our innovative, research-backed assessment methodology.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className='w-full'>
            <img 
              src="https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&auto=format&fit=crop" 
              alt="Children learning together" 
              className="w-full h-96 object-cover overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-5">Our Story</h3>
            <p className="text-gray-700 mb-4">
              A team of passionate educators, child psychologists, and educational technologists, ThinkOsphere emerged from a simple observation: traditional assessments were failing to capture the full spectrum of children's abilities.
            </p>
            <p className="text-gray-700 mb-4">
              Our founders recognized that the foundational years (ages 3-8) represent a critical window for developing not just academic skills, but also social awareness, emotional intelligence, logical reasoning, and critical thinking. Yet most evaluation systems focused primarily on academic performance, overlooking these equally important aspects of development.
            </p>
            <p className="text-gray-700 mb-6">
              ThinkOsphere was created to address this gap—to provide an assessment framework that celebrates and nurtures the whole child. After years of research, development, and pilot testing across 50+ schools nationwide, we launched the ThinkOsphere Olympiad across India.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-thinksphere-gray-light p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-thinksphere-blue rounded-full flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To create a generation of thoughtful, bilingual, emotionally intelligent children who approach life's challenges with logic, critical thinking, and social awareness.
            </p>
          </div>

          <div className="bg-thinksphere-gray-light p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-thinksphere-accent-purple rounded-full flex items-center justify-center mb-6">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              To provide an assessment framework that:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-thinksphere-accent-green flex-shrink-0 mt-0.5" />
                <span>Evaluates children's development across multiple dimensions</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-thinksphere-accent-green flex-shrink-0 mt-0.5" />
                <span>Encourages balanced growth in foundational years</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-thinksphere-accent-green flex-shrink-0 mt-0.5" />
                <span>Guides educators and parents in nurturing complete intelligence</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-thinksphere-accent-green flex-shrink-0 mt-0.5" />
                <span>Celebrates strengths while identifying areas for growth</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-thinksphere-accent-green flex-shrink-0 mt-0.5" />
                <span>Makes assessment a positive, engaging experience</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-12">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Leadership Team */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-thinksphere-blue/10 flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-thinksphere-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Leadership Team</h3>
              <p className="text-gray-600">
                Our visionary leaders guiding ThinkOsphere's mission and strategy
              </p>
            </div>
            
            {/* Academic Advisory Board */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-thinksphere-accent-purple/10 flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-8 w-8 text-thinksphere-accent-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Advisory Board</h3>
              <p className="text-gray-600">
                Distinguished educators shaping our assessment frameworks
              </p>
            </div>
            
            {/* Child Development Experts */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-thinksphere-accent-green/10 flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-thinksphere-accent-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Child Development Experts</h3>
              <p className="text-gray-600">
                Specialists ensuring our methods are developmentally appropriate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
