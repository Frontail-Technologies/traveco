import { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | TRAVECO Mobility",
  description: "Get in touch with TRAVECO Mobility for professional visa and travel documentation assistance.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F7F5EF] pt-22 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="bg-white py-16 md:py-24 lg:py-28 border-b border-(--traveco-navy)/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-(--traveco-gold,#C5A253) text-[11px] font-bold tracking-widest uppercase mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-[40px] md:text-[50px] font-medium text-traveco-navy leading-[1.1] tracking-tight mb-6">
            Let's plan your next journey.
          </h1>
          <p className="text-(--traveco-navy)/70 text-[16px] md:text-[18px] leading-[1.7]">
            Whether you have a quick question or need comprehensive visa assistance, our team is ready to help you navigate the process.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: ENQUIRY FORM */}
            <div className="lg:col-span-7 bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-(--traveco-navy)/5">
              <h2 className="text-[24px] font-bold text-traveco-navy mb-8">
                Send us a message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[13px] font-bold text-traveco-navy uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-navy)/10 bg-[#FDFDFD] focus:border-traveco-gold focus:ring-1 focus:ring-traveco-gold outline-none transition-all text-[15px]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[13px] font-bold text-traveco-navy uppercase tracking-wider">Mobile Number *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-navy)/10 bg-[#FDFDFD] focus:border-traveco-gold focus:ring-1 focus:ring-traveco-gold outline-none transition-all text-[15px]"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[13px] font-bold text-traveco-navy uppercase tracking-wider">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-navy)/10 bg-[#FDFDFD] focus:border-traveco-gold focus:ring-1 focus:ring-traveco-gold outline-none transition-all text-[15px]"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="destination" className="text-[13px] font-bold text-traveco-navy uppercase tracking-wider">Destination</label>
                    <input 
                      type="text" 
                      id="destination"
                      className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-navy)/10 bg-[#FDFDFD] focus:border-traveco-gold focus:ring-1 focus:ring-traveco-gold outline-none transition-all text-[15px]"
                      placeholder="e.g. United Kingdom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="visaType" className="text-[13px] font-bold text-traveco-navy uppercase tracking-wider">Visa Type</label>
                    <Select name="visaType">
                      <SelectTrigger id="visaType" className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-navy)/10 bg-[#FDFDFD] focus:border-traveco-gold focus:ring-1 focus:ring-traveco-gold outline-none transition-all text-[15px] shadow-none data-[state=open]:border-traveco-gold data-[state=open]:ring-1 data-[state=open]:ring-(--traveco-gold)/50">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-[8px] border-(--traveco-navy)/10 bg-white font-medium text-traveco-navy shadow-lg">
                        <SelectItem value="Tourist / Visitor" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] focus:bg-[#FBF7EE]">Tourist / Visitor</SelectItem>
                        <SelectItem value="Business" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] focus:bg-[#FBF7EE]">Business</SelectItem>
                        <SelectItem value="Student" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] focus:bg-[#FBF7EE]">Student</SelectItem>
                        <SelectItem value="Work / Employment" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] focus:bg-[#FBF7EE]">Work / Employment</SelectItem>
                        <SelectItem value="Transit" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] focus:bg-[#FBF7EE]">Transit</SelectItem>
                        <SelectItem value="Dependent / Family" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] focus:bg-[#FBF7EE]">Dependent / Family</SelectItem>
                        <SelectItem value="Other" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] focus:bg-[#FBF7EE]">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="travelDate" className="text-[13px] font-bold text-traveco-navy uppercase tracking-wider">Travel Date</label>
                    <input 
                      type="date" 
                      id="travelDate"
                      className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-navy)/10 bg-[#FDFDFD] focus:border-traveco-gold focus:ring-1 focus:ring-traveco-gold outline-none transition-all text-[15px]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[13px] font-bold text-traveco-navy uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full p-4 rounded-[8px] border border-(--traveco-navy)/10 bg-[#FDFDFD] focus:border-traveco-gold focus:ring-1 focus:ring-traveco-gold outline-none transition-all text-[15px] resize-none"
                    placeholder="Brief details regarding your application..."
                  />
                </div>

                <button 
                  type="button"
                  className="w-full h-13 bg-traveco-navy hover:bg-[#122A4A] text-white font-bold rounded-[8px] transition-colors"
                >
                  Request Visa Assistance
                </button>
              </form>
            </div>

            {/* RIGHT: CONTACT INFO */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              <div className="bg-[#0B1F3A] rounded-[20px] p-8 md:p-10 text-white shadow-sm">
                <h3 className="text-[20px] font-bold mb-8">Contact Details</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-(--traveco-gold)/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-traveco-gold" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                      <a href="tel:+918850201321" className="text-[16px] font-medium text-white hover:text-traveco-gold transition-colors">
                        +91 88502 01321
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-(--traveco-gold)/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-traveco-gold" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:info@traveco.in" className="text-[16px] font-medium text-white hover:text-traveco-gold transition-colors block mb-1">
                        info@traveco.in
                      </a>
                      <a href="mailto:travecomobility@gmail.com" className="text-[16px] font-medium text-white hover:text-traveco-gold transition-colors block">
                        travecomobility@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-(--traveco-gold)/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-traveco-gold" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-1">Office</p>
                      <p className="text-[16px] font-medium text-white">
                        TRAVECO Mobility<br />
                        Mumbai, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WHATSAPP QUICK ACTION */}
              <a 
                href="https://wa.me/918850201321"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white rounded-[20px] p-6 shadow-sm border border-(--traveco-navy)/5 hover:border-[#25D366]/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-traveco-navy">Chat with us</h4>
                    <p className="text-[14px] text-(--traveco-navy)/60">Fastest response time</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-(--traveco-navy)/10 flex items-center justify-center text-(--traveco-navy)/40 group-hover:border-traveco-navy group-hover:text-traveco-navy transition-all">
                  →
                </div>
              </a>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
