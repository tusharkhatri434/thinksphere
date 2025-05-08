
import React from 'react';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      name: "Nursery",
      age: "3-4 years",
      focus: "Introduction through play-based learning",
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
      age: "4-5 years",
      focus: "Building foundational skills through guided exploration",
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
      age: "5-6 years",
      focus: "Developing skills through engaging group activities",
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
      age: "6-7 years",
      focus: "Integrating skills through collaborative projects",
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
      age: "7-8 years",
      focus: "Applying skills through complex collaborative challenges",
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
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Age-Appropriate Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ThinkSphere offers tailored assessment programs for each stage of early childhood development, ensuring children are evaluated in a way that matches their developmental level.
          </p>
        </div>

        <div className="space-y-16">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <img 
                  src={program.image} 
                  alt={`${program.name} program`} 
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1 bg-thinksphere-blue/10 text-thinksphere-blue rounded-full font-medium mb-4">
                  Age: {program.age}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{program.name} Program</h3>
                <p className="text-lg text-gray-700 mb-6">{program.focus}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-gray-700 mb-2">Focus Areas:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-thinksphere-blue font-bold">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-gray-700 mb-2">Assessment Methods:</h4>
                  <ul className="space-y-1">
                    {program.methods.map((method, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-thinksphere-accent-green font-bold">•</span>
                        <span className="text-sm">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href="#sample-activities" 
                    className="text-sm font-medium text-thinksphere-blue border border-thinksphere-blue/20 px-4 py-2 rounded-md hover:bg-thinksphere-blue/5"
                  >
                    Sample Activities
                  </a>
                  <a 
                    href="/register" 
                    className="text-sm font-medium text-thinksphere-blue border border-thinksphere-blue/20 px-4 py-2 rounded-md hover:bg-thinksphere-blue/5"
                  >
                    Program Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
