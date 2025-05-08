import React from 'react';
import PageLayout from '../components/PageLayout';
import { Shield, Clock, BarChart, CheckCircle, FileText, Users, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
const Schools = () => {
  const {
    toast
  } = useToast();
  const handleDownload = () => {
    toast({
      title: "Downloading...",
      description: "School Information Pack is being downloaded."
    });
  };
  const benefits = [{
    title: "Comprehensive Assessment Framework",
    description: "Aligned with NEP 2020 goals to support holistic learning and evaluation",
    icon: Shield
  }, {
    title: "Detailed School-Level Reports",
    description: "Highlighting institutional strengths and improvement areas",
    icon: FileText
  }, {
    title: "Teacher Training Workshops",
    description: "Professional development on nurturing multiple intelligences",
    icon: Users
  }, {
    title: "Curriculum Alignment Resources",
    description: "Tools and guidance to support holistic development",
    icon: BookOpen
  }, {
    title: "Parent Communication Tools",
    description: "Resources to share insights with parents effectively",
    icon: Lightbulb
  }];
  const partnershipModels = [{
    title: "Full Implementation",
    description: "Integrate ThinkSphere's complete assessment framework into your school curriculum.",
    features: ["Comprehensive teacher training", "Complete assessment materials", "Detailed student and class reports", "Parent communication tools", "Ongoing academic support"],
    icon: Shield
  }, {
    title: "Complementary Assessment",
    description: "Offer ThinkSphere alongside your existing assessment system for enhanced insights.",
    features: ["Flexible implementation", "Supplementary training", "Individual student reports", "Parent meeting support", "Technical assistance"],
    icon: Clock
  }, {
    title: "Enrichment Program",
    description: "Implement as an optional enrichment opportunity for interested students and parents.",
    features: ["Targeted implementation", "Focused teacher guidance", "Specialized reports", "Enhancement activities", "Periodic review sessions"],
    icon: BarChart
  }];
  const resources = ["Comprehensive teacher guides", "Parent orientation materials", "Assessment preparation activities", "Professional development workshops", "Curriculum mapping tools", "Implementation support team"];
  return <PageLayout title="For Schools" subtitle="Partner With ThinkOsphere - Bring Holistic Assessment to Your Institution">
      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Schools</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Partner with ThinkOsphere to provide comprehensive developmental assessment for your students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-full bg-thinksphere-blue/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-thinksphere-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>)}
            
            {/* Recognition Item */}
            <div className="bg-gradient-blue text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Recognition as a Progressive Institution</h3>
              <p>Stand out as a school committed to holistic education and comprehensive student development</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation Models */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Models</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose the model that best fits your school's needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipModels.map((model, index) => <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-full bg-thinksphere-blue/10 flex items-center justify-center mb-6">
                  <model.icon className="w-8 h-8 text-thinksphere-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, i) => <li key={i} className="flex items-start">
                      <span className="mr-2 text-thinksphere-blue">•</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Resources & Partner Form */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Resources */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Resources for Schools</h2>
              <ul className="space-y-3">
                {resources.map((resource, index) => <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-thinksphere-accent-green mr-3 flex-shrink-0" />
                    <span>{resource}</span>
                  </li>)}
              </ul>
              
              <Button onClick={handleDownload} className="mt-8 bg-thinksphere-blue hover:bg-thinksphere-blue-dark">
                Download School Information Pack
              </Button>
            </div>
            
            {/* Partner Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Become a Partner School</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                  <input type="text" id="schoolName" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your school name" />
                </div>
                
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                  <input type="text" id="contactPerson" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Name of contact person" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your email address" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                  <select id="model" className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select an implementation model</option>
                    <option value="full">Full Implementation</option>
                    <option value="complementary">Complementary Assessment</option>
                    <option value="enrichment">Enrichment Program</option>
                    <option value="undecided">Not sure yet</option>
                  </select>
                </div>
                
                <Button type="submit" className="w-full bg-thinksphere-blue hover:bg-thinksphere-blue-dark">
                  Submit Interest
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      
    </PageLayout>;
};
export default Schools;