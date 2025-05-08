import React from 'react';
import { BookOpen, Calculator, Users, Brain, Lightbulb, Heart } from 'lucide-react';
const PillarsSection: React.FC = () => {
  const pillars = [{
    title: "Bilingual Literacy (Hindi & English)",
    description: "Developing reading, writing, and comprehension skills in both Hindi and English, building a strong foundation for communication.",
    icon: BookOpen,
    color: "blue-500",
    bgColor: "blue-100",
    assesses: ["Reading comprehension in both languages", "Vocabulary development and usage", "Expression and communication skills", "Listening comprehension", "Basic writing abilities appropriate to age"],
    whyMatters: "Proficiency in multiple languages enhances cognitive flexibility, cultural awareness, and future opportunities. Our equal emphasis on Hindi and English supports balanced bilingual development from an early age."
  }, {
    title: "Numeracy Skills",
    description: "Building mathematical thinking, number sense, and problem-solving abilities that prepare children for future academic success.",
    icon: Calculator,
    color: "green-500",
    bgColor: "green-100",
    assesses: ["Number sense and operations", "Patterns and relationships", "Measurement concepts", "Spatial understanding", "Data interpretation skills"],
    whyMatters: "Strong numeracy skills form the foundation for mathematical thinking, problem-solving, and logical reasoning. These competencies are essential for success in STEM fields and everyday decision-making."
  }, {
    title: "Social Awareness",
    description: "Fostering interpersonal skills, cultural understanding, and the ability to collaborate effectively with others.",
    icon: Users,
    color: "purple-500",
    bgColor: "purple-100",
    assesses: ["Self-awareness and identity", "Family and community understanding", "Cultural sensitivity and appreciation", "Environmental consciousness", "Civic awareness appropriate to age"],
    whyMatters: "Children who understand their place in society and their responsibility toward others become more empathetic, engaged citizens. Social awareness is linked to better relationship skills and community involvement."
  }, {
    title: "Logical Intelligence",
    description: "Developing analytical thinking, pattern recognition, and the ability to solve problems methodically.",
    icon: Brain,
    color: "orange-500",
    bgColor: "orange-100",
    assesses: ["Pattern recognition and extension", "Classification and categorization", "Sequential thinking", "Spatial reasoning", "Basic coding concepts"],
    whyMatters: "Logical intelligence enables children to analyze situations, recognize patterns, and solve problems methodically. These skills transfer across domains and support learning in all academic areas."
  }, {
    title: "Critical Intelligence",
    description: "Encouraging curiosity, questioning, and the ability to evaluate information and make informed decisions.",
    icon: Lightbulb,
    color: "yellow-500",
    bgColor: "yellow-100",
    assesses: ["Questioning abilities", "Making meaningful comparisons", "Forming hypotheses", "Drawing conclusions", "Applying knowledge to new situations"],
    whyMatters: "Critical thinking helps children evaluate information, question assumptions, and form independent judgments. In an age of information overload, these skills are essential for discernment and wise decision-making."
  }, {
    title: "Emotional Values",
    description: "Building self-awareness, empathy, resilience, and the ability to understand and manage emotions effectively.",
    icon: Heart,
    color: "red-500",
    bgColor: "red-100",
    assesses: ["Emotion recognition and regulation", "Empathy and perspective-taking", "Collaboration and sharing", "Resilience and perseverance", "Ethical decision-making"],
    whyMatters: "Emotional intelligence is consistently linked to success in school, work, and relationships. Children who understand and manage emotions effectively navigate social situations with confidence and compassion."
  }];
  return <section id="pillars" className="py-16 md:py-24 bg-gradient-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Six Pillars</h2>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            ThinkOsphere's unique assessment framework focuses on six key developmental domains that are essential for a child's holistic growth and future success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pillars-grid">
          {pillars.map((pillar, index) => <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg text-gray-800 transform transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-${pillar.bgColor}`}>
                <pillar.icon className={`h-8 w-8 text-${pillar.color}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-gray-600 mb-4">{pillar.description}</p>
              
              <div className="mt-4">
                
                <ul className="list-disc ml-5 text-sm text-gray-600 mb-4">
                </ul>                

              </div>
            </div>)}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our comprehensive assessment measures a child's development across all six pillars, providing a complete picture of their strengths and areas for growth.
          </p>
          <a href="/programs" className="inline-block bg-white text-blue-500 px-8 py-3 rounded-lg font-medium transition-all hover:bg-gray-100 shadow-md">
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>;
};
export default PillarsSection;