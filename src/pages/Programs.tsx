
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Programs = () => {
  const programs = [
    {
      name: "Nursery",
      ageRange: "3-4 years",
      focus: "Early foundational skills through play-based activities",
      features: [
        "Introduction to alphabets and sounds in both languages",
        "Number recognition and basic counting",
        "Self-awareness and immediate family relationships",
        "Simple classification and matching",
        "Basic observation skills",
        "Identifying primary emotions"
      ],
      methods: [
        "Observation-based evaluation",
        "Interactive play activities",
        "Simple picture-based tasks",
        "One-on-one conversations",
        "Portfolio review"
      ],
      image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "LKG",
      ageRange: "4-5 years",
      focus: "Building core cognitive and social capabilities",
      features: [
        "Phonics and word recognition in both languages",
        "Number operations and patterns",
        "Family and community awareness",
        "Logical sequencing and puzzles",
        "Comparing and questioning",
        "Emotion recognition and empathy"
      ],
      methods: [
        "Guided play-based activities",
        "Interactive digital tasks",
        "Small group observations",
        "Creative expression projects",
        "Structured conversations"
      ],
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "UKG",
      ageRange: "5-6 years",
      focus: "Developing independence and academic readiness",
      features: [
        "Reading comprehension and expression",
        "Advanced number concepts and measurement",
        "Community and cultural awareness",
        "Pattern creation and problem-solving",
        "Hypothesis formation",
        "Collaboration and conflict resolution"
      ],
      methods: [
        "Game-based challenges",
        "Digital adaptive assessments",
        "Project-based evaluation",
        "Scenario-based tasks",
        "Group dynamics observation"
      ],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Grade 1",
      ageRange: "6-7 years",
      focus: "Mastering fundamental academic and life skills",
      features: [
        "Integrated language skills and storytelling",
        "Mathematical reasoning and data interpretation",
        "Environmental and civic awareness",
        "Multi-step problem solving",
        "Critical analysis of information",
        "Perspective-taking and empathy"
      ],
      methods: [
        "Multi-domain projects",
        "Digital adaptive challenges",
        "Performance tasks",
        "Problem-solving scenarios",
        "Collaborative activities"
      ],
      image: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Grade 2",
      ageRange: "7-8 years",
      focus: "Expanding knowledge and analytical abilities",
      features: [
        "Advanced reading and writing in both languages",
        "Complex mathematical concepts",
        "Global awareness and diversity",
        "Strategy development and application",
        "Evaluating information and forming judgments",
        "Ethical reasoning and decision-making"
      ],
      methods: [
        "Integrated projects",
        "Adaptive digital assessment",
        "Real-world application tasks",
        "Creative problem-solving",
        "Reflective activities"
      ],
      image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
              <p className="text-xl text-white/90">
                Age-Specific Assessment Programs Tailored for Different Developmental Stages
              </p>
              <p className="mt-4 text-lg text-white/80">
                ThinkOsphere Olympiad offers age-appropriate assessment programs that recognize the unique developmental needs of children at different stages. Each program evaluates the same six pillars while adapting the methodology and complexity to match children's capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {programs.map((program, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="md:w-1/2">
                    <img 
                      src={program.image} 
                      alt={`${program.name} program`} 
                      className="rounded-xl shadow-lg w-full h-96 object-cover" 
                    />
                  </div>
                  <div className="md:w-1/2">
                    <div className="inline-block px-4 py-1 bg-thinksphere-blue/10 text-thinksphere-blue rounded-full font-medium mb-4">
                      Age: {program.ageRange}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{program.name} Program</h3>
                    <p className="text-lg text-gray-700 mb-6">{program.focus}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Focus Areas:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-thinksphere-blue font-bold">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Assessment Methods:</h4>
                      <ul className="space-y-2">
                        {program.methods.map((method, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="h-5 w-5 text-thinksphere-accent-green mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="#" 
                        className="text-sm font-medium text-thinksphere-blue border border-thinksphere-blue/20 px-4 py-2 rounded-md hover:bg-thinksphere-blue/5"
                      >
                        Sample Activities
                      </a>
                      <a 
                        href="#" 
                        className="text-sm font-medium text-thinksphere-blue border border-thinksphere-blue/20 px-4 py-2 rounded-md hover:bg-thinksphere-blue/5"
                      >
                        Program Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg max-w-3xl mx-auto mb-8">
                Ready to get your child started with our age-specific programs? Register today and help your child discover their unique developmental strengths.
              </p>
              <a 
                href="/register" 
                className="btn-primary inline-block"
              >
                Register Your Child
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Programs;
