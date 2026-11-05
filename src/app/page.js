"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

/* ✅ ADDED */
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import {
  Briefcase,
  BookOpen,
  Code2,
  CheckCircle,
  Brain,
  Cloud,
  BarChart3,
  Layers,
  Smartphone,
  Settings,
  ShoppingCart,
  ShieldCheck,
  Factory,
  Truck,
  Plane,
  Hospital,
  ClipboardCheck,
  FileText,
  UserCheck,
  GraduationCap 
} from "lucide-react";



const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};


function ScrollReveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    amount: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 80,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/* ================= CAREER SUPPORT ================= */

const careerSupport = [
  {
    icon: Briefcase,
    title: "IT Career Guidance",
    description:
      "Personalized guidance from industry experts to align your goals with real-world IT roles.",
    href: "/it-career-guidance",
  },
  {
    icon: BookOpen,
    title: "Basics to Advanced Learning",
    description:
      "Step-by-step learning paths from fundamentals to advanced technologies.",
    href: "/basics-to-advanced-learning",
  },
  {
    icon: Code2,
    title: "Hands-On Coding Practice",
    description:
      "Daily coding challenges, real projects, and practice labs for skill building.",
    href: "/hands-on-coding-exercises",
  },
  {
    icon: ClipboardCheck,
    title: "Mock Interviews",
    description:
      "Real interview simulations to boost confidence and improve performance.",
    href: "/mock-interviews",
  },
  {
    icon: FileText,
    title: "Resume Building",
    description:
      "Professional resume creation tailored for IT job applications.",
    href: "/resume-building",
  },
  {
    icon: UserCheck,
    title: "Job Placement Support",
    description:
      "End-to-end placement assistance with interview scheduling and referrals.",
    href: "/job-placement-support",
  },
];

/* ================= HERO ================= */

