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
      title: "Common Entrance French",
      description: "Specialized preparation for Common Entrance French examinations, building fundamental language skills for independent school entry.",
      features: [
        "Basic conversation and pronunciation",
        "Grammar foundations and verb conjugations",
        "Vocabulary building and retention",
        "Listening comprehension skills",
        "Reading simple texts and stories",
        "Writing short paragraphs and dialogues",
        "Cultural awareness and French customs"
      ],
      benefits: "Perfect for students preparing for independent school entrance at 11+ or 13+"
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
    },
    {
      title: "Common Entrance German",
      description: "Specialized preparation for Common Entrance German examinations, introducing fundamental German language skills for independent school entry.",
      features: [
        "Basic vocabulary and everyday phrases",
        "Pronunciation fundamentals and sounds",
        "Simple grammar structures and rules",
        "Cultural introduction to German-speaking countries",
        "Basic conversation skills",
        "Reading simple German texts",
        "Writing basic sentences and descriptions"
      ],
      benefits: "Ideal for students beginning German for independent school entrance at 11+ or 13+"
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-red-50 via-white to-black/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 via-white/30 to-black/10 animate-pulse"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse"></div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-black to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-black/20 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">Services & Pricing</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-red-100 animate-fade-in">
            Professional English, French and German tutoring services tailored to GCSE, A-Level, and Common Entrance success
          </p>
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-lg inline-block shadow-2xl backdrop-blur-xl border border-white/20 hover:scale-105 transition-transform duration-300">
            <span className="text-3xl font-bold">£50 per hour</span>
            <span className="block text-sm">All subjects and levels</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white via-red-50/30 to-black/5 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-red-500/20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-white/10 to-black/20 group-hover:from-red-600/30 group-hover:to-black/30 transition-all duration-500"></div>
                  <img 
                    src="/lovable-uploads/e6538fc8-ca13-4d4a-9a9f-41c70c29858e.png" 
                    alt="Academic learning environment"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl bg-gradient-to-r from-red-700 via-black to-red-900 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-black transition-all duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3 text-gray-900">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-600">
                          <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0 group-hover:text-red-700 transition-colors duration-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 via-white to-black/5 p-4 rounded-lg mb-6 backdrop-blur-sm border border-red-100/50">
                    <p className="bg-gradient-to-r from-red-700 via-black to-red-900 bg-clip-text text-transparent font-medium">{service.benefits}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-600 via-black to-red-800 bg-clip-text text-transparent">£50/hour</div>
                    <Button 
                      className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-semibold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-xl border border-white/20 group overflow-hidden"
                      onClick={() => navigate('/booking')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <span className="relative z-10">Book This Service</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gradient-to-br from-white via-red-50/20 to-black/5 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-black to-red-800 bg-clip-text text-transparent">Why Choose Our Tutoring?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white via-red-50/30 to-black/5 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-red-500/20">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent mb-2 group-hover:from-red-700 group-hover:to-red-900 transition-all duration-300">100%</div>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Qualified Teacher Status</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white via-red-50/30 to-black/5 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-red-500/20">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent mb-2 group-hover:from-red-700 group-hover:to-red-900 transition-all duration-300">8AM-6PM</div>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Flexible Scheduling</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white via-red-50/30 to-black/5 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-red-500/20">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent mb-2 group-hover:from-red-700 group-hover:to-red-900 transition-all duration-300">All Levels</div>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Common Entrance to A-Level</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-red-50 via-white to-black/5 p-8 rounded-lg backdrop-blur-xl border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 via-black to-red-800 bg-clip-text text-transparent">Booking Information</h3>
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
      <section className="py-16 bg-gradient-to-r from-red-600 via-black to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-black/20 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-red-100">
            Book your first lesson today and experience the difference that expert tutoring can make.
          </p>
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-xl border border-white/20 group overflow-hidden"
            onClick={() => navigate('/booking')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">Book Your Lesson Now</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
