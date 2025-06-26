
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      grade: "A-Level French Student",
      content: "Ms. Witherow's teaching helped me achieve an A* in A-Level French. Her expertise and personalized approach made all the difference.",
      rating: 5
    },
    {
      name: "Michael Chen",
      grade: "GCSE German Student",
      content: "I went from struggling with German to getting a Grade 8 in my GCSE. Ms. Witherow's patience and clear explanations were incredible.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      grade: "A-Level German Student",
      content: "The cultural insights and advanced conversation practice really prepared me for university. Highly recommend Ms. Witherow!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from students who have achieved excellence with Ms. Witherow's expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.grade}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
