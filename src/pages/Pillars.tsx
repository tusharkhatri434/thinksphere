
import React from 'react';
import { BookOpen, Calculator, Users, Brain, Lightbulb, Heart } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Pillars = () => {
  const pillars = [
    {
      id: "bilingual",
      title: "Bilingual Literacy (Hindi & English)",
      description: "Developing reading, writing, and comprehension skills in both Hindi and English, building a strong foundation for communication.",
      icon: BookOpen,
      color: "thinksphere-blue",
      bgColor: "thinksphere-blue/10",
      whatWeAssess: [
        "Reading comprehension in both languages",
        "Vocabulary development and usage",
        "Expression and communication skills",
        "Listening comprehension",
        "Basic writing abilities appropriate to age"
      ],
      whyItMatters: "Proficiency in multiple languages enhances cognitive flexibility, cultural awareness, and future opportunities. Our equal emphasis on Hindi and English supports balanced bilingual development from an early age.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }, 
    {
      id: "numeracy",
      title: "Numeracy Skills",
      description: "Building mathematical thinking, number sense, and problem-solving abilities that prepare children for future academic success.",
      icon: Calculator,
      color: "thinksphere-accent-green",
      bgColor: "thinksphere-accent-green/20",
      whatWeAssess: [
        "Number sense and operations",
        "Patterns and relationships",
        "Measurement concepts",
        "Spatial understanding",
        "Data interpretation skills"
      ],
      whyItMatters: "Strong numeracy skills form the foundation for mathematical thinking, problem-solving, and logical reasoning. These competencies are essential for success in STEM fields and everyday decision-making.",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }, 
    {
      id: "social",
      title: "Social Awareness",
      description: "Fostering interpersonal skills, cultural understanding, and the ability to collaborate effectively with others.",
      icon: Users,
      color: "thinksphere-accent-purple",
      bgColor: "thinksphere-accent-purple/20",
      whatWeAssess: [
        "Self-awareness and identity",
        "Family and community understanding",
        "Cultural sensitivity and appreciation",
        "Environmental consciousness",
        "Civic awareness appropriate to age"
      ],
      whyItMatters: "Children who understand their place in society and their responsibility toward others become more empathetic, engaged citizens. Social awareness is linked to better relationship skills and community involvement.",
      image: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }, 
    {
      id: "logical",
      title: "Logical Intelligence",
      description: "Developing analytical thinking, pattern recognition, and the ability to solve problems methodically.",
      icon: Brain,
      color: "thinksphere-accent-orange",
      bgColor: "thinksphere-accent-orange/20",
      whatWeAssess: [
        "Pattern recognition and extension",
        "Classification and categorization",
        "Sequential thinking",
        "Spatial reasoning",
        "Basic coding concepts"
      ],
      whyItMatters: "Logical intelligence enables children to analyze situations, recognize patterns, and solve problems methodically. These skills transfer across domains and support learning in all academic areas.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }, 
    {
      id: "critical",
      title: "Critical Intelligence",
      description: "Encouraging curiosity, questioning, and the ability to evaluate information and make informed decisions.",
      icon: Lightbulb,
      color: "thinksphere-accent-yellow",
      bgColor: "thinksphere-accent-yellow/20",
      whatWeAssess: [
        "Questioning abilities",
        "Making meaningful comparisons",
        "Forming hypotheses",
        "Drawing conclusions",
        "Applying knowledge to new situations"
      ],
      whyItMatters: "Critical thinking helps children evaluate information, question assumptions, and form independent judgments. In an age of information overload, these skills are essential for discernment and wise decision-making.",
      image: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }, 
    {
      id: "emotional",
      title: "Emotional Values",
      description: "Building self-awareness, empathy, resilience, and the ability to understand and manage emotions effectively.",
      icon: Heart,
      color: "thinksphere-accent-red",
      bgColor: "thinksphere-accent-red/20",
      whatWeAssess: [
        "Emotion recognition and regulation",
        "Empathy and perspective-taking",
        "Collaboration and sharing",
        "Resilience and perseverance",
        "Ethical decision-making"
      ],
      whyItMatters: "Emotional intelligence is consistently linked to success in school, work, and relationships. Children who understand and manage emotions effectively navigate social situations with confidence and compassion.",
      image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  return (
    <PageLayout 
      title="Our Six Pillars" 
      subtitle="ThinkOsphere's Six Pillars of Assessment"
    >
      {/* Framework Introduction */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Complete Intelligence Framework</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Our comprehensive assessment framework evaluates six essential developmental domains, providing a holistic view of each child's unique strengths and growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {pillars.map(pillar => (
              <a key={pillar.id} href={`#${pillar.id}`} className="bg-white rounded-xl p-5 md:p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`w-12 md:w-16 h-12 md:h-16 rounded-full mb-4 md:mb-6 flex items-center justify-center bg-${pillar.bgColor}`}>
                  <pillar.icon className={`h-6 md:h-8 w-6 md:w-8 text-${pillar.color}`} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{pillar.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{pillar.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Pillar Sections */}
      {pillars.map((pillar, index) => (
        <section id={pillar.id} key={pillar.id} className={`py-10 md:py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-12`}>
              <div className="lg:w-1/2">
                <div className={`inline-block px-3 md:px-4 py-1 bg-${pillar.bgColor} text-${pillar.color} rounded-full font-medium mb-3 md:mb-4 text-sm md:text-base`}>
                  Pillar {index + 1}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">{pillar.title}</h2>
                
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">What We Assess</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {pillar.whatWeAssess.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className={`h-4 md:h-5 w-4 md:w-5 text-${pillar.color} mr-2 mt-1 flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Why It Matters</h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    {pillar.whyItMatters}
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative max-w-full max-h-80">
                  <img src={pillar.image} alt={`${pillar.title} illustration`} className="w-full max-h-80 overflow-hidden object-cover rounded-xl shadow-xl" />
                  <div className={`absolute -bottom-4 -right-4 w-16 md:w-20 h-16 md:h-20 rounded-full bg-${pillar.bgColor} opacity-50 z-[-1]`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-gradient-blue text-white py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Experience the Six Pillars Assessment</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8">
            Register your child for the next ThinkOsphere Olympiad and discover their unique strengths across all six developmental domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="btn-accent">
              Register Now
            </a>
            <a href="/programs" className="bg-white text-thinksphere-blue px-6 py-3 rounded-lg font-medium transition-all hover:bg-opacity-90">
              Explore Our Programs
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pillars;
