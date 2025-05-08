import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';
const Footer: React.FC = () => {
  const {
    toast
  } = useToast();
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    toast({
      title: "Thank you for subscribing!",
      description: `${email} has been added to our newsletter list.`
    });
    e.currentTarget.reset();
  };
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center">
              <img src="/lovable-uploads/ff69c831-61a7-4117-890e-d61bf5887221.png" alt="ThinkOsphere Logo" className="h-12 md:h-16 rounded-md" />
            </div>
            <p className="mb-6 text-gray-400 text-sm md:text-base">India's premier holistic assessment program for foundational years (Nursery to Grade 2).</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-silverzone-blue mr-3" />
                <span className="text-gray-300">+91-120-4567890<br />1800-2345-6789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-silverzone-blue mr-3" />
                <span className="text-gray-300">info@thinkosphere.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-silverzone-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">7th Floor, Horizon Tower<br />Sector 62, Noida, UP - 201309</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link to="/" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pillars" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Our Six Pillars
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 border-b border-gray-700 pb-2">Legal</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link to="#" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-silverzone-blue transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            
            
            
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
              <div>
                
              </div>
              
            </form>
            
            <div className="mt-6">
              <div className="flex space-x-3 md:space-x-4">
                <a href="https://www.facebook.com/" aria-label="Facebook" className="bg-gray-800 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-silverzone-blue transition-colors">
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a href="https://www.instagram.com/" aria-label="Instagram" className="bg-gray-800 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-silverzone-blue transition-colors">
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a href="https://www.x.com/" aria-label="Twitter" className="bg-gray-800 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-silverzone-blue transition-colors">
                  <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a href="https://www.youtube.com/" aria-label="YouTube" className="bg-gray-800 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-silverzone-blue transition-colors">
                  <Youtube className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs md:text-sm">
              &copy; {currentYear} ThinkOsphere Foundation Initiatives. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 md:space-x-6 text-xs md:text-sm">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;