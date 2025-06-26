
import { GraduationCap, Award, Users, Clock } from "lucide-react";

export const WhyChooseSection = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Head of Modern Foreign Languages",
      description: "Currently leading the MFL department at Archbishop Tenison's Church of England High School, managing a team of expert language teachers."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Exceptional Qualifications",
      description: "PGCE from UCL, MA with Distinction from University of Leeds, and QTS certified with extensive teaching experience from KS3 to A-Level."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Proven Teaching Excellence",
      description: "Specializing in French and German with a track record of helping students achieve outstanding GCSE and A-Level results."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Flexible Scheduling",
      description: "Available 8 AM to 6 PM with easy online booking system. Lessons tailored to your schedule and learning needs."
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url('/lovable-uploads/303fe180-a671-417e-8a70-9fa59abf8d51.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Ms. Witherow?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience exceptional language education with a qualified professional who combines academic excellence with practical teaching expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
