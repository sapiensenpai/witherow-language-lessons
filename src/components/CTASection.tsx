
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Excel in French & German?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the many students who have achieved outstanding results with Ms. Witherow's expert tutoring. 
          Book your first lesson today and start your journey to language mastery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
            onClick={() => navigate('/booking')}
          >
            Book Your First Lesson
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
            onClick={() => navigate('/contact')}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
