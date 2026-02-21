import React from "react";
import { motion } from "framer-motion";
import Sociallinks from "./ui-components/Sociallinks";
import perilogo from "../assets/perilogo.svg";
import Paayumoli from "../assets/paayumoli.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[var(--color-brand-bg)] border-t border-black/5 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand Side */}
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <img src={perilogo} alt="PERI Logo" className="h-10 w-auto" />
              <div className="h-6 w-[1px] bg-gray-300" />
              <img src={Paayumoli} alt="Paayumoli Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-950 font-black text-sm leading-relaxed">
              Celebrating the fusion of tradition and technology. Join us for a journey of cultural excellence and innovation.
            </p>
          </div>

          {/* Coordinators Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Staff Coordinators */}
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Staff Coordinators</h4>
              <ul className="text-[13px] font-black text-gray-900 space-y-4">
                {[
                  { name: "Mr. Anil Kumar", phone: "6369753989" },
                  { name: "Dr. Gokulanathan M", phone: "9043238159" },
                  { name: "Dr. Karthick M", phone: "9715013461" },
                  { name: "Dr. Kiran Kumar S", phone: "8122827582" },
                  { name: "Mr. Sathish A M", phone: "8015372751" },
                ].map((staff, idx) => (
                  <li key={idx} className="flex flex-col group">
                    <span className="group-hover:text-[var(--color-brand-secondary)] transition-colors">{staff.name}</span>
                    <a href={`tel:${staff.phone}`} className="text-[11px] text-gray-400 group-hover:text-[var(--color-brand-secondary)] font-medium transition-colors">
                      {staff.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Coordinators */}
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Student Coordinators</h4>
              <ul className="text-[13px] font-black text-gray-900 space-y-4">
                {[
                  { name: "Mr. Abdul Samad", phone: "8111051404" },
                  { name: "Mr. Aakash Kummar I", phone: "9345375156" },
                  { name: "Ms. Benylin Lifna", phone: "9343447251" },
                  { name: "Mr. Dhanush P", phone: "7395945696" },
                  { name: "Mr. Jayaseelan K", phone: "7876000270" },
                  { name: "Mr. Santosh Taj K", phone: "6379665645" },
                  { name: "Ms. Soundarya S", phone: "6382109028" },
                  { name: "Mr. Tharun", phone: "8778626653" },
                ].map((student, idx) => (
                  <li key={idx} className="flex flex-col group">
                    <span className="group-hover:text-[var(--color-brand-primary)] transition-colors">{student.name}</span>
                    <a href={`tel:${student.phone}`} className="text-[11px] text-gray-400 group-hover:text-[var(--color-brand-primary)] font-medium transition-colors">
                      {student.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials & Connect */}
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Connect With Us</h4>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1, color: "#0077b5", rotate: 5 }}
                    href="https://www.linkedin.com/company/peri-education/"
                    className="flex flex-col items-center gap-2 text-gray-400 group no-underline"
                  >
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                      <LinkedInIcon className="text-2xl" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter">LinkedIn</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, color: "#E1306C", rotate: -5 }}
                    href="https://www.instagram.com/peri_paayumoli_26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="flex flex-col items-center gap-2 text-gray-400 group no-underline"
                  >
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-pink-50 transition-colors">
                      <InstagramIcon className="text-2xl" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter">Instagram</span>
                  </motion.a>
                </div>

                <p className="text-[10px] text-gray-400 font-black leading-tight uppercase tracking-wider">
                  Follow us for live updates, behind-the-scenes, and event announcements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
            © 2026 PERI Institute of Technology. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
            <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
