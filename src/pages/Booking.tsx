
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
    { value: "gcse-french", label: "GCSE French" },
    { value: "alevel-french", label: "A-Level French" },
    { value: "gcse-german", label: "GCSE German" },
    { value: "alevel-german", label: "A-Level German" }
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
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Lesson</h1>
            <p className="text-xl text-gray-600">
              Schedule your French or German tutoring session with Ms. Anna Witherow
            </p>
            <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4 inline-block">
              <p className="text-yellow-800 font-semibold">£50 per hour • Available 8 AM - 6 PM</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                1
              </div>
              <div className={`w-12 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                2
              </div>
              <div className={`w-12 h-1 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                3
              </div>
            </div>
          </div>

          {/* Step 1: Date, Time, and Subject Selection */}
          {step === 1 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <CalendarDays className="h-6 w-6 mr-3" />
                  Select Date, Time & Subject
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Choose Date</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                      className="rounded-md border"
                    />
                  </div>

                  {/* Time and Subject */}
                  <div className="space-y-6">
                    <div>
                      <Label className="text-lg font-semibold mb-3 block">Available Times</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className="h-12"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-3 block">Subject</Label>
                      <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select subject and level" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject.value} value={subject.value}>
                              {subject.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleNext} className="bg-blue-900 hover:bg-blue-800 px-8">
                    Next: Student Information
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Student Information */}
          {step === 2 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <Clock className="h-6 w-6 mr-3" />
                  Student Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Booking Summary */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Lesson Summary</h4>
                  <p><strong>Date:</strong> {selectedDate?.toDateString()}</p>
                  <p><strong>Time:</strong> {selectedTime}</p>
                  <p><strong>Subject:</strong> {subjects.find(s => s.value === selectedSubject)?.label}</p>
                  <p><strong>Rate:</strong> £50/hour</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="student-name">Student Name *</Label>
                    <Input
                      id="student-name"
                      value={studentInfo.name}
                      onChange={(e) => handleStudentInfoChange('name', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="student-email">Email Address *</Label>
                    <Input
                      id="student-email"
                      type="email"
                      value={studentInfo.email}
                      onChange={(e) => handleStudentInfoChange('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="student-phone">Phone Number</Label>
                    <Input
                      id="student-phone"
                      value={studentInfo.phone}
                      onChange={(e) => handleStudentInfoChange('phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="current-level">Current Level *</Label>
                    <Select value={studentInfo.level} onValueChange={(value) => handleStudentInfoChange('level', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select current level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="year-10">Year 10 (GCSE)</SelectItem>
                        <SelectItem value="year-11">Year 11 (GCSE)</SelectItem>
                        <SelectItem value="year-12">Year 12 (A-Level)</SelectItem>
                        <SelectItem value="year-13">Year 13 (A-Level)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={handleNext} className="bg-blue-900 hover:bg-blue-800 px-8">
                    Next: Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <CreditCard className="h-6 w-6 mr-3" />
                  Payment & Confirmation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Final Summary */}
                <div className="bg-gray-50 p-6 rounded-lg">
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
                    <p className="text-2xl font-bold text-blue-900">Total: £50.00</p>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Payment via PayPal</h4>
                  <p className="text-yellow-700 text-sm">
                    You will be redirected to PayPal to complete your payment securely. 
                    Payment will be processed to annawitherow@yahoo.co.uk.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">What happens next?</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Instant booking confirmation email sent to you</li>
                    <li>• Ms. Witherow receives notification of your booking</li>
                    <li>• Calendar is automatically updated to prevent double booking</li>
                    <li>• You'll receive lesson joining instructions 24 hours before</li>
                  </ul>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button 
                    onClick={handlePayment} 
                    className="bg-green-600 hover:bg-green-700 px-8 text-white"
                  >
                    Pay with PayPal - £50.00
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
