
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. Ms. Witherow will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions about tutoring services? Ready to book a lesson? 
            Contact Ms. Witherow today to discuss your language learning goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="e.g., GCSE French Tutoring Inquiry"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Please describe your tutoring needs and any specific questions you have..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Image */}
            <div className="space-y-8">
              <div>
                <img 
                  src="/lovable-uploads/2074007a-617e-4d95-8ca9-4455c0994c05.png" 
                  alt="Professional contact"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">annawitherow@yahoo.co.uk</p>
                      <p className="text-sm text-gray-500">Typical response time: 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">Croydon, England, United Kingdom</p>
                      <p className="text-sm text-gray-500">Online tutoring available worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Availability</h4>
                      <p className="text-gray-600">Monday - Sunday</p>
                      <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Tutoring Rate</h4>
                      <p className="text-gray-600">£50 per hour</p>
                      <p className="text-sm text-gray-500">All subjects and levels</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Quick Booking</h4>
                  <p className="text-blue-800 mb-4">
                    Ready to book a lesson? Use our online booking system for instant confirmation!
                  </p>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    Book a Lesson Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-blue-900">How do I book a lesson?</h4>
                <p className="text-gray-600">
                  Simply visit our booking page, select your preferred date and time, choose your subject, 
                  and complete the secure PayPal payment. You'll receive instant confirmation via email.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-blue-900">What subjects do you teach?</h4>
                <p className="text-gray-600">
                  Ms. Witherow specializes in French and German for both GCSE and A-Level students. 
                  She has experience teaching from KS3 level up to A-Level.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-blue-900">Are lessons conducted online?</h4>
                <p className="text-gray-600">
                  Yes, all tutoring sessions are conducted online, making them accessible to students worldwide. 
                  You'll need a stable internet connection and a device with camera and microphone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-blue-900">What is your cancellation policy?</h4>
                <p className="text-gray-600">
                  Please provide at least 24 hours notice for cancellations. This allows other students 
                  to book the time slot and ensures fair scheduling for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
