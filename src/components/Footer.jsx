import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import perilogo from "../assets/perilogo.svg";
import Paayumoli from "../assets/paayumoli.png";
import FooterSlideOne from "../assets/eventphotos/Abhilash.png";
import FooterSlideTwo from "../assets/eventphotos/Santhosh_Kumaar.png";
import FooterSlideThree from "../assets/eventphotos/Shobana.png";
import FooterSlideFour from "../assets/eventphotos/Kotteswari.png";
import FooterSlideFive from "../assets/eventphotos/Ruby_Radha.png";
import FooterSlideSix from "../assets/eventphotos/Aileen_Sonia_Dhas.png";
import FooterSlideSeven from "../assets/eventphotos/Banupriya.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const staffCoordinatorSlides = [
    { image: FooterSlideOne, name: "Dr. V. Abhilash", department: "Assistant Professor/MECH" },
    { image: FooterSlideTwo, name: "Dr. K. Santhosh Kumaar", department: "Assistant Professor/CIVIL" },
    { image: FooterSlideThree, name: "Ms.S.Shobana", department: "Assistant Professor/ECE" },
    { image: FooterSlideFour, name: "Dr. K. Kotteswari", department: "Assistant Professor/CT" },
    { image: FooterSlideFive, name: "Ms. Ruby Radha", department: "Assistant Professor/S&H" },
    { image: FooterSlideSix, name: "Ms.P.Aileen Sonia Dhas", department: "Assistant Professor/EEE" },
    { image: FooterSlideSeven, name: "Ms.B.K.Banupriya", department: "Assistant Professor/CSE" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % staffCoordinatorSlides.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [staffCoordinatorSlides.length]);

  return (
    <footer id="footer" className="bg-[var(--color-brand-bg)] border-t border-orange-200/20 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <img src={perilogo} alt="PERI Logo" className="h-10 w-auto" />
              <div className="h-6 w-[1px] bg-orange-200/25" />
              <img src={Paayumoli} alt="Paayumoli Logo" className="h-10 w-auto" />
            </div>
            <p className="text-orange-100 font-black text-sm leading-relaxed">
              Celebrating the fusion of tradition and technology. Join us for a journey of cultural excellence and innovation.
            </p>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Staff Coordinators</h4>
            <div className="relative w-full max-w-[320px] aspect-square overflow-hidden rounded-2xl border border-orange-200/30 shadow-[0_14px_36px_-14px_rgba(255,95,0,0.55)] bg-black/35">
              <img
                src={staffCoordinatorSlides[activeSlide].image}
                alt={staffCoordinatorSlides[activeSlide].name}
                className="h-full w-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-4 pb-10 pt-16">
                <p className="text-sm font-black text-white">{staffCoordinatorSlides[activeSlide].name}</p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/85">
                  {staffCoordinatorSlides[activeSlide].department}
                </p>
              </div>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/45 px-3 py-1">
                {staffCoordinatorSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      activeSlide === idx ? "bg-orange-200 scale-110" : "bg-orange-200/45 hover:bg-orange-100/75"
                    }`}
                    aria-label={`Go to footer slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Overall Staff Coordinators</h4>
              <ul className="text-[13px] font-black text-orange-100 space-y-4">
                {[
                  { name: "Mr. Anil Kumar", phone: "6369753989" },
                  { name: "Dr. Gokulanathan M", phone: "9043238159" },
                  { name: "Dr. Karthick K", phone: "9715013461" },
                  { name: "Dr. Kiran Kumar S", phone: "8122827582" },
                  { name: "Mr. Sathish A M", phone: "8015372751" },
                ].map((staff, idx) => (
                  <li key={idx} className="flex flex-col group">
                    <span className="group-hover:text-[var(--color-brand-secondary)] transition-colors">{staff.name}</span>
                    <a href={`tel:${staff.phone}`} className="text-[11px] text-orange-300/70 group-hover:text-[var(--color-brand-secondary)] font-medium transition-colors">
                      {staff.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Student Coordinators</h4>
              <ul className="text-[13px] font-black text-orange-100 space-y-4">
                {[
                  { name: "Mr. Abdul Samad", phone: "8111051404" },
                  { name: "Mr. Aakash Kummar I", phone: "9345375156" },
                  { name: "Ms. Benylin Lifna", phone: "9343447251" },
                  { name: "Mr. Dhanush P", phone: "7395945696" },
                  { name: "Mr. Jayaseelan K", phone: "7876000270" },
                  { name: "Mr. Santosh Raj K", phone: "6379665645" },
                  { name: "Ms. Soundarya S", phone: "6382109028" },
                  { name: "Mr. Tharun", phone: "8778626653" },
                  { name: "Ms. Kotteeswari V", phone: "8925651785" },
                  { name: "Mr. Saran R", phone: "8111051404" },
                ].map((student, idx) => (
                  <li key={idx} className="flex flex-col group">
                    <span className="group-hover:text-[var(--color-brand-primary)] transition-colors">{student.name}</span>
                    <a href={`tel:${student.phone}`} className="text-[11px] text-orange-300/70 group-hover:text-[var(--color-brand-primary)] font-medium transition-colors">
                      {student.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-orange-200/70">Connect With Us</h4>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1, color: "#FFB36A", rotate: 5 }}
                    href="https://www.linkedin.com/company/peri-education/"
                    className="flex flex-col items-center gap-2 text-orange-200/70 group no-underline"
                  >
                    <div className="p-3 bg-black/35 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                      <LinkedInIcon className="text-2xl" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter">LinkedIn</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, color: "#FF7A33", rotate: -5 }}
                    href="https://www.instagram.com/peri_paayumoli_26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="flex flex-col items-center gap-2 text-orange-200/70 group no-underline"
                  >
                    <div className="p-3 bg-black/35 rounded-xl group-hover:bg-red-500/20 transition-colors">
                      <InstagramIcon className="text-2xl" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter">Instagram</span>
                  </motion.a>
                </div>

                <p className="text-[10px] text-orange-300/70 font-black leading-tight uppercase tracking-wider">
                  Follow us for live updates, behind-the-scenes, and event announcements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-orange-200/20 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-orange-300/75 uppercase tracking-widest">
           © Copyright 2026 PERI Institute of Technology. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200/65">
            <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
