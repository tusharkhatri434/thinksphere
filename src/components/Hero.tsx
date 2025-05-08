import React from 'react';
import { BookOpen, Brain, Heart, BarChart, Award, TrendingUp, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  return <div className="relative bg-gradient-to-b from-blue-50 to-white pt-4">
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Main Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 py-[50px]">
            <div className="mb-4 inline-block bg-silverzone-blue/10 text-silverzone-blue px-4 py-2 rounded-full">
              India's Premier Holistic Assessment Program
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              THINKOSPHERE <span className="text-silverzone-blue">OLYMPIADS</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-silverzone-blue">
              Beyond the Books
            </h2>
            <p className="text-base sm:text-lg mb-8 text-gray-700 max-w-xl md:text-base px-0">
              Nurturing complete intelligence in foundational years through our innovative assessment program for children aged 3-8
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="bg-silverzone-blue hover:bg-silverzone-blue-dark text-white px-6 sm:px-8 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg text-center">
                Begin Your Child's Journey
              </Link>
              <Link to="/schools" className="border-2 border-silverzone-blue text-silverzone-blue bg-white hover:bg-silverzone-gray-light px-6 sm:px-8 py-3 rounded-md font-medium transition-all text-center">
                Partner With Us
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden border-8 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Happy children learning" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-silverzone-blue/20 to-transparent"></div>
            </div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-silverzone-accent-yellow rounded-full opacity-50 blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-silverzone-blue rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-12 py-[50px]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Welcome to ThinkOsphere</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4 font-medium text-base text-justify">
              The ThinkOsphere Olympiad is India's premier holistic assessment program designed specifically for foundational years (Nursery to Grade 2). We go beyond traditional academic testing to evaluate and nurture six essential developmental domains: bilingual literacy in Hindi and English, numeracy skills, social awareness, logical intelligence, critical thinking, and emotional values.
            </p>
            <p className="text-gray-700 text-justify text-base font-medium">
              In today's rapidly changing world, success demands more than academic knowledge. Our comprehensive assessment framework helps identify children's unique strengths and areas for growth across multiple intelligences, providing parents and educators with valuable insights to support balanced development.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
          <div className="bg-white rounded-md shadow-md p-4 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 border-t-2 border-silverzone-blue">
            <div className="mx-auto w-12 h-12 bg-silverzone-blue/10 rounded-full flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6 text-silverzone-blue" />
            </div>
            <h3 className="font-bold text-lg mb-1">Holistic Assessment</h3>
            <p className="text-sm text-gray-600">Six essential developmental domains</p>
          </div>
          
          <div className="bg-white rounded-md shadow-md p-4 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 border-t-2 border-silverzone-accent-yellow">
            <div className="mx-auto w-12 h-12 bg-silverzone-accent-yellow/20 rounded-full flex items-center justify-center mb-3">
              <Brain className="w-6 h-6 text-silverzone-accent-yellow" />
            </div>
            <h3 className="font-bold text-lg mb-1">Bilingual Focus</h3>
            <p className="text-sm text-gray-600">Hindi and English proficiency</p>
          </div>
          
          <div className="bg-white rounded-md shadow-md p-4 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 border-t-2 border-silverzone-accent-green">
            <div className="mx-auto w-12 h-12 bg-silverzone-accent-green/20 rounded-full flex items-center justify-center mb-3">
              <Baby className="w-6 h-6 text-silverzone-accent-green" />
            </div>
            <h3 className="font-bold text-lg mb-1">Age-Appropriate</h3>
            <p className="text-sm text-gray-600">Tailored for each age group</p>
          </div>
          
          <div className="bg-white rounded-md shadow-md p-4 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 border-t-2 border-silverzone-accent-purple">
            <div className="mx-auto w-12 h-12 bg-silverzone-accent-purple/20 rounded-full flex items-center justify-center mb-3">
              <Heart className="w-6 h-6 text-silverzone-accent-purple" />
            </div>
            <h3 className="font-bold text-lg mb-1">Joyful Experience</h3>
            <p className="text-sm text-gray-600">Learning through play</p>
          </div>
          
          <div className="bg-white rounded-md shadow-md p-4 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 border-t-2 border-silverzone-accent-orange">
            <div className="mx-auto w-12 h-12 bg-silverzone-accent-orange/20 rounded-full flex items-center justify-center mb-3">
              <Award className="w-6 h-6 text-silverzone-accent-orange" />
            </div>
            <h3 className="font-bold text-lg mb-1">Detailed Insights</h3>
            <p className="text-sm text-gray-600">Comprehensive progress reports</p>
          </div>
          
          <div className="bg-white rounded-md shadow-md p-4 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 border-t-2 border-silverzone-blue">
            <div className="mx-auto w-12 h-12 bg-silverzone-blue/10 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-silverzone-blue" />
            </div>
            <h3 className="font-bold text-lg mb-1">Research-Based</h3>
            <p className="text-sm text-gray-600">Developed by experts</p>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-gray-50 to-white py-4 px-4 sm:px-6 rounded-lg shadow-md flex flex-wrap justify-center items-center border border-gray-100">
          <div className="text-center w-full md:w-auto mb-4 md:mb-0 md:mr-8">
            <span className="text-lg font-medium text-silverzone-gray-dark">Trusted By</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-silverzone-blue">50+</span>
              <span className="text-sm text-gray-600">Schools</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-silverzone-blue">10,000+</span>
              <span className="text-sm text-gray-600">Children</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-silverzone-blue">100+</span>
              <span className="text-sm text-gray-600">Educators</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-silverzone-blue">95%</span>
              <span className="text-sm text-gray-600">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white w-full h-[50px] md:h-[70px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>;
};
export default Hero;