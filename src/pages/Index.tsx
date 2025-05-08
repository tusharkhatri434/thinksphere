import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseSection from '../components/WhyChooseSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Activity, Languages, Baby, Smile, FileText, Book, Medal, Users, School, Trophy } from 'lucide-react';
import PillarsSection from '../components/PillarsSection';
const Index = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Pillars Section */}
      <PillarsSection />

      {/* Programs Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 bg-silverzone-accent-green/10 text-silverzone-accent-green rounded-full text-sm mb-3">
              Our Olympiads
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Programs For Every Age Group</h2>
            <p className="text-lg text-silverzone-gray-dark max-w-3xl mx-auto">
              Specially designed assessment programs for children from Nursery to Grade 2
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-md shadow-md overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="h-3 bg-silverzone-blue"></div>
              <div className="p-6">
                <div className="bg-silverzone-blue/10 text-silverzone-blue p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-silverzone-blue group-hover:text-white transition-all">
                  <span className="text-2xl font-bold">N</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Nursery</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Foundation skills for our youngest participants, focusing on sensory development and basic cognition.
                </p>
                <div className="text-center">
                  <Link to="/programs" className="text-silverzone-blue hover:text-silverzone-blue-dark font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md shadow-md overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="h-3 bg-silverzone-accent-yellow"></div>
              <div className="p-6">
                <div className="bg-silverzone-accent-yellow/10 text-silverzone-accent-yellow p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-silverzone-accent-yellow group-hover:text-white transition-all">
                  <span className="text-2xl font-bold">KG</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Kindergarten</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Building on basics with enriched language exposure and enhanced social-emotional skills.
                </p>
                <div className="text-center">
                  <Link to="/programs" className="text-silverzone-blue hover:text-silverzone-blue-dark font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md shadow-md overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="h-3 bg-silverzone-accent-green"></div>
              <div className="p-6">
                <div className="bg-silverzone-accent-green/10 text-silverzone-accent-green p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-silverzone-accent-green group-hover:text-white transition-all">
                  <span className="text-2xl font-bold">G1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Grade 1</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Advancing cognitive abilities with structured learning and critical thinking challenges.
                </p>
                <div className="text-center">
                  <Link to="/programs" className="text-silverzone-blue hover:text-silverzone-blue-dark font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md shadow-md overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="h-3 bg-silverzone-accent-purple"></div>
              <div className="p-6">
                <div className="bg-silverzone-accent-purple/10 text-silverzone-accent-purple p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-silverzone-accent-purple group-hover:text-white transition-all">
                  <span className="text-2xl font-bold">G2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Grade 2</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Comprehensive assessments across all domains with complex problem-solving activities.
                </p>
                <div className="text-center">
                  <Link to="/programs" className="text-silverzone-blue hover:text-silverzone-blue-dark font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section className="py-12 md:py-16 bg-silverzone-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 bg-silverzone-blue/10 text-silverzone-blue rounded-full text-sm mb-3">
              Who We Serve
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Schools, Parents and Children</h2>
            <p className="text-lg text-silverzone-gray-dark max-w-3xl mx-auto">
              Comprehensive support for all stakeholders in a child's educational journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-md shadow-md text-center hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-silverzone-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <School className="h-8 w-8 text-silverzone-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Schools</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to provide comprehensive assessment tools that complement your curriculum and showcase your commitment to holistic education.
              </p>
              
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-md text-center hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-silverzone-accent-yellow/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-silverzone-accent-yellow" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Parents</h3>
              <p className="text-gray-600 mb-4">
                Gain valuable insights into your child's developmental journey and receive expert guidance on nurturing their unique potential.
              </p>
              
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-md text-center hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-silverzone-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Medal className="h-8 w-8 text-silverzone-accent-green" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Children</h3>
              <p className="text-gray-600 mb-4">
                Enjoy a fun, engaging assessment experience that celebrates your strengths and helps you grow in all aspects of development.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-silverzone-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <div className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm mb-3">
                Registration Open
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Child's Development Journey?</h2>
              <p className="text-lg text-white/90">
                Join thousands of forward-thinking parents who have discovered how ThinkOsphere Olympiads unlock their children's full potential.
              </p>
            </div>
            <div>
              <Link to="/register" className="bg-white text-silverzone-blue px-8 py-4 rounded-md font-bold transition-all hover:bg-silverzone-accent-yellow hover:text-gray-800 focus:ring-4 focus:ring-white/30 shadow-md hover:shadow-lg text-lg">
                Register Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>;
};
export default Index;