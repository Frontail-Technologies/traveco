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
import { serviceDestinations } from "@/data/traveco-service-countries";
import { CountryFlag } from "@/components/destinations/country-flag";

export const metadata: Metadata = {
  title: "Contact Us | TRAVECO Mobility",
  description: "Get in touch with TRAVECO Mobility for professional visa and travel documentation assistance.",
};

export default function ContactPage() {
  return (
    <div className="bg-background pt-22 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="bg-white py-16 md:py-24 lg:py-28 border-b border-(--traveco-primary)/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-accent text-[11px] font-bold tracking-widest uppercase mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-[40px] md:text-[50px] font-medium text-navy leading-[1.1] tracking-tight mb-6" data-scroll="fade-up">
            Let's plan your next journey.
          </h1>
          <p className="text-(--traveco-primary)/70 text-[16px] md:text-[18px] leading-[1.7]" data-scroll="fade-up">
            Whether you have a quick question or need comprehensive visa assistance, our team is ready to help you navigate the process.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: ENQUIRY FORM */}
            <div className="lg:col-span-7 bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-(--traveco-primary)/5">
              <h2 className="text-[24px] font-bold text-navy mb-8" data-scroll="fade-up">
                Send us a message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-navy uppercase tracking-widest">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-primary)/10 bg-white focus:border-traveco-gold focus:ring-1 focus:ring-traveco-gold outline-none transition-all text-[15px]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-navy uppercase tracking-widest">Mobile Number *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-primary)/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-[15px]"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-navy uppercase tracking-widest">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-primary)/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-[15px]"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="destination" className="text-xs font-semibold text-navy uppercase tracking-widest">Destination</label>
                    <Select name="destination">
                      <SelectTrigger id="destination" className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-primary)/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-[15px] shadow-none data-[state=open]:border-accent data-[state=open]:ring-1 data-[state=open]:ring-accent/50">
                        <SelectValue placeholder="Select a destination" />
                      </SelectTrigger>
                      <SelectContent className="rounded-[8px] border-(--traveco-primary)/10 bg-white font-medium text-navy shadow-lg max-h-[300px]">
                        {serviceDestinations.map(dest => (
                          <SelectItem key={dest.slug} value={dest.name} className="cursor-pointer rounded-sm py-2.5 text-primary hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary data-[highlighted]:bg-muted data-[highlighted]:text-primary">
                            <div className="flex items-center gap-3">
                              {dest.kind === 'group' ? (
                                <div className="flex size-6 items-center justify-center rounded-full bg-navy/5 text-navy/40">
                                  <span className="text-[10px] font-bold">EU</span>
                                </div>
                              ) : (
                                <CountryFlag countryCode={dest.countryCode || ""} country={dest.name} size="sm" />
                              )}
                              <span>{dest.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                        <SelectItem value="Other" className="cursor-pointer rounded-sm py-2.5 text-primary hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary data-[highlighted]:bg-muted data-[highlighted]:text-primary">
                           <div className="flex items-center gap-3">
                              <div className="w-[24px] h-[16px] bg-slate-100 border border-black/5 rounded-[2px]" />
                              <span>Other</span>
                            </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="visaType" className="text-xs font-semibold text-navy uppercase tracking-widest">Visa Type</label>
                    <Select name="visaType">
                      <SelectTrigger id="visaType" className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-primary)/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-[15px] shadow-none data-[state=open]:border-accent data-[state=open]:ring-1 data-[state=open]:ring-accent/50">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-[8px] border-(--traveco-primary)/10 bg-white font-medium text-navy shadow-lg">
                        <SelectItem value="Tourist / Visitor" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">Tourist / Visitor</SelectItem>
                        <SelectItem value="Business" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">Business</SelectItem>
                        <SelectItem value="Student" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">Student</SelectItem>
                        <SelectItem value="Work / Employment" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">Work / Employment</SelectItem>
                        <SelectItem value="Transit" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">Transit</SelectItem>
                        <SelectItem value="Dependent / Family" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">Dependent / Family</SelectItem>
                        <SelectItem value="Other" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="travelDate" className="text-xs font-semibold text-navy uppercase tracking-widest">Travel Date</label>
                    <input 
                      type="date" 
                      id="travelDate"
                      className="w-full h-13 px-4 rounded-[8px] border border-(--traveco-primary)/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-[15px]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-navy uppercase tracking-widest">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full p-4 rounded-[8px] border border-(--traveco-primary)/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-[15px] resize-none"
                    placeholder="Brief details regarding your application..."
                  />
                </div>

                <button 
                  type="button"
                  className="w-full h-13 bg-accent hover:bg-accent/90 text-white font-bold rounded-[8px] transition-colors"
                >
                  Request Visa Assistance
                </button>
              </form>
            </div>

            {/* RIGHT: CONTACT INFO */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              <div className="bg-navy rounded-[20px] p-8 md:p-10 text-white shadow-sm">
                <h3 className="text-[20px] font-bold mb-8">Contact Details</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                      <a href="tel:+918850201321" className="text-[16px] font-medium text-white hover:text-accent transition-colors">
                        +91 88502 01321
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:info@traveco.in" className="text-[16px] font-medium text-white hover:text-accent transition-colors block mb-1">
                        info@traveco.in
                      </a>
                      <a href="mailto:travecomobility@gmail.com" className="text-[16px] font-medium text-white hover:text-accent transition-colors block">
                        travecomobility@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
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
                className="group flex items-center justify-between bg-white rounded-[20px] p-6 shadow-sm border border-(--traveco-primary)/5 hover:border-[#25D366]/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-navy">Chat with us</h4>
                    <p className="text-[14px] text-(--traveco-primary)/60">Fastest response time</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-(--traveco-primary)/10 flex items-center justify-center text-(--traveco-primary)/40 group-hover:border-navy group-hover:text-navy transition-all">
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
