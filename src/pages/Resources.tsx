import React from 'react';
import { Download, BookOpen, Video, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
const Resources = () => {
  const {
    toast
  } = useToast();
  const handleDownload = (resourceName: string,fileUrl: string) => {
    // In a real application, this would trigger a download
    toast({
      title: "Downloading resource",
      description: `${resourceName} is being downloaded.`
    });

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', resourceName); // suggested file name
    link.setAttribute('target', '_blank'); // optional: opens in new tab if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const freeResources = [{
    title: "Sample Assessment Questions",
    type: "PDF Guide",
    description: "Examples of age-appropriate questions from our assessment framework.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fileUrl:"https://example.com/files/report.pdf",
    icon: FileText
  }, {
    title: "Domain Activity Calendars",
    type: "Printable Activities",
    description: "Monthly activity calendars with daily suggestions for each developmental domain.",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fileUrl:"https://example.com/files/report.pdf",
    icon: Download
  }, {
    title: "Parent Guidance Videos",
    type: "Video Series",
    description: "Short video guides on supporting your child's development at home.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fileUrl:"https://example.com/files/report.pdf",
    icon: Video
  }, {
    title: "Basic Preparation Checklist",
    type: "PDF Guide",
    description: "Simple checklist to help prepare your child for the ThinkOsphere experience.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fileUrl:"https://example.com/files/report.pdf",
    icon: FileText
  }];
  const premiumResources = [{
    title: "ThinkOsphere Prep Kit",
    description: "Age-appropriate preparation kits containing comprehensive materials for all six developmental domains.",
    price: "₹1,499",
    fileUrl:"https://example.com/files/report.pdf",
    features: ["Comprehensive workbooks for all six domains", "Interactive digital activities", "Flash cards and learning games", "Parent guide with daily activity suggestions", "Progress tracking tools"]
  }, {
    title: "Parent Workshop Bundle",
    description: "Complete set of workshop recordings featuring expert guidance on supporting holistic development.",
    price: "₹899",
    fileUrl:"https://example.com/files/report.pdf",
    features: ["6 in-depth workshop recordings", "Supplementary reading materials", "Practical implementation guides", "Q&A session transcripts", "Lifetime access to resources"]
  }, {
    title: "Digital Learning Subscription",
    description: "Ongoing access to our expanding library of digital activities, videos, and parent resources.",
    price: "₹399/month",
    fileUrl:"https://example.com/files/report.pdf",
    features: ["Unlimited digital resources", "Weekly new activities", "Expert webinars", "Progress tracking tools", "Community forum access"]
  }];
  const sampleActivities = [{
    domain: "Bilingual Literacy",
    title: "Story Sequence Cards",
    ageGroup: "4-6 years",
    description: "Children arrange picture cards to recreate a story sequence, then narrate it in both Hindi and English.",
    fileUrl:"https://example.com/files/report.pdf",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }, {
    domain: "Numeracy Skills",
    title: "Pattern Block Puzzles",
    ageGroup: "5-7 years",
    description: "Children complete pattern block puzzles of increasing complexity, identifying patterns and relationships.",
    fileUrl:"https://example.com/files/report.pdf",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }, {
    domain: "Logical Intelligence",
    title: "Shape Sorting Challenge",
    ageGroup: "3-5 years",
    description: "Children sort and classify objects by multiple attributes in a timed, playful challenge.",
    fileUrl:"https://example.com/files/report.pdf",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }];
  return <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              
              <p className="text-white/90 text-3xl md:text-5xl font-bold">
                Prepare for Success
              </p>
              <p className="mt-4 text-lg text-white/80">
                Engaging Resources for ThinkOsphere Olympiad
              </p>
              <p className="mt-4 text-white/80">
                Preparation for ThinkOsphere is not about cramming or rote learning—it's about engaging children in meaningful activities that naturally develop skills across multiple domains. Our resources make preparation a joyful experience.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Activities Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sample Activities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Interactive examples of the types of activities included in our assessments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {sampleActivities.map((activity, index) => <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-thinksphere-blue/10 text-thinksphere-blue text-xs px-2 py-1 rounded-full">
                        {activity.domain}
                      </span>
                      <span className="text-xs text-gray-500">{activity.ageGroup}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                    <Button variant="outline" className="mt-4 w-full" onClick={() => handleDownload(`${activity.title} Activity Sheet`,activity.fileUrl)}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Activity
                    </Button>
                  </div>
                </div>)}
            </div>

            <div className="text-center">
              <Button className="bg-thinksphere-blue hover:bg-thinksphere-blue-dark" onClick={() => handleDownload("Full Activity Sample Pack","")}>
                Download All Sample Activities
              </Button>
            </div>
          </div>
        </section>

        {/* Free Resources Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Resources</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Helpful materials to support your child's development journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {freeResources.map((resource, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-thinksphere-blue/10 text-thinksphere-blue text-sm px-3 py-1 rounded-full">
                        {resource.type}
                      </span>
                      <resource.icon className="h-5 w-5 text-thinksphere-blue" />
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full flex items-center justify-center" onClick={() => handleDownload(resource.title,resource.fileUrl)}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Free
                    </Button>
                  </CardFooter>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Premium Resources */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Preparation Materials</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive resources to help your child prepare for ThinkOsphere assessments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {premiumResources.map((resource, index) => <Card key={index} className="overflow-hidden hover:shadow-xl transition-all h-full flex flex-col border-2 border-thinksphere-blue/10">
                  <CardHeader className="bg-thinksphere-blue/5 border-b">
                    <CardTitle className="flex justify-between items-center">
                      <span>{resource.title}</span>
                      
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow py-6">
                    <p className="text-gray-700 mb-6">{resource.description}</p>
                    <div className="space-y-3">
                      {resource.features.map((feature, i) => <div key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-thinksphere-accent-green mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>)}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button className="w-full bg-thinksphere-blue">
                      Order Now
                    </Button>
                  </CardFooter>
                </Card>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Register your child for the ThinkOsphere Olympiad and discover their unique strengths across all six developmental pillars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="btn-accent">
                Register Your Child
              </a>
              <a href="/contact" className="bg-white text-thinksphere-blue px-6 py-3 rounded-lg font-medium transition-all hover:bg-opacity-90">
                Contact Us With Questions
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>;
};
export default Resources;