
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ms. Anna Witherow</h3>
            <p className="text-gray-300 mb-4">
              Expert French & German Tutoring for GCSE & A-Level Success
            </p>
            <p className="text-gray-300">
              Head of Modern Foreign Languages at Archbishop Tenison's Church of England High School
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About Ms. Witherow</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services & Pricing</a></li>
              <li><a href="/booking" className="hover:text-white transition-colors">Book a Lesson</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>annawitherow@yahoo.co.uk</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Croydon, England, United Kingdom</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>Available 8 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ms. Anna Witherow - French & German Tutoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
