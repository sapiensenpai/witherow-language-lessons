
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('/lovable-uploads/cf9ef865-c04e-4f2e-b046-6e789a9f45a1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Expert English, French & German Tutoring<br />
          <span className="text-yellow-300">for GCSE & A-Level Success</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Achieve excellence with Ms. Anna Witherow - Head of Modern Foreign Languages with proven expertise in English, French and German education
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
            onClick={() => navigate('/booking')}
          >
            Book a Lesson - £50/hour
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
            onClick={() => navigate('/about')}
          >
            Learn About Ms. Witherow
          </Button>
        </div>
      </div>
    </section>
  );
};
