
import React from 'react';
import PageLayout from '../components/PageLayout';
import { FileText, BookOpen, Video, Download, Users, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Parents = () => {
  const { toast } = useToast();
  
  const handleDownload = (resourceName: string) => {
    toast({
      title: "Downloading...",
      description: `${resourceName} is being downloaded.`
    });
  };
  
  const parentBenefits = [
    {
      title: "Comprehensive Assessment Report",
      description: "Highlighting your child's strengths and growth opportunities across all six developmental domains",
      icon: FileText
    },
    {
      title: "Personalized Development Roadmap",
      description: "Specific activities and resources tailored to your child's unique needs",
      icon: BookOpen
    },
    {
      title: "Parent Workshop Access",
      description: "Expert sessions to help you understand and support holistic development",
      icon: Video
    },
    {
      title: "Home Activity Resources",
      description: "Engaging activities designed for each developmental domain",
      icon: Download
    },
    {
      title: "Progress Tracking Tools",
      description: "Monitor your child's development over time with easy-to-use tools",
      icon: Users
    }
  ];
  
  const parentResources = [
    {
      title: "Domain-Specific Activity Guides",
      description: "Fun, easy-to-implement activities for each of the six developmental domains",
      icon: BookOpen
    },
    {
      title: "Children's Book Recommendations",
      description: "Curated reading lists that support various developmental areas",
      icon: FileText
    },
    {
      title: "Parent Workshop Recordings",
      description: "Expert sessions on supporting holistic development",
      icon: Video
    },
    {
      title: "Digital Resource Access",
      description: "Interactive online activities to engage your child",
      icon: Download
    },
    {
      title: "Parent Community",
      description: "Connect with like-minded parents committed to holistic development",
      icon: Users
    }
  ];
  
  const registrationSteps = [
    {
      step: 1,
      title: "Complete Registration Form",
      description: "Fill out the online form with your child's and your information"
    },
    {
      step: 2,
      title: "Select Assessment Date",
      description: "Choose from available dates at a center near you"
    },
    {
      step: 3,
      title: "Complete Payment",
      description: "Secure your child's spot with online payment"
    },
    {
      step: 4,
      title: "Receive Confirmation",
      description: "Get email confirmation with all details"
    },
    {
      step: 5,
      title: "Prepare Your Child",
      description: "Access free resources to help your child feel comfortable"
    },
    {
      step: 6,
      title: "Assessment Day",
      description: "Your child participates in engaging assessment activities"
    }
  ];
  
  const testimonials = [
    {
      quote: "ThinkOsphere gave us such valuable insights about our daughter's strengths in logical thinking and areas where she could use more support. The personalized activities have made a noticeable difference.",
      parent: "Priyanka M., Parent of a 5-year-old"
    },
    {
      quote: "I love how the assessment looked at so much more than academics. My son actually enjoyed the activities and didn't even realize he was being evaluated!",
      parent: "Rahul S., Parent of a 6-year-old"
    }
  ];
  
  return (
    <PageLayout 
      title="For Parents" 
      subtitle="Support Your Child's Complete Development"
    >
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner in Your Child's Growth Journey</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At ThinkOsphere, we believe parents are the most important partners in a child's developmental journey. Our assessment program provides valuable insights to help you understand your child's unique strengths and nurture their growth across all essential developmental domains.
            </p>
          </div>
          
          {/* What Parents Receive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {parentBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-full bg-thinksphere-blue/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-thinksphere-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Parent Resources */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Parent Resources</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Supporting Complete Intelligence at Home
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parentResources.map((resource, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-thinksphere-blue/10 flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-thinksphere-blue/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-thinksphere-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{resource.title}</h4>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                    <button 
                      onClick={() => handleDownload(resource.title)}
                      className="text-thinksphere-blue text-sm mt-2 flex items-center hover:underline"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                className="bg-thinksphere-blue hover:bg-thinksphere-blue-dark"
                onClick={() => handleDownload("Complete Parent Resource Pack")}
              >
                Download All Resources
              </Button>
            </div>
          </div>
          
          {/* How to Register */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">How to Register Your Child</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                A simple 6-step registration process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {registrationSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-thinksphere-accent-purple/10 flex items-center justify-center mb-4 text-thinksphere-accent-purple font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a href="/register" className="btn-primary inline-block">
                Register Your Child
              </a>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="bg-gradient-blue text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">What Parents Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <Heart className="h-8 w-8 text-white/80 mb-4" />
                  <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                  <p className="font-medium">— {testimonial.parent}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Parents;
