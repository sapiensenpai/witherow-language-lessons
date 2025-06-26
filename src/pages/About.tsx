
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Meet Ms. Anna Witherow</h1>
              <p className="text-xl mb-8 text-blue-100">
                Head of Modern Foreign Languages with exceptional qualifications and a passion for helping students achieve excellence in French and German.
              </p>
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                onClick={() => navigate('/booking')}
              >
                Book a Lesson with Ms. Witherow
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/2074007a-617e-4d95-8ca9-4455c0994c05.png" 
                alt="Professional academic setting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Role */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Current Position</h2>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  Head of Modern Foreign Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-lg"><strong>School:</strong> Archbishop Tenison's Church of England High School, Croydon</p>
                  <p className="text-lg"><strong>Duration:</strong> September 2024 - Present</p>
                  <p className="text-lg"><strong>Location:</strong> Croydon, England, United Kingdom</p>
                  <p className="text-gray-600 mt-4">
                    As Head of Department for Modern Foreign Languages, Ms. Witherow manages a team of French and German teachers 
                    while continuing to teach French and German classes herself. She is responsible for the teaching and learning 
                    within her department, including both curricular and co-curricular matters, ensuring the highest standards 
                    of language education.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Educational Excellence</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* PGCE */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <GraduationCap className="h-6 w-6 mr-3" />
                  PGCE Secondary French with German
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg"><strong>Institution:</strong> University College London (UCL)</p>
                  <p className="text-lg"><strong>Year:</strong> 2019-2020</p>
                  <p className="text-lg"><strong>Qualification:</strong> Foreign Language Teacher Education</p>
                  <p className="text-gray-600 mt-4">
                    This qualification recommends Ms. Witherow for QTS (Qualified Teacher Status), enabling her to teach 
                    French and German in secondary schools from KS3 to KS5. During this course, she gained extensive 
                    experience teaching French from KS3-KS5 (Year 7 to A Levels) and German from KS3-KS4 (Year 7 to GCSE).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Master's Degree */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <Award className="h-6 w-6 mr-3" />
                  Master of Arts - Professional Language and Intercultural Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg"><strong>Institution:</strong> University of Leeds</p>
                  <p className="text-lg"><strong>Grade:</strong> Distinction</p>
                  <p className="text-gray-600 mt-4">
                    This advanced degree demonstrates Ms. Witherow's deep understanding of language learning, 
                    intercultural communication, and professional language education methodologies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bachelor's Degree */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3" />
                  Bachelor of Arts - French and German
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg"><strong>Institution:</strong> University of Leeds</p>
                  <p className="text-gray-600 mt-4">
                    Ms. Witherow's undergraduate studies provided her with a solid foundation in both French and German 
                    language, literature, and culture, forming the basis of her expertise in these languages.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Teaching Expertise</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">French Teaching</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• KS3 to A-Level (Years 7-13)</li>
                    <li>• GCSE examination preparation</li>
                    <li>• A-Level literature and culture</li>
                    <li>• Oral examination techniques</li>
                    <li>• Advanced conversation skills</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">German Teaching</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• KS3 to GCSE (Years 7-11)</li>
                    <li>• Grammar and vocabulary building</li>
                    <li>• Cultural context and understanding</li>
                    <li>• Pronunciation and speaking skills</li>
                    <li>• Examination strategies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Learn with an Expert?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            With Ms. Witherow's exceptional qualifications and proven teaching expertise, 
            you'll receive the highest quality French and German tutoring available.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
            onClick={() => navigate('/booking')}
          >
            Book Your First Lesson - £50/hour
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
