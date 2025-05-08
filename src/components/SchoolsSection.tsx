
import React from 'react';
import { Shield, Clock, BarChart } from 'lucide-react';

const SchoolsSection: React.FC = () => {
  const partnershipModels = [
    {
      title: "Full Implementation",
      description: "Integrate ThinkSphere's complete assessment framework into your school curriculum.",
      features: [
        "Comprehensive teacher training",
        "Complete assessment materials",
        "Detailed student and class reports",
        "Parent communication tools",
        "Ongoing academic support"
      ],
      icon: Shield
    },
    {
      title: "Complementary Program",
      description: "Add ThinkSphere assessments alongside your existing evaluation methods.",
      features: [
        "Flexible implementation",
        "Supplementary training",
        "Individual student reports",
        "Parent meeting support",
        "Technical assistance"
      ],
      icon: Clock
    },
    {
      title: "Enrichment Model",
      description: "Use ThinkSphere for specific developmental areas or as an enhancement program.",
      features: [
        "Targeted implementation",
        "Focused teacher guidance",
        "Specialized reports",
        "Enhancement activities",
        "Periodic review sessions"
      ],
      icon: BarChart
    }
  ];

  return (
    <section id="schools" className="py-16 md:py-24 bg-thinksphere-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">For Schools</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partner with ThinkSphere to enhance your early education program with our research-backed, holistic assessment system.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Benefits of Partnering with Us</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-thinksphere-blue/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-thinksphere-blue">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Enhanced Educational Offering</h4>
                  <p className="text-gray-700">Differentiate your school by providing comprehensive, research-backed assessments that parents value.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-thinksphere-blue/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-thinksphere-blue">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Professional Development</h4>
                  <p className="text-gray-700">Our training programs help teachers improve their assessment skills and teaching methodologies.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-thinksphere-blue/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-thinksphere-blue">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Actionable Insights</h4>
                  <p className="text-gray-700">Receive detailed class and individual reports that help tailor teaching to students' needs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-thinksphere-blue/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-thinksphere-blue">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Parent Satisfaction</h4>
                  <p className="text-gray-700">Provide parents with detailed insights into their child's development across multiple domains.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="School classroom environment" 
              className="rounded-xl shadow-lg"
            />
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="font-bold">Schools Partnered</div>
                <div className="text-2xl font-bold text-thinksphere-blue">50+</div>
              </div>
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="font-bold">Students Assessed</div>
                <div className="text-2xl font-bold text-thinksphere-blue">10,000+</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-bold">Teacher Training Hours</div>
                <div className="text-2xl font-bold text-thinksphere-blue">5,000+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Models */}
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Partnership Models</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnershipModels.map((model, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-thinksphere-blue/10 flex items-center justify-center mb-6">
                <model.icon className="w-8 h-8 text-thinksphere-blue" />
              </div>
              <h4 className="text-xl font-bold mb-3">{model.title}</h4>
              <p className="text-gray-600 mb-6">{model.description}</p>
              <ul className="space-y-2">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-thinksphere-blue">•</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Become a Partner School
          </a>
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
