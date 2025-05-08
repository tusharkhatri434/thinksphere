import React from 'react';
import { CalendarDays, CreditCard, School, User, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PageLayout from '../components/PageLayout';
import { Phone, Mail } from 'lucide-react';

const Register = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Registration submitted",
      description: "Thank you for registering. We'll contact you with further details."
    });
  };

  const importantDates = [
    {
      title: "Early Bird Registration",
      date: "July 15 - September 30, 2025",
      icon: CalendarDays
    },
    {
      title: "Regular Registration",
      date: "October 1 - November 30, 2025",
      icon: CalendarDays
    },
    {
      title: "Assessment Period",
      date: "January - February 2026",
      icon: School
    },
    {
      title: "Results Declaration",
      date: "March 30, 2026",
      icon: Users
    }
  ];

  const fees = [
    {
      level: "Nursery & LKG",
      fee: "₹750"
    },
    {
      level: "UKG",
      fee: "₹850"
    },
    {
      level: "Grade 1 & 2",
      fee: "₹950"
    }
  ];

  return (
    <PageLayout 
      title="Register Now" 
      subtitle="Join ThinkOsphere Olympiad - Registration for 2025-26 Now Open"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Child's Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="childName">Full Name</Label>
                      <Input id="childName" required />
                    </div>
                    <div>
                      <Label htmlFor="childDob">Date of Birth</Label>
                      <Input id="childDob" type="date" required />
                    </div>
                    <div>
                      <Label htmlFor="childGrade">Current Grade</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nursery">Nursery</SelectItem>
                          <SelectItem value="lkg">LKG</SelectItem>
                          <SelectItem value="ukg">UKG</SelectItem>
                          <SelectItem value="grade1">Grade 1</SelectItem>
                          <SelectItem value="grade2">Grade 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="childGender">Gender</Label>
                      <RadioGroup defaultValue="female" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Parent/Guardian Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Full Name</Label>
                      <Input id="parentName" required />
                    </div>
                    <div>
                      <Label htmlFor="parentRelation">Relation to Child</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select relation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">Email</Label>
                      <Input id="parentEmail" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="parentPhone">Phone</Label>
                      <Input id="parentPhone" type="tel" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <School className="h-5 w-5 mr-2" />
                    School Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="schoolName">School Name</Label>
                      <Input id="schoolName" required />
                    </div>
                    <div>
                      <Label htmlFor="schoolCity">City</Label>
                      <Input id="schoolCity" required />
                    </div>
                    <div>
                      <Label htmlFor="schoolState">State</Label>
                      <Input id="schoolState" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Details
                  </h3>
                  <div className="p-4 bg-thinksphere-blue/5 rounded-lg">
                    <p className="font-medium">Standard Registration Fee: <span id="fee" className="text-thinksphere-blue font-bold">₹850</span></p>
                    <p className="text-sm text-gray-500 mt-1">Early bird discount of 10% available until September 30</p>
                  </div>
                  {/* Payment method selection would go here in a real application */}
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <input type="checkbox" id="terms" className="h-4 w-4" required />
                    <label htmlFor="terms" className="text-sm">I agree to the Terms and Conditions and Privacy Policy</label>
                  </div>
                  <Button type="submit" className="w-full bg-thinksphere-blue hover:bg-thinksphere-blue-dark">
                    Complete Registration
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Important Dates */}
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-4">Important Dates</h3>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-thinksphere-blue/10 flex items-center justify-center flex-shrink-0 mr-3">
                      <item.icon className="h-5 w-5 text-thinksphere-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Registration Fees */}
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-4">Registration Fees</h3>
              <div className="space-y-2">
                {fees.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span>{item.level}</span>
                    <span className="font-semibold">{item.fee}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg text-sm">
                <p className="font-medium">Early bird discount of 10% available until September 30, 2025</p>
              </div>
            </Card>

            {/* Group Registration */}
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-2">Group Registration</h3>
              <p className="text-gray-600 mb-4">Schools and learning centers can register multiple students at special rates.</p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>

            {/* Need Help? */}
            <Card className="p-6 bg-thinksphere-blue text-white">
              <h3 className="font-bold text-xl mb-2">Need Help?</h3>
              <p className="mb-4">Contact our support team for assistance with registration.</p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91-120-4567890</span>
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>support@thinkosphere.com</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Register;
