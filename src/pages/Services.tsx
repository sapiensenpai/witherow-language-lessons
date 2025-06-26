import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "GCSE English",
      description: "Comprehensive preparation for GCSE English Language and Literature examinations with personalized attention to all key skills.",
      features: [
        "Text analysis and interpretation",
        "Creative writing development",
        "Essay structure and planning",
        "Reading comprehension skills",
        "Grammar and language techniques",
        "Past paper practice and exam techniques",
        "Literature study and character analysis"
      ],
      benefits: "Perfect for students aiming for grades 7-9 in GCSE English"
    },
    {
      title: "A-Level English",
      description: "Advanced English tutoring covering literature analysis, critical thinking, and sophisticated writing skills for A-Level excellence.",
      features: [
        "Literary criticism and analysis",
        "Advanced essay writing techniques",
        "Comparative literature studies",
        "Critical theory application",
        "Independent research skills",
        "Exam preparation strategies",
        "Coursework guidance and support"
      ],
      benefits: "Designed for students targeting A*-B grades in A-Level English"
    },
    {
      title: "Common Entrance English",
      description: "Specialized preparation for Common Entrance English examinations, building essential skills for independent school entry.",
      features: [
        "Grammar foundations and application",
        "Reading comprehension strategies",
        "Creative writing skills development",
        "Spelling and vocabulary expansion",
        "Punctuation and sentence structure",
        "Poetry analysis and appreciation",
        "Exam technique and confidence building"
      ],
      benefits: "Ideal for students preparing for independent school entrance at 11+ or 13+"
    },
    {
      title: "GCSE French",
      description: "Comprehensive preparation for GCSE French examinations with personalized attention to all four language skills.",
      features: [
        "Speaking practice and oral exam preparation",
        "Listening comprehension improvement",
        "Reading skills and text analysis",
        "Writing techniques and essay structure",
        "Grammar foundations and vocabulary building",
        "Past paper practice and exam techniques",
        "Cultural context and real-world application"
      ],
      benefits: "Perfect for students aiming for grades 7-9 in GCSE French"
    },
    {
      title: "A-Level French",
      description: "Advanced French tutoring covering literature, culture, and sophisticated language skills for A-Level excellence.",
      features: [
        "French literature analysis and interpretation",
        "Cultural studies and contemporary issues",
        "Advanced grammar and complex structures",
        "Essay writing and critical analysis",
        "Oral presentation skills",
        "Translation techniques",
        "Exam preparation strategies"
      ],
      benefits: "Designed for students targeting A*-B grades in A-Level French"
    },
    {
      title: "GCSE German",
      description: "Expert German tutoring designed to build confidence and achieve outstanding GCSE results.",
      features: [
        "Pronunciation and accent improvement",
        "Vocabulary expansion and retention",
        "Grammar mastery and application",
        "Cultural understanding and context",
        "Speaking confidence building",
        "Listening comprehension skills",
        "Exam preparation and techniques"
      ],
      benefits: "Ideal for students seeking grades 7-9 in GCSE German"
    },
    {
      title: "A-Level German",
      description: "Intensive A-Level German support covering advanced language skills and deep cultural understanding.",
      features: [
        "Advanced conversation and discussion",
        "German literature and text analysis",
        "Cultural and historical topics",
        "Complex grammar structures",
        "Essay writing and argumentation",
        "Translation skills",
        "Examination strategies and practice"
      ],
      benefits: "Perfect for achieving A*-B grades in A-Level German"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Services & Pricing</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Professional English, French and German tutoring services tailored to GCSE, A-Level, and Common Entrance success
          </p>
          <div className="bg-yellow-500 text-black px-8 py-4 rounded-lg inline-block">
            <span className="text-3xl font-bold">£50 per hour</span>
            <span className="block text-sm">All subjects and levels</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img 
                    src="/lovable-uploads/e6538fc8-ca13-4d4a-9a9f-41c70c29858e.png" 
                    alt="Academic learning environment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/20"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl text-blue-900">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3 text-gray-900">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-blue-800 font-medium">{service.benefits}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold text-blue-900">£50/hour</div>
                    <Button 
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                      onClick={() => navigate('/booking')}
                    >
                      Book This Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Our Tutoring?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
                  <p className="text-gray-600">Qualified Teacher Status</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-900 mb-2">8AM-6PM</div>
                  <p className="text-gray-600">Flexible Scheduling</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-900 mb-2">All Levels</div>
                  <p className="text-gray-600">Common Entrance to A-Level</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Booking Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Rate:</strong> £50 per hour for all subjects and levels</li>
                <li>• <strong>Availability:</strong> Monday to Sunday, 8:00 AM to 6:00 PM</li>
                <li>• <strong>Payment:</strong> Secure PayPal payment required at booking</li>
                <li>• <strong>Confirmation:</strong> Instant email confirmation with lesson details</li>
                <li>• <strong>Location:</strong> Online tutoring available worldwide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your first lesson today and experience the difference that expert tutoring can make.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
            onClick={() => navigate('/booking')}
          >
            Book Your Lesson Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
