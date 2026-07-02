"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactPage() {
  // 1. Client-Side Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`✨ Request Sent Successfully!\n\nThank you, ${formData.firstName}. Our property managers will connect with you shortly.`);
    
    // Reset Form Input Layout
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      message: "",
      consent: false,
    });
  };

  return (
    // Swapped bg-[#0a0a0a] for a cleaner, premium light page backdrop
    <main className="min-h-screen bg-slate-50 text-slate flex items-center justify-center p-6 md:p-12 relative overflow-x-hidden selection:bg-sky selection:text-ink">
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start my-12">
        
        {/* LEFT COLUMN: Property Agency Info Panel */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-ink/70 block mb-3">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-ink tracking-tight font-display">
              Let's find your <span className="text-ink/80 italic font-normal">home.</span>
            </h1>
            <p className="mt-6 text-slate leading-relaxed text-base max-w-md">
              Have questions about an active listing, pricing models, or ready-to-move locations? 
              Drop your details right here. Our dedicated consultants will map out concrete next steps for you within 24 hours.
            </p>
          </div>

          {/* Contact Details Directory - Replaced dark borders with clean light slates */}
          <div className="border-t border-slate-200 pt-6 space-y-4 text-sm">
            <div className="flex pb-4 border-b border-slate-100 justify-between items-center">
              <span className="text-slate/60 uppercase tracking-wider text-xs font-semibold">Email</span>
              <a href="mailto:info@lamaison.com" className="text-ink font-semibold hover:opacity-70 transition-opacity">
                info@lamaison.com
              </a>
            </div>
            <div className="flex pb-4 border-b border-slate-100 justify-between items-center">
              <span className="text-slate/60 uppercase tracking-wider text-xs font-semibold">Phone</span>
              <a href="tel:+911234567890" className="text-ink font-semibold hover:opacity-70 transition-opacity">
                +91 12345 67890
              </a>
            </div>
            <div className="flex pb-4 justify-between items-start">
              <span className="text-slate/60 uppercase tracking-wider text-xs font-semibold">HQ Studio</span>
              <span className="text-ink font-semibold text-right">Andheri · Mumbai, India</span>
            </div>
          </div>

          {/* Availability Info Indicator */}
          <div className="flex items-center space-x-2 text-xs text-slate/70 uppercase tracking-widest font-bold pt-4">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span>Consultants Active Now</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Briefing Form - Transformed to matching Sky Palette */}
        <div className="lg:col-span-7 bg-sky/50 border border-sky rounded-3xl p-6 md:p-10 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-ink font-bold block mb-2">Connect</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-8 font-display">
            Send us your <span className="text-ink/80 italic font-normal">requirements.</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-ink/80 mb-2 font-semibold">First Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" id="firstName" required placeholder="Aarchi" 
                  value={formData.firstName} onChange={handleChange}
                  className="w-full bg-white border border-slate-200 focus:border-ink text-ink outline-none px-4 py-3 rounded-xl text-sm transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-ink/80 mb-2 font-semibold">Last Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" id="lastName" required placeholder="Sharma" 
                  value={formData.lastName} onChange={handleChange}
                  className="w-full bg-white border border-slate-200 focus:border-ink text-ink outline-none px-4 py-3 rounded-xl text-sm transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-ink/80 mb-2 font-semibold">Email <span className="text-red-500">*</span></label>
              <input 
                type="type" id="email" required placeholder="aarchi@domain.com" 
                value={formData.email} onChange={handleChange}
                className="w-full bg-white border border-slate-200 focus:border-ink text-ink outline-none px-4 py-3 rounded-xl text-sm transition-all shadow-sm"
              />
            </div>

            {/* Row 3: Phone Number */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-ink/80 mb-2 font-semibold">Phone Number <span className="text-red-500">*</span></label>
              <input 
                type="tel" id="phone" required placeholder="+91 98765 43210" 
                value={formData.phone} onChange={handleChange}
                className="w-full bg-white border border-slate-200 focus:border-ink text-ink outline-none px-4 py-3 rounded-xl text-sm transition-all shadow-sm"
              />
            </div>

            {/* Row 4: Company & Website Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate/80 mb-2 font-medium">Desired Location <span className="italic text-slate/50">— optional</span></label>
                <input 
                  type="text" id="company" placeholder="e.g. Mumbai" 
                  value={formData.company} onChange={handleChange}
                  className="w-full bg-white border border-slate-200 focus:border-ink text-ink outline-none px-4 py-3 rounded-xl text-sm transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate/80 mb-2 font-medium">Budget Range <span className="italic text-slate/50">— optional</span></label>
                <input 
                  type="text" id="website" placeholder="e.g. ₹15 - ₹25 Lakh" 
                  value={formData.website} onChange={handleChange}
                  className="w-full bg-white border border-slate-200 focus:border-ink text-ink outline-none px-4 py-3 rounded-xl text-sm transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Row 5: Message TextArea */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate/80 mb-2 font-medium">Specific Preferences <span className="italic text-slate/50">— optional</span></label>
              <textarea 
                id="message" rows={4} placeholder="Balcony, views, furnishing, close to transit systems..." 
                value={formData.message} onChange={handleChange}
                className="w-full bg-white border border-slate-200 focus:border-ink text-ink outline-none px-4 py-3 rounded-xl text-sm resize-none transition-all shadow-sm"
              />
            </div>

            {/* Row 6: GDPR Consent Verification */}
            <div className="flex items-start space-x-3 pt-2">
              <input 
                type="checkbox" id="consent" required 
                checked={formData.consent} onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-ink focus:ring-0 accent-ink cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-slate leading-normal cursor-pointer select-none">
                I consent to having this platform process my inquiries according to the{" "}
                <a href="#" className="text-ink font-semibold underline hover:opacity-75 transition-opacity">privacy policy</a>.
              </label>
            </div>

            {/* Submit Action Control - Filled with your dark block style text color pairing */}
            <div className="pt-4">
              <button type="submit" className="w-full bg-ink hover:opacity-90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 tracking-wide group text-sm shadow-md">
                <span>Send request</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FLOATING ACTION UTILITIES (Right Side Dock) */}
      <div className="fixed right-4 bottom-6 flex flex-col space-y-3 z-50">
        {/* WhatsApp */}
        <a 
          href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 bg-white text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full flex items-center justify-center border border-slate-100 transition-all shadow-lg group"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.295 1.489 5.361 1.49 5.385 0 9.766-4.38 9.769-9.764.002-2.607-1.011-5.059-2.854-6.905C17.022 2.13 14.577 1.11 11.99 1.11 6.609 1.11 2.228 5.491 2.226 10.87c.001 2.13.56 4.156 1.625 5.91L2.845 20.7l4.017-1.054z"/></svg>
        </a>

        {/* Telephone Dial Link */}
        <a 
          href="tel:+911234567890" 
          className="w-12 h-12 bg-white text-ink hover:bg-ink hover:text-white rounded-full flex items-center justify-center border border-slate-100 transition-all shadow-lg group"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Live-Chat Widget */}
        <button 
          onClick={() => alert("💬 Chat module opened! Connect your message client SDK here.")}
          className="w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:opacity-90"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>

    </main>
  );
}