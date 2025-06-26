
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Clock, CreditCard } from "lucide-react";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    level: ""
  });
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  // Available time slots (8 AM to 6 PM)
  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const subjects = [
    { value: "gcse-english", label: "GCSE English" },
    { value: "alevel-english", label: "A-Level English" },
    { value: "common-entrance-english", label: "Common Entrance English" },
    { value: "gcse-french", label: "GCSE French" },
    { value: "alevel-french", label: "A-Level French" },
    { value: "common-entrance-french", label: "Common Entrance French" },
    { value: "gcse-german", label: "GCSE German" },
    { value: "alevel-german", label: "A-Level German" },
    { value: "common-entrance-german", label: "Common Entrance German" }
  ];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleStudentInfoChange = (field: string, value: string) => {
    setStudentInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (step === 1 && (!selectedDate || !selectedTime || !selectedSubject)) {
      toast({
        title: "Please complete all fields",
        description: "Select a date, time, and subject to continue.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2 && (!studentInfo.name || !studentInfo.email || !studentInfo.level)) {
      toast({
        title: "Please complete all fields",
        description: "Fill in all student information to continue.",
        variant: "destructive"
      });
      return;
    }

    setStep(step + 1);
  };

  const handlePayment = () => {
    // This would integrate with PayPal in a real implementation
    toast({
      title: "Booking Confirmed!",
      description: "Your lesson has been booked. Confirmation email sent to both you and Ms. Witherow.",
    });
    
    // Reset form
    setStep(1);
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedSubject("");
    setStudentInfo({ name: "", email: "", phone: "", level: "" });
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-red-50 via-white to-black/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 via-white/30 to-black/10 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-red-800 bg-clip-text text-transparent mb-4 animate-fade-in">Book Your Lesson</h1>
            <p className="text-xl text-gray-600 animate-fade-in">
              Schedule your English, French or German tutoring session with Ms. Anna Witherow
            </p>
            <div className="mt-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 border border-yellow-300 rounded-lg p-4 inline-block shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <p className="bg-gradient-to-r from-yellow-800 via-yellow-900 to-yellow-800 bg-clip-text text-transparent font-semibold">£50 per hour • Available 8 AM - 6 PM</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-gradient-to-r from-red-600 to-black text-white shadow-lg' : 'bg-gray-300'}`}>
                1
              </div>
              <div className={`w-12 h-1 transition-all duration-500 ${step >= 2 ? 'bg-gradient-to-r from-red-600 to-black' : 'bg-gray-300'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-gradient-to-r from-red-600 to-black text-white shadow-lg' : 'bg-gray-300'}`}>
                2
              </div>
              <div className={`w-12 h-1 transition-all duration-500 ${step >= 3 ? 'bg-gradient-to-r from-red-600 to-black' : 'bg-gray-300'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 ${step >= 3 ? 'bg-gradient-to-r from-red-600 to-black text-white shadow-lg' : 'bg-gray-300'}`}>
                3
              </div>
            </div>
          </div>

          {/* Step 1: Date, Time, and Subject Selection */}
          {step === 1 && (
            <Card className="shadow-2xl bg-gradient-to-br from-white via-red-50/30 to-black/5 backdrop-blur-xl border border-white/20 hover:shadow-red-500/20 transition-all duration-500 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-red-700 via-black to-red-900 bg-clip-text text-transparent flex items-center">
                  <CalendarDays className="h-6 w-6 mr-3 text-red-600" />
                  Select Date, Time & Subject
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent">Choose Date</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                      className="rounded-md border border-red-200/50 shadow-lg bg-gradient-to-br from-white to-red-50/20 backdrop-blur-sm"
                    />
                  </div>

                  {/* Time and Subject */}
                  <div className="space-y-6">
                    <div>
                      <Label className="text-lg font-semibold mb-3 block bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent">Available Times</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className={`h-12 transition-all duration-300 ${selectedTime === time 
                              ? 'bg-gradient-to-r from-red-600 to-black text-white shadow-lg hover:shadow-red-500/50 transform scale-105' 
                              : 'hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:border-red-300 hover:scale-105'
                            }`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-3 block bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent">Subject</Label>
                      <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                        <SelectTrigger className="h-12 bg-gradient-to-r from-white to-red-50/20 border-red-200/50 hover:border-red-300 transition-all duration-300">
                          <SelectValue placeholder="Select subject and level" />
                        </SelectTrigger>
                        <SelectContent className="bg-gradient-to-br from-white to-red-50/20 backdrop-blur-xl border border-red-200/50">
                          {subjects.map((subject) => (
                            <SelectItem key={subject.value} value={subject.value} className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">
                              {subject.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleNext} className="relative bg-gradient-to-r from-red-600 via-black to-red-800 hover:from-red-700 hover:via-black hover:to-red-900 text-white px-8 shadow-lg hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-xl border border-white/20 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Next: Student Information</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Student Information */}
          {step === 2 && (
            <Card className="shadow-2xl bg-gradient-to-br from-white via-red-50/30 to-black/5 backdrop-blur-xl border border-white/20 hover:shadow-red-500/20 transition-all duration-500 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-red-700 via-black to-red-900 bg-clip-text text-transparent flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-red-600" />
                  Student Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Booking Summary */}
                <div className="bg-gradient-to-r from-red-50 via-white to-black/5 p-4 rounded-lg backdrop-blur-sm border border-red-100/50 shadow-inner">
                  <h4 className="font-semibold bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent mb-2">Lesson Summary</h4>
                  <p><strong>Date:</strong> {selectedDate?.toDateString()}</p>
                  <p><strong>Time:</strong> {selectedTime}</p>
                  <p><strong>Subject:</strong> {subjects.find(s => s.value === selectedSubject)?.label}</p>
                  <p><strong>Rate:</strong> £50/hour</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="student-name" className="bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent font-semibold">Student Name *</Label>
                    <Input
                      id="student-name"
                      value={studentInfo.name}
                      onChange={(e) => handleStudentInfoChange('name', e.target.value)}
                      className="mt-1 bg-gradient-to-r from-white to-red-50/20 border-red-200/50 hover:border-red-300 focus:border-red-500 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="student-email" className="bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent font-semibold">Email Address *</Label>
                    <Input
                      id="student-email"
                      type="email"
                      value={studentInfo.email}
                      onChange={(e) => handleStudentInfoChange('email', e.target.value)}
                      className="mt-1 bg-gradient-to-r from-white to-red-50/20 border-red-200/50 hover:border-red-300 focus:border-red-500 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="student-phone" className="bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent font-semibold">Phone Number</Label>
                    <Input
                      id="student-phone"
                      value={studentInfo.phone}
                      onChange={(e) => handleStudentInfoChange('phone', e.target.value)}
                      className="mt-1 bg-gradient-to-r from-white to-red-50/20 border-red-200/50 hover:border-red-300 focus:border-red-500 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="current-level" className="bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent font-semibold">Current Level *</Label>
                    <Select value={studentInfo.level} onValueChange={(value) => handleStudentInfoChange('level', value)}>
                      <SelectTrigger className="mt-1 bg-gradient-to-r from-white to-red-50/20 border-red-200/50 hover:border-red-300 transition-all duration-300">
                        <SelectValue placeholder="Select current level" />
                      </SelectTrigger>
                      <SelectContent className="bg-gradient-to-br from-white to-red-50/20 backdrop-blur-xl border border-red-200/50">
                        <SelectItem value="beginner" className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">Beginner</SelectItem>
                        <SelectItem value="intermediate" className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">Intermediate</SelectItem>
                        <SelectItem value="advanced" className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">Advanced</SelectItem>
                        <SelectItem value="year-10" className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">Year 10 (GCSE)</SelectItem>
                        <SelectItem value="year-11" className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">Year 11 (GCSE)</SelectItem>
                        <SelectItem value="year-12" className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">Year 12 (A-Level)</SelectItem>
                        <SelectItem value="year-13" className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">Year 13 (A-Level)</SelectItem>
                        <SelectItem value="11-plus" className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">11+ Common Entrance</SelectItem>
                        <SelectItem value="13-plus" className="hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200">13+ Common Entrance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)} className="border-red-200 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:border-red-300 transition-all duration-300">
                    Back
                  </Button>
                  <Button onClick={handleNext} className="relative bg-gradient-to-r from-red-600 via-black to-red-800 hover:from-red-700 hover:via-black hover:to-red-900 text-white px-8 shadow-lg hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-xl border border-white/20 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Next: Payment</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <Card className="shadow-2xl bg-gradient-to-br from-white via-red-50/30 to-black/5 backdrop-blur-xl border border-white/20 hover:shadow-red-500/20 transition-all duration-500 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-red-700 via-black to-red-900 bg-clip-text text-transparent flex items-center">
                  <CreditCard className="h-6 w-6 mr-3 text-red-600" />
                  Payment & Confirmation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Final Summary */}
                <div className="bg-gradient-to-r from-gray-50 via-red-50/20 to-black/5 p-6 rounded-lg backdrop-blur-sm border border-red-100/50 shadow-inner">
                  <h4 className="font-semibold text-gray-900 mb-4">Booking Confirmation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Student:</strong> {studentInfo.name}</p>
                      <p><strong>Email:</strong> {studentInfo.email}</p>
                      <p><strong>Level:</strong> {studentInfo.level}</p>
                    </div>
                    <div>
                      <p><strong>Date:</strong> {selectedDate?.toDateString()}</p>
                      <p><strong>Time:</strong> {selectedTime}</p>
                      <p><strong>Subject:</strong> {subjects.find(s => s.value === selectedSubject)?.label}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-2xl font-bold bg-gradient-to-r from-red-600 via-black to-red-800 bg-clip-text text-transparent">Total: £50.00</p>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 border border-yellow-200 p-4 rounded-lg backdrop-blur-sm shadow-inner">
                  <h4 className="font-semibold text-yellow-800 mb-2">Payment via PayPal</h4>
                  <p className="text-yellow-700 text-sm">
                    You will be redirected to PayPal to complete your payment securely. 
                    Payment will be processed to annawitherow@yahoo.co.uk.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-50 via-white to-black/5 border border-red-200 p-4 rounded-lg backdrop-blur-sm shadow-inner">
                  <h4 className="font-semibold bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent mb-2">What happens next?</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Instant booking confirmation email sent to you</li>
                    <li>• Ms. Witherow receives notification of your booking</li>
                    <li>• Calendar is automatically updated to prevent double booking</li>
                    <li>• You'll receive lesson joining instructions 24 hours before</li>
                  </ul>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)} className="border-red-200 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:border-red-300 transition-all duration-300">
                    Back
                  </Button>
                  <Button 
                    onClick={handlePayment} 
                    className="relative bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-8 shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-xl border border-white/20 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10">Pay with PayPal - £50.00</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