function HeroSection() {

  /* ✅ UPDATED: slides with FULL CONTENT */
  const slides = [
    {
      image: "/python.png",
      title: "PYTHON",
      heading: "Redefine Your Professional Trajectory with Python",
      points: [
        "Master Logic to Advanced Architecture",
        "Exclusive Gateway to Premium Hiring",
        "Build High-Stakes Industry Projects",
        "Elite Mentorship to the Finish Line",
        "Your Future, Engineered to Lead",
        "100% Career Transition Support",
      ],
      roles: [
        "Python Web Developer",
        "Software Engineer",
        "Fullstack developer",
        "Backend developer",
        "Frontend developer",
        "Web Developer",
      ],
    },

    {
      image: "/js.png",
      title: "JAVASCRIPT",
      heading: "JavaScript: Build the Web",
      points: [
        "Master Async Logic & DOM Orchestration",
        "Build Fast, Responsive Digital Products",
        "Write Clean, Scalable Industry Code",
        "Career-Ready Training for the Modern Era",
        "Your Evolution into a Lead Web Developer",
      ],
      roles: [
        "Frontend Developer",
        "Web Developer",
        "Mobile App Developer",
        "Backend Engineer",
        "Cloud Developer",
        "DevOps Engineer",
      ],
    },

    {
      image: "/typescript.png",
      title: "TYPESCRIPT",
      heading: "TypeScript: Scale Your Potential",
      points: [
        "Master Type-Safe Logic & Class Systems",
        "Fast-Track Your Path to Senior Developer Status",
        "Build Secure, Fail-Proof Applications",
        "Accelerate Your Path to Lead Engineer",
        "Future-Proof Your Professional Career",
      ],
      roles: [
        "QA Automation Engineer",
        "Software Architect",
        "Tooling Engineer",
        "Site Reliability Engineer",
        "Systems Programmer",
        "Solutions Architect",
      ],
    },

    {
      image: "/java.png",
      title: "JAVA",
      heading: "Java: The Enterprise Engine",
      points: [
        "Command Core Logic & Advanced OOP",
        "Fast-Track to High-Stability Tech Careers",
        "Engineer Resilient, Multi-Threaded Apps",
        "Master Professional Industry Standards",
        "Your Entry into Corporate Engineering",
      ],
      roles: [
        "Java Full Stack developer",
        "Web Developer",
        "Software Engineer",
        "Backend developer",
        "Frontend developer",
        "UI Developer",
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  /* ✅ AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

        {/* ✅ IMAGE LEFT SIDE (NOT FULL BG NOW) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].image}
            className="absolute left-10 top-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-contain bg-no-repeat bg-center z-0"
            style={{
              backgroundImage: `url(${slides[index].image})`,
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* ✅ GRADIENT (UNCHANGED) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-70 z-10" />

        {/* ✅ CONTENT RIGHT SIDE */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* EMPTY LEFT SPACE */}
          <div></div>

          {/* RIGHT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 1 }}
            >

              {/* TITLE */}
              <h2 className="text-2xl text-blue-400 font-bold mb-2">
                {slides[index].title}
              </h2>

              {/* HEADING */}
              <h2 className="text-3xl md:text-1xl mb-6">
                {slides[index].heading}
              </h2>

              {/* POINTS */}
              <ul className="mb-6 space-y-2 text-gray-400">
                {slides[index].points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>

              {/* ROLES */}
              <h3 className="text-lg font-semibold mb-2">
                Career Outcomes:
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {slides[index].roles.map((role, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <Link
                href="/request-callback"
                className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition"
              >
                Get Started
              </Link>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </div>
  );
}

/* ================= SOLUTIONS ================= */

function SolutionsSection() {
  const items = [
    { title: "AI Chatbots", icon: Brain },
    { title: "Cloud Services", icon: Cloud },
    { title: "Data Analytics", icon: BarChart3 },
    { title: "Full Stack Dev", icon: Layers },
    { title: "Mobile Apps", icon: Smartphone },
    { title: "DevOps", icon: Settings },
  ];

  return (
    <ScrollReveal> {/* ✅ EXISTING */}
      <section className="py-20 bg-white text-gray-800"> {/* ✅ FIXED */}
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our AI & IT Solutions
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-10"
          >
            
            {items.map((item) => {
              const Icon = item.icon; // ✅ FIXED

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="flex items-start gap-5"
                >
                  <Icon className="w-6 h-6" /> {/* ✅ FIXED */}
                  <h3>{item.title}</h3>
                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>
    </ScrollReveal>
  );
}
/* ================= MAIN PAGE ================= */

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="text-gray-800">

      <HeroSection />

  

<ScrollReveal> {/* ✅ ADDED ANIMATION WRAPPER */}
<section className="py-16 px-6 bg-white">
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
    Why to Choose TINITIATE?
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        icon: Briefcase,
        title: "Industry Expert Trainers",
        desc: "Learn from professionals with real-time experience in top IT companies.",
      },
      {
        icon: Code2,
        title: "Hands-On Project Learning",
        desc: "Build real-world projects that make your portfolio job-ready.",
      },
      {
        icon: Brain,
        title: "AI Powered Learning",
        desc: "Smart learning system with AI-based feedback and tracking.",
      },
      {
        icon: BookOpen,
        title: "Career Guidance",
        desc: "Personal mentorship and step-by-step career roadmap support.",
      },
      {
        icon: ClipboardCheck,
        title: "Mock Interviews",
        desc: "Real interview practice sessions to improve confidence and performance.",
      },
      {
        icon: UserCheck,
        title: "Placement Assistance",
        desc: "Resume building, referrals, and end-to-end job support.",
      },
    ].map((item, i) => {
      const Icon = item.icon;

      return (
        <div
          key={i}
          className="group bg-gray-50 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 rounded-2xl p-6"
        >
          {/* ICON */}
          <div className="w-12 h-12 mb-4 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Icon className="w-6 h-6" />
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      );
    })}
  </div>
</section>
</ScrollReveal>



      <SolutionsSection />

      

<ScrollReveal> {/* ✅ ADDED ANIMATION WRAPPER */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-gray-900">
        Industries We Serve
      </h2>
      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        We build scalable solutions across multiple industries with innovation and precision
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {[
        { name: "Technology", icon: Code2 },
        { name: "E-Commerce", icon: ShoppingCart },
        { name: "Insurance", icon: ShieldCheck },
        { name: "Logistics", icon: Truck },
        { name: "Travel", icon: Plane },
        { name: "Education", icon: BookOpen },
        { name: "Hospital", icon: Hospital },
        { name: "Manufacturing", icon: Factory },
      ].map(({ name, icon: Icon }) => (

        <div
          key={name}
          className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >

          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 mb-4 group-hover:bg-blue-50 transition">
            <Icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition" />
          </div>

          {/* TITLE */}
          <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
            {name}
          </h3>

        </div>

      ))}

    </div>
  </div>
</section>
</ScrollReveal>

      <ScrollReveal>
       <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">
          Career Support
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {careerSupport.map(({ icon: Icon, title, description, href }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-xl shadow text-center cursor-pointer"
              onClick={() => router.push(href)}
            >
              <Icon className="mx-auto mb-3 text-blue-600 w-7 h-7" />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

    <ScrollReveal>
  <section className="py-16 text-center">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >

      <Link
        href="/request-callback"
        className="relative inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg 
                   transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        {/* Glow Effect */}
        <span className="absolute inset-0 rounded-lg bg-blue-500 opacity-0 blur-md 
                         transition duration-300 hover:opacity-30"></span>

        {/* Text */}
        <span className="relative z-10">
          Get Started Today
        </span>
      </Link>

    </motion.div>

  </section>
</ScrollReveal>

    </main>
  );
}

