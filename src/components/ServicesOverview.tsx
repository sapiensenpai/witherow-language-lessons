
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const ServicesOverview = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "GCSE English",
      description: "Comprehensive preparation for GCSE English Language and Literature examinations with focus on analysis, writing, and comprehension skills.",
      features: ["Text analysis training", "Creative writing", "Essay structure", "Exam technique"]
    },
    {
      title: "A-Level English",
      description: "Advanced English tutoring covering literature analysis, critical thinking, and sophisticated writing skills for A-Level success.",
      features: ["Literary criticism", "Advanced analysis", "Essay writing", "Comparative studies"]
    },
    {
      title: "Common Entrance English",
      description: "Specialized preparation for Common Entrance English examinations, building fundamental skills for independent school entry.",
      features: ["Grammar foundations", "Reading comprehension", "Creative writing", "Spelling & vocabulary"]
    },
    {
      title: "GCSE French",
      description: "Comprehensive preparation for GCSE French examinations with focus on speaking, listening, reading, and writing skills.",
      features: ["Exam technique training", "Past paper practice", "Oral exam preparation", "Grammar foundations"]
    },
    {
      title: "A-Level French",
      description: "Advanced French tutoring covering literature, culture, and language skills for A-Level success.",
      features: ["Literary analysis", "Cultural studies", "Advanced grammar", "Essay writing techniques"]
    },
    {
      title: "Common Entrance French",
      description: "Specialized preparation for Common Entrance French examinations, building fundamental language skills for independent school entry.",
      features: ["Basic conversation", "Grammar foundations", "Vocabulary building", "Listening comprehension"]
    },
    {
      title: "GCSE German",
      description: "Expert German tutoring designed to build confidence and achieve excellent GCSE results.",
      features: ["Vocabulary building", "Pronunciation practice", "Cultural context", "Exam preparation"]
    },
    {
      title: "A-Level German",
      description: "Intensive A-Level German support covering advanced language skills and cultural understanding.",
      features: ["Advanced conversation", "Text analysis", "Cultural topics", "Examination strategies"]
    },
    {
      title: "Common Entrance German",
      description: "Specialized preparation for Common Entrance German examinations, introducing fundamental German language skills for independent school entry.",
      features: ["Basic vocabulary", "Pronunciation basics", "Simple grammar", "Cultural introduction"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-black/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 via-white/30 to-black/10 animate-pulse"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-red-800 bg-clip-text text-transparent mb-4 animate-fade-in">
            Language & English Tutoring Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Professional English, French and German tutoring for GCSE, A-Level, and Common Entrance students - £50 per hour
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white via-red-50/30 to-black/5 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-red-500/20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-white/10 to-black/20 group-hover:from-red-600/30 group-hover:to-black/30 transition-all duration-500"></div>
                <img 
                  src="/lovable-uploads/e6538fc8-ca13-4d4a-9a9f-41c70c29858e.png" 
                  alt="Academic books and materials"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardHeader className="relative">
                <CardTitle className="text-2xl bg-gradient-to-r from-red-700 via-black to-red-900 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-black transition-all duration-300">{service.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-black rounded-full mr-3 group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all duration-300"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold bg-gradient-to-r from-red-600 via-black to-red-800 bg-clip-text text-transparent mb-4">£50/hour</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-red-600 via-black to-red-800 hover:from-red-700 hover:via-black hover:to-red-900 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-xl border border-white/20 group overflow-hidden"
            onClick={() => navigate('/services')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">View Detailed Services & Pricing</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
