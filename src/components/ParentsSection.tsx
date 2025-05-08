
import React from 'react';
import { BookOpen, Brain, Heart, Users, Lightbulb, Calculator } from 'lucide-react';

const ParentsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Priyanka Desai",
      role: "Parent of Aryan, Grade 1",
      content: "ThinkSphere's assessment helped us understand our son's strengths in logical thinking and areas where he needed support. The personalized report guided us on how to encourage his development at home.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Rahul Verma",
      role: "Parent of twins in UKG",
      content: "I love how ThinkSphere evaluates more than just academics. The emotional and social development insights were eye-opening for us as parents. My children actually enjoyed the assessment activities!",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Meera Sharma",
      role: "Parent of Diya, Nursery",
      content: "As a first-time parent, I was worried about assessments being stressful for my daughter. ThinkSphere's approach was so child-friendly that she thought she was just playing games!",
      image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="parents" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">For Parents</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gain valuable insights into your child's holistic development and support their learning journey with ThinkSphere.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-thinksphere-gray-light p-8 rounded-xl hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-thinksphere-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Comprehensive Insights</h3>
            <p className="text-gray-700">
              Receive detailed reports about your child's development across all six pillars, identifying strengths and areas for growth.
            </p>
          </div>

          <div className="bg-thinksphere-gray-light p-8 rounded-xl hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-thinksphere-accent-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Guidance</h3>
            <p className="text-gray-700">
              Get actionable recommendations tailored to your child's unique developmental profile to support their learning journey.
            </p>
          </div>

          <div className="bg-thinksphere-gray-light p-8 rounded-xl hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-thinksphere-accent-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">Stress-Free Experience</h3>
            <p className="text-gray-700">
              Our joyful, play-based assessment approach ensures your child has a positive experience without test anxiety.
            </p>
          </div>
        </div>

        {/* Development Areas */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Supporting Complete Child Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start p-4 rounded-lg hover:bg-thinksphere-gray-light transition-all">
              <div className="w-10 h-10 rounded-full bg-thinksphere-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                <BookOpen className="w-5 h-5 text-thinksphere-blue" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Bilingual Literacy Development</h4>
                <p className="text-sm text-gray-600">
                  Support your child's reading and language skills in both English and their mother tongue.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg hover:bg-thinksphere-gray-light transition-all">
              <div className="w-10 h-10 rounded-full bg-thinksphere-accent-green/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Calculator className="w-5 h-5 text-thinksphere-accent-green" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Numeracy Skills</h4>
                <p className="text-sm text-gray-600">
                  Enhance mathematical thinking through fun, everyday activities at home.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg hover:bg-thinksphere-gray-light transition-all">
              <div className="w-10 h-10 rounded-full bg-thinksphere-accent-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Users className="w-5 h-5 text-thinksphere-accent-purple" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Social Skills</h4>
                <p className="text-sm text-gray-600">
                  Foster positive social interactions and cultural awareness in your child.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg hover:bg-thinksphere-gray-light transition-all">
              <div className="w-10 h-10 rounded-full bg-thinksphere-accent-orange/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Brain className="w-5 h-5 text-thinksphere-accent-orange" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Logical Thinking</h4>
                <p className="text-sm text-gray-600">
                  Develop pattern recognition and problem-solving abilities through age-appropriate challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg hover:bg-thinksphere-gray-light transition-all">
              <div className="w-10 h-10 rounded-full bg-thinksphere-accent-yellow/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-thinksphere-accent-yellow" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Critical Thinking</h4>
                <p className="text-sm text-gray-600">
                  Encourage curiosity and questioning to build strong analytical skills.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg hover:bg-thinksphere-gray-light transition-all">
              <div className="w-10 h-10 rounded-full bg-thinksphere-accent-red/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Heart className="w-5 h-5 text-thinksphere-accent-red" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Emotional Development</h4>
                <p className="text-sm text-gray-600">
                  Help your child recognize and manage emotions while building empathy and self-awareness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Parent Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Register Your Child
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
