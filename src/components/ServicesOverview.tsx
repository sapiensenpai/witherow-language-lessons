
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const ServicesOverview = () => {
  const navigate = useNavigate();

  const services = [
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
      title: "GCSE German",
      description: "Expert German tutoring designed to build confidence and achieve excellent GCSE results.",
      features: ["Vocabulary building", "Pronunciation practice", "Cultural context", "Exam preparation"]
    },
    {
      title: "A-Level German",
      description: "Intensive A-Level German support covering advanced language skills and cultural understanding.",
      features: ["Advanced conversation", "Text analysis", "Cultural topics", "Examination strategies"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Language Tutoring Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional French and German tutoring for GCSE and A-Level students - £50 per hour
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="/lovable-uploads/e6538fc8-ca13-4d4a-9a9f-41c70c29858e.png" 
                  alt="Academic books and materials"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-blue-900 mb-4">£50/hour</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-900 hover:bg-blue-800 px-8 py-4 text-lg"
            onClick={() => navigate('/services')}
          >
            View Detailed Services & Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};
