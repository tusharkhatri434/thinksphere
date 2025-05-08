
import React from 'react';
import { Shield, Star, Award, TrendingUp, CheckCircle, Zap } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      title: "Holistic Assessment",
      description: "Our comprehensive framework evaluates all six essential developmental domains, not just academic skills.",
      icon: Shield,
      color: "silverzone-blue"
    },
    {
      title: "Research-Based Methodology",
      description: "Our approach is grounded in the latest research on child development and educational psychology.",
      icon: Star,
      color: "silverzone-accent-yellow" 
    },
    {
      title: "Bilingual Focus",
      description: "Equal emphasis on Hindi and English language development for truly balanced bilingualism.",
      icon: Award,
      color: "silverzone-accent-green"
    },
    {
      title: "Joyful Experience",
      description: "Assessment activities that children actually enjoy, reducing stress and enhancing engagement.",
      icon: TrendingUp,
      color: "silverzone-accent-purple"
    },
    {
      title: "Detailed Reports",
      description: "Comprehensive insights and actionable recommendations for parents and educators.",
      icon: CheckCircle,
      color: "silverzone-accent-orange"
    },
    {
      title: "Expert Support",
      description: "Guidance from leading educators and child development specialists throughout the journey.",
      icon: Zap,
      color: "silverzone-accent-red"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ThinkOsphere</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At ThinkOsphere, innovation meets strategy. We combine creativity, data, and cutting-edge technology to craft solutions that drive real results. Our client-first approach, industry expertise, and passion for excellence make us the ideal partner for businesses aiming to scale new heights. Choose ThinkOsphere — where your vision finds its true potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className={`w-14 h-14 mb-4 rounded-full bg-${reason.color}/10 flex items-center justify-center`}>
                <reason.icon className={`w-7 h-7 text-${reason.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
