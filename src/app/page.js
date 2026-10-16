"use client";

/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";
import HomeHeroSlider from "./components/HomeHeroSlider";
import HomeFAQSection from "./components/HomeFAQSection";
import CampusPlacementVisits from "./components/CampusPlacementVisits";
import { PricingCardsShowcase } from "./components/PricingCards";
import { submitContactForm } from "@/lib/contactForms";
import { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  Truck,
  Hospital,
  DatabaseZap,
  Factory,
  Banknote,
  FlaskConical,
  Users,
  LineChart,
  BookOpen,
  Briefcase,
  Code2,
  FileText,
  UserCircle2,
  ClipboardCheck,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
  Star,
  Quote,
  Send,
  ShieldCheck,
  X,
  RotateCcw,
  Target,
  Trophy,
  User,
} from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import {
  SiAmazonwebservices,
  SiClaude,
  SiDatabricks,
  SiGit,
  SiJenkins,
  SiOpenai,
  SiReact,
  SiSnowflake,
  SiSpringboot,
  SiVercel,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

/* ─── Scroll Reveal ──────────────────────────────────────────────────────────── */
function ScrollReveal({ children }) {
  const ref = useRef(null);
  const themeTimerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isThemeSwitching, setIsThemeSwitching] = useState(false);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.16,
    margin: "0px 0px -12% 0px",
  });

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    const root = document.documentElement;
    const handleThemeMutation = () => {
      window.clearTimeout(themeTimerRef.current);
      setIsThemeSwitching(true);
      themeTimerRef.current = window.setTimeout(() => {
        setIsThemeSwitching(false);
      }, 260);
    };
    const observer = new MutationObserver((mutations) => {
      if (
        mutations.some(
          (mutation) =>
            mutation.attributeName === "data-theme" ||
            mutation.attributeName === "class",
        )
      ) {
        handleThemeMutation();
      }
    });
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    return () => {
      observer.disconnect();
      window.clearTimeout(themeTimerRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0.96, y: 18 }}
      className="transform-gpu"
      animate={
        prefersReducedMotion || isThemeSwitching || isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0.96, y: 18 }
      }
      transition={
        prefersReducedMotion || isThemeSwitching
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
      }
      style={{
        willChange:
          prefersReducedMotion || isThemeSwitching
            ? "auto"
            : "opacity, transform",
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Course Slider Icons ─────────────────────────────────────────────────────── */
function AiCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <Image
      src="/images/courses/ai.png"
      alt="AI logo"
      width={384}
      height={384}
      className={`${className} object-contain`}
      loading="eager"
      fetchPriority="high"
      quality={100}
      sizes="(min-width: 1024px) 192px, 128px"
      decoding="async"
    />
  );
}

function MachineLearningCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <Image
      src="/images/courses/ml.png"
      alt="Machine Learning logo"
      width={384}
      height={384}
      className={`${className} object-contain`}
      loading="eager"
      fetchPriority="high"
      quality={100}
      sizes="(min-width: 1024px) 192px, 128px"
      decoding="async"
    />
  );
}

function AgenticAICourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <Image
      src="/images/courses/agentic-ai.png"
      alt="Agentic AI logo"
      width={384}
      height={384}
      className={`${className} object-contain`}
      loading="eager"
      fetchPriority="high"
      quality={100}
      sizes="(min-width: 1024px) 192px, 128px"
      decoding="async"
    />
  );
}

function PythonCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  const gradientA = `pyA-${idSuffix}`;
  const gradientB = `pyB-${idSuffix}`;
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <defs>
        <linearGradient
          id={gradientA}
          x1="70.252"
          y1="1237.476"
          x2="170.659"
          y2="1151.089"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5A9FD4" />
          <stop offset="1" stopColor="#306998" />
        </linearGradient>
        <linearGradient
          id={gradientB}
          x1="209.474"
          y1="1098.811"
          x2="173.62"
          y2="1149.537"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFD43B" />
          <stop offset="1" stopColor="#FFE873" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientA})`}
        d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
      />
      <path
        fill={`url(#${gradientB})`}
        d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
      />
    </svg>
  );
}

function JavaCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path
        fill="#0074BD"
        d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
      />
      <path
        fill="#EA2D2E"
        d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
      />
      <path
        fill="#0074BD"
        d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.386-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327 1.468-.617z"
      />
      <path
        fill="#EA2D2E"
        d="M52.343 126.953c22.479 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
      />
    </svg>
  );
}

function SqlCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <Image
      src="/images/courses/sql.png"
      alt="SQL logo"
      width={256}
      height={256}
      className={`${className} object-contain`}
      loading="eager"
      quality={100}
      sizes="(min-width: 1024px) 192px, 128px"
      decoding="async"
    />
  );
}

function ReactCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
        <ellipse cx="64" cy="64" rx="52" ry="20" />
        <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(60 64 64)" />
        <ellipse
          cx="64"
          cy="64"
          rx="52"
          ry="20"
          transform="rotate(120 64 64)"
        />
      </g>
    </svg>
  );
}

function AzureCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  const gradientA = `azSliderA-${idSuffix}`;
  const gradientB = `azSliderB-${idSuffix}`;
  const gradientC = `azSliderC-${idSuffix}`;
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientA}
          x1="-1032.172"
          y1="145.312"
          x2="-1059.213"
          y2="65.426"
          gradientTransform="matrix(1 0 0 -1 1075 158)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#114a8b" />
          <stop offset="1" stopColor="#0669bc" />
        </linearGradient>
        <linearGradient
          id={gradientB}
          x1="-1023.725"
          y1="108.083"
          x2="-1029.98"
          y2="105.968"
          gradientTransform="matrix(1 0 0 -1 1075 158)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity=".3" />
          <stop offset=".071" stopOpacity=".2" />
          <stop offset=".321" stopOpacity=".1" />
          <stop offset=".623" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={gradientC}
          x1="-1027.165"
          y1="147.642"
          x2="-997.482"
          y2="68.561"
          gradientTransform="matrix(1 0 0 -1 1075 158)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3ccbf4" />
          <stop offset="1" stopColor="#2892df" />
        </linearGradient>
      </defs>
      <path
        d="M33.338 6.544h26.038l-27.03 80.31a4.152 4.152 0 01-3.933 2.835H8.149a4.145 4.145 0 01-3.928-5.459L29.404 9.378a4.152 4.152 0 013.934-2.834z"
        fill={`url(#${gradientA})`}
      />
      <path
        d="M71.175 60.261H41.404a1.911 1.911 0 00-1.3 3.309l19.316 18.053a4.171 4.171 0 002.85 1.126h25.328z"
        fill="#0078d4"
      />
      <path
        d="M33.338 6.544a4.118 4.118 0 00-3.943 2.879L4.252 84.172a4.14 4.14 0 003.897 5.517h20.484a4.443 4.443 0 003.391-2.899l4.935-14.541 17.655 16.525a4.24 4.24 0 002.692.938h23.44l-10.26-29.35-29.916.007L51.7 6.544z"
        fill={`url(#${gradientB})`}
      />
      <path
        d="M66.6 9.378a4.145 4.145 0 00-3.928-2.834H33.648a4.146 4.146 0 013.928 2.834l25.18 75.231a4.146 4.146 0 01-3.928 5.46h29.026a4.146 4.146 0 003.926-5.46z"
        fill={`url(#${gradientC})`}
      />
    </svg>
  );
}

function PowerBICourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <Image
      src="/images/courses/powerbi.png"
      alt="Power BI logo"
      width={384}
      height={384}
      className={`${className} object-contain`}
      loading="eager"
      fetchPriority="high"
      quality={100}
      sizes="(min-width: 1024px) 192px, 128px"
      decoding="async"
    />
  );
}

/* ─── LocalSkillIcon — always fills parent ───────────────────────────────────── */
function LocalSkillIcon({
  src,
  alt,
  className = "w-full h-full",
  idSuffix = "course",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={256}
      height={256}
      className={`${className} object-contain p-[6%] `}
      loading="eager"
      quality={100}
      sizes="(min-width: 640px) 128px, 112px"
      decoding="async"
    />
  );
}

function CourseIconPreloads() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
      {[
        "/images/courses/ai.png",
        "/images/courses/ml.png",
        "/images/courses/agentic-ai.png",
        "/images/courses/powerbi.png",
      ].map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={384}
          height={384}
          priority
          quality={100}
          sizes="192px"
        />
      ))}
    </div>
  );
}

function LogoImage({ src, darkSrc, alt, className = "h-full w-full object-contain" }) {
  if (darkSrc) {
    return (
      <span className={`relative block ${className}`} role="img" aria-label={alt}>
        <Image
          src={src}
          alt=""
          width={320}
          height={320}
          className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity duration-200 dark:opacity-0"
          quality={100}
          sizes="(min-width: 1024px) 144px, 88px"
          decoding="async"
          aria-hidden="true"
        />
        <Image
          src={darkSrc}
          alt=""
          width={320}
          height={320}
          className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-200 dark:opacity-100"
          quality={100}
          sizes="(min-width: 1024px) 144px, 88px"
          decoding="async"
          aria-hidden="true"
        />
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={320}
      height={320}
      className={className}
      quality={100}
      sizes="(min-width: 1024px) 144px, 88px"
      decoding="async"
    />
  );
}

function TechLogo({ tech, className, idSuffix }) {
  const logoClassName = `${className} ${tech.logoClassName || ""}`.trim();

  if (tech.src) {
    return (
      <LogoImage
        src={tech.src}
        darkSrc={tech.darkSrc}
        alt={`${tech.name} logo`}
        className={logoClassName}
      />
    );
  }

  const Icon = tech.icon;
  return tech.custom ? (
    <Icon className={logoClassName} idSuffix={idSuffix} />
  ) : (
    <Icon className={logoClassName} aria-hidden="true" />
  );
}

function hexToRgba(hex, alpha) {
  if (typeof hex !== "string" || !hex.startsWith("#")) return `rgba(37, 99, 235, ${alpha})`;

  const raw = hex.slice(1);
  const normalized =
    raw.length === 3
      ? raw
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : raw;

  if (normalized.length !== 6) return `rgba(37, 99, 235, ${alpha})`;

  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function TechLogoTile({ tech, index, compact = false, reduceMotion = false }) {
  const floatY = index % 2 === 0 ? -12 : 10;
  const floatX = index % 3 === 0 ? -4 : index % 3 === 1 ? 4 : 2;
  const floatRotate = index % 2 === 0 ? 1.8 : -1.8;
  const entranceDelay = index * (compact ? 0.055 : 0.085);
  const idleDelay = entranceDelay + 0.45;
  const idleDuration = compact ? 4.2 + index * 0.24 : 5 + index * 0.36;
  const logoSize = compact
    ? tech.wide
      ? "h-14 w-28"
      : "h-16 w-16"
    : tech.wide
      ? "h-20 w-40 xl:h-24 xl:w-48"
      : "h-24 w-24 xl:h-28 xl:w-28";
  const glowClass = compact
    ? "drop-shadow-[0_12px_18px_var(--tech-glow-color)] dark:drop-shadow-[0_14px_20px_var(--tech-dark-glow-color)]"
    : "drop-shadow-[0_18px_26px_var(--tech-glow-color)] dark:drop-shadow-[0_18px_30px_var(--tech-dark-glow-color)]";

  return (
    <motion.div
      className={`group flex flex-col items-center justify-center text-center ${
        compact ? "min-h-[110px] gap-2 px-1 py-2" : "min-h-[172px] gap-3 px-2 py-3"
      }`}
      style={{
        "--tech-color": tech.color,
        "--tech-dark-color": tech.darkColor || tech.color,
        "--tech-glow-color": hexToRgba(tech.color, compact ? 0.2 : 0.26),
        "--tech-dark-glow-color": hexToRgba(tech.darkColor || tech.color, compact ? 0.24 : 0.32),
        transformPerspective: 900,
      }}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 34,
              scale: 0.82,
              rotateX: -16,
              filter: "blur(8px)",
            }
      }
      animate={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
            }
      }
      transition={{
        delay: entranceDelay,
        type: "spring",
        stiffness: 160,
        damping: 18,
        mass: 0.8,
      }}
    >
      <motion.div
        className="relative flex flex-col items-center justify-center gap-3"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, floatY, floatY * 0.35, 0],
                x: [0, floatX, -floatX * 0.35, 0],
                rotate: [0, floatRotate, -floatRotate * 0.45, 0],
                scale: [1, 1.035, 1.012, 1],
              }
        }
        transition={{
          delay: idleDelay,
          duration: idleDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -10,
                scale: 1.08,
                rotate: 0,
                transition: { type: "spring", stiffness: 260, damping: 16 },
              }
        }
      >
        <motion.div
          className={`relative flex items-center justify-center text-[var(--tech-color)] dark:text-[var(--tech-dark-color)] ${glowClass} ${logoSize}`}
          animate={
            reduceMotion
              ? undefined
              : {
                  rotateZ: [0, floatRotate * 0.2, 0],
                  scale: [1, 1.025, 1],
                }
          }
          transition={{
            delay: idleDelay + 0.18,
            duration: idleDuration * 0.82,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {!compact && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-14 origin-center -translate-x-1/2 rounded-full bg-[var(--tech-color)] opacity-30 dark:bg-[var(--tech-dark-color)]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.18, 0.46, 0.22],
                      scaleX: [0.55, 1, 0.66],
                    }
              }
              transition={{
                delay: idleDelay + 0.12,
                duration: idleDuration * 0.72,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
          <TechLogo
            tech={tech}
            className="h-full w-full object-contain"
            idSuffix={`slider-${tech.key}-${index}`}
          />
        </motion.div>
        <motion.span
          className={`font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-[var(--tech-color)] dark:text-white dark:group-hover:text-[var(--tech-dark-color)] ${
            compact ? "text-xs" : "text-base"
          }`}
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.86, 1, 0.9],
                  y: [0, -1.5, 0],
                }
          }
          transition={{
            delay: idleDelay + 0.2,
            duration: idleDuration * 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {tech.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function CategoryTechShowcase({ course, compact = false, reduceMotion = false }) {
  const balancedGrid =
    !compact && course.technologies.length <= 4
      ? "mx-auto max-w-[520px] grid-cols-2 gap-x-14 gap-y-10 xl:gap-x-16"
      : "mx-auto max-w-[650px] grid-cols-2 gap-x-8 gap-y-9 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-10";

  return (
    <div
      className={`relative mx-auto w-full ${
        compact ? "max-w-[350px]" : "max-w-[680px]"
      }`}
    >
      <div
        className={`relative grid w-full ${
          compact ? "grid-cols-2 gap-x-5 gap-y-5" : balancedGrid
        }`}
      >
        {course.technologies.map((tech, index) => (
          <TechLogoTile
            key={tech.key}
            tech={tech}
            index={index}
            compact={compact}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </div>
  );
}

const ANGULAR_DOTNET_LOGO = "/images/courses/angular-dotnet.png";
const SNOWFLAKE_LOGO = "/images/courses/snowflake.png";

const courses = [
  {
    id: "ai-ml-agentic",
    label: "AI | ML | Agentic Development",
    shortLabel: "AI | ML | Agents",
    heading: "Command the AI Advantage",
    bullets: [
      "Master LLM prompts and copilots",
      "Use Claude, OpenAI, Gemini in workflows",
      "Shape agents with tools and guardrails",
      "Evaluate outputs for accuracy and context",
      "Show AI productivity through real demos",
    ],
    outcomes: [
      "AI Developer",
      "Prompt Engineer",
      "Agentic App Developer",
      "ML Engineer",
      "AI Automation Engineer",
    ],
    accent: "#2563EB",
    technologies: [
      { key: "claude", name: "Claude", icon: SiClaude, color: "#D97757" },
      { key: "openai", name: "OpenAI", icon: SiOpenai, color: "#111827", darkColor: "#F8FAFC" },
      { key: "gemini", name: "Gemini", src: "/images/courses/gemini-original.svg", color: "#8B5CF6" },
      { key: "copilot", name: "Copilot", src: "/images/courses/copilot-original.png", color: "#16A34A" },
    ],
  },
  {
    id: "application-development",
    label: "Application Development",
    shortLabel: "Application Dev",
    heading: "Ship Enterprise App Logic",
    bullets: [
      "Command Java and Spring Boot patterns",
      "Use Python and FastAPI for clean endpoints",
      "Turn pandas work into app-ready insights",
      "Present technical results with matplotlib",
      "Practice testing, debugging, and releases",
    ],
    outcomes: [
      "Backend Developer",
      "Java Developer",
      "Python Developer",
      "API Developer",
      "Application Engineer",
    ],
    accent: "#0F766E",
    technologies: [
      { key: "java", name: "Java", icon: JavaCourseIcon, color: "#EA2D2E", custom: true },
      { key: "springboot", name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { key: "python", name: "Python", src: "/images/courses/python-original.svg", color: "#3776AB" },
      { key: "fastapi", name: "FastAPI", src: "/images/courses/fastapi-original.svg", color: "#009688" },
      {
        key: "pandas",
        name: "pandas",
        src: "/images/courses/pandas-original.svg",
        color: "#150458",
        logoClassName: "dark:brightness-[2.6] dark:saturate-150 dark:drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]",
      },
      {
        key: "matplotlib",
        name: "matplotlib",
        src: "/images/courses/matplotlib.svg",
        darkSrc: "/images/courses/matplotlib-dark.svg",
        color: "#11557C",
        wide: true,
        logoClassName: "dark:drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    shortLabel: "Cloud",
    heading: "Run the Modern Cloud Stack",
    bullets: [
      "Navigate AWS, Azure, and GCP confidently",
      "Use compute, storage, and network basics",
      "Run Snowflake warehouse workflows",
      "Practice Databricks lakehouse pipelines",
      "Track security, monitoring, and cost",
    ],
    outcomes: [
      "Cloud Engineer",
      "Data Platform Engineer",
      "Cloud Developer",
      "Data Engineer",
      "Cloud Solutions Associate",
    ],
    accent: "#0284C7",
    technologies: [
      { key: "aws", name: "AWS", icon: SiAmazonwebservices, color: "#FF9900", wide: true },
      { key: "azure", name: "Azure", src: "/images/courses/azure-original.svg", color: "#0078D4" },
      { key: "gcp", name: "GCP", src: "/images/courses/googlecloud-original.svg", color: "#4285F4" },
      { key: "snowflake", name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { key: "databricks", name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
    ],
  },
  {
    id: "web-development",
    label: "Web Development",
    shortLabel: "Web Development",
    heading: "Create Frontend Career Proof",
    bullets: [
      "Master React component delivery",
      "Use Next.js and Vite for modern builds",
      "Deploy fast through Vercel and Netlify",
      "Connect forms, APIs, routing, and SEO",
      "Polish UI for portfolio-grade demos",
    ],
    outcomes: [
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "Web Developer",
      "UI Engineer",
    ],
    accent: "#0891B2",
    technologies: [
      { key: "react", name: "React", icon: SiReact, color: "#61DAFB" },
      {
        key: "nextjs",
        name: "Next.js",
        src: "/next.svg",
        color: "#111827",
        wide: true,
        logoClassName: "dark:invert dark:drop-shadow-[0_0_18px_rgba(255,255,255,0.16)]",
      },
      { key: "vite", name: "Vite", src: "/images/courses/vite-original.svg", color: "#646CFF" },
      { key: "vercel", name: "Vercel", icon: SiVercel, color: "#000000", darkColor: "#F8FAFC" },
      {
        key: "netlify",
        name: "Netlify",
        src: "/images/courses/netlify-original-wordmark.svg",
        color: "#00C7B7",
        wide: true,
        logoClassName: "dark:brightness-[1.9] dark:saturate-150 dark:drop-shadow-[0_0_18px_rgba(45,212,191,0.24)]",
      },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    shortLabel: "DevOps",
    heading: "Own the Release Pipeline",
    bullets: [
      "Command Jenkins CI/CD pipelines",
      "Manage Git workflows and release habits",
      "Use Terraform for repeatable infrastructure",
      "Run Azure DevOps boards and builds",
      "Practice approvals, checks, and rollbacks",
    ],
    outcomes: [
      "DevOps Engineer",
      "Build Engineer",
      "Release Engineer",
      "Cloud DevOps Associate",
      "Infrastructure Engineer",
    ],
    accent: "#F97316",
    technologies: [
      { key: "jenkins", name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { key: "git", name: "Git", icon: SiGit, color: "#F05032" },
      { key: "terraform", name: "Terraform", src: "/images/courses/terraform-original.svg", color: "#7B42BC" },
      { key: "azure-devops", name: "Azure DevOps", icon: VscAzureDevops, color: "#0078D4" },
    ],
  },
];

/* ─── Course Slider ──────────────────────────────────────────────────────────── */
function CourseSlider() {
  const [active, setActive] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const DURATION = 5000;

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlideDirection(1);
      setActive((cur) => (cur + 1) % courses.length);
    }, DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (idx, direction = idx >= active ? 1 : -1) => {
    setSlideDirection(direction);
    setActive(idx);
    startTimer();
  };
  const prev = () => go((active - 1 + courses.length) % courses.length, -1);
  const next = () => go((active + 1) % courses.length, 1);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = (e.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    if (Math.abs(delta) > 56) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
  };

  const course = courses[active];

  return (
    <section className="bg-white px-3 py-6 transition-colors duration-300 dark:bg-slate-950 sm:px-4 sm:py-10 md:px-10 md:py-12">
      <CourseIconPreloads />
      <div className="mx-auto h-[960px] max-w-[1400px] min-[390px]:h-[900px] lg:h-[620px]">
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={active}
            custom={slideDirection}
            initial={(direction) => ({
              opacity: 0,
              x: direction > 0 ? 64 : -64,
            })}
            animate={{ opacity: 1, x: 0 }}
            exit={(direction) => ({
              opacity: 0,
              x: direction > 0 ? -64 : 64,
            })}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "pan-y" }}
            className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:shadow-[0_24px_70px_rgba(2,6,23,0.55)] sm:rounded-3xl sm:shadow-2xl lg:h-[620px]"
          >
            <button
              onClick={prev}
              className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:border-black hover:bg-black hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-blue-500 lg:flex"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:border-black hover:bg-black hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-blue-500 lg:flex"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="grid gap-0 lg:h-full lg:grid-cols-2">
              <div className="flex flex-col justify-center p-5 sm:p-10 md:p-14 lg:h-full lg:overflow-hidden lg:pb-24 lg:pl-14 lg:pr-8 xl:pl-20 xl:pr-14">
                <span
                  className="mb-3 text-xs font-bold uppercase tracking-widest sm:mb-4 sm:text-sm lg:whitespace-nowrap"
                  style={{ color: course.accent }}
                >
                  {course.label} Training
                </span>
                <h3 className="mb-5 text-xl font-bold leading-snug text-gray-900 dark:text-slate-50 sm:mb-8 sm:text-2xl md:text-3xl lg:min-h-[42px] lg:text-2xl xl:text-3xl">
                  {course.heading}
                </h3>
                <div className="mb-6 lg:hidden">
                  <CategoryTechShowcase
                    course={course}
                    compact
                    reduceMotion={prefersReducedMotion}
                  />
                </div>
                <ul className="mb-5 space-y-2 sm:mb-10 sm:space-y-3 lg:min-h-[172px]">
                  {course.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300 sm:gap-3 sm:text-base lg:whitespace-nowrap lg:text-[15px] xl:text-base"
                    >
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                        style={{ color: course.accent }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="lg:min-h-[100px]">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-slate-300 sm:mb-4">
                    Career Outcomes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.outcomes.map((o, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:px-4 sm:py-1.5 sm:text-sm"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative hidden h-full flex-col items-center justify-center overflow-hidden bg-white p-10 transition-colors duration-300 dark:bg-slate-950 lg:flex lg:p-14 lg:pb-24 lg:pr-20">
                <div className="relative z-10 w-full">
                  <CategoryTechShowcase
                    course={course}
                    reduceMotion={prefersReducedMotion}
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center lg:flex">
              <div className="flex gap-2.5">
                {courses.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className="flex h-5 w-5 items-center justify-center"
                    aria-label={`Show ${courses[i].shortLabel} slide`}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        i === active
                          ? "h-2.5 w-5"
                          : "h-2.5 w-2.5 bg-gray-300 dark:bg-slate-700"
                      }`}
                      style={i === active ? { backgroundColor: course.accent } : undefined}
                    />
                  </button>
                ))}
              </div>
              <div className="mt-4 h-0.5 w-[240px] overflow-hidden rounded-full bg-gray-200 transition-colors duration-300 dark:bg-slate-800">
                <motion.div
                  key={`bar-${active}`}
                  className="h-full rounded-full"
                  style={{ backgroundColor: course.accent }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                />
              </div>
            </div>
            <div className="border-t border-gray-100 bg-white px-5 py-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
              <div className="mx-auto h-0.5 w-full max-w-[180px] overflow-hidden rounded-full bg-gray-200 transition-colors duration-300 dark:bg-slate-800">
                <motion.div
                  key={`mobile-bar-${active}`}
                  className="h-full rounded-full"
                  style={{ backgroundColor: course.accent }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                />
              </div>
              <div className="mt-4 flex justify-center gap-1.5">
                {courses.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className="flex h-5 w-5 items-center justify-center"
                    aria-label={`Show ${courses[i].shortLabel} slide`}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        i === active
                          ? "h-2 w-5"
                          : "h-2 w-2 bg-gray-300 dark:bg-slate-700"
                      }`}
                      style={i === active ? { backgroundColor: course.accent } : undefined}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Skills Data ─────────────────────────────────────────────────────────────── */
const beginnerSkills = [
  {
    name: "Artificial Intelligence",
    href: "/courses/artificial-intelligence-beginner-course",
    svgIcon: (
      <LocalSkillIcon
        src="/images/courses/ai.png"
        alt="Artificial Intelligence logo"
        className="h-full w-full !p-0"
      />
    ),
  },
  {
    name: "Python",
    href: "/courses/python-language-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <defs>
          <linearGradient
            id="pyBeg1"
            x1="70.252"
            y1="1237.476"
            x2="170.659"
            y2="1151.089"
            gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#5A9FD4" />
            <stop offset="1" stopColor="#306998" />
          </linearGradient>
          <linearGradient
            id="pyBeg2"
            x1="209.474"
            y1="1098.811"
            x2="173.62"
            y2="1149.537"
            gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFD43B" />
            <stop offset="1" stopColor="#FFE873" />
          </linearGradient>
        </defs>
        <path
          fill="url(#pyBeg1)"
          d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
        />
        <path
          fill="url(#pyBeg2)"
          d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    href: "/courses/javascript-language-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" fill="#F7DF1E" rx="6" />
        <path d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    href: "/courses/typescript-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" fill="#3178C6" rx="6" />
        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
        <path
          d="M1.5 63.91v62.5h125V1.41h-125zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.13v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
          fill="#3178C6"
        />
      </svg>
    ),
  },
  {
    name: "Java",
    href: "/courses/java-language-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path
          fill="#0074BD"
          d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
        />
        <path
          fill="#EA2D2E"
          d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
        />
        <path
          fill="#0074BD"
          d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.386-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327 1.468-.617z"
        />
        <path
          fill="#EA2D2E"
          d="M52.343 126.953c22.479 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
        />
      </svg>
    ),
  },
  {
    name: "SQL",
    href: "/courses/sql-server-beginner-course",
    svgIcon: <LocalSkillIcon src="/images/courses/sql.png" alt="SQL logo" />,
  },
  {
    name: "Data Structures",
    href: "/courses/data-structures-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <rect width="128" height="128" rx="8" fill="#6366F1" />
        <rect
          x="8"
          y="52"
          width="14"
          height="24"
          rx="3"
          fill="white"
          opacity="0.9"
        />
        <rect
          x="27"
          y="40"
          width="14"
          height="48"
          rx="3"
          fill="white"
          opacity="0.75"
        />
        <rect
          x="46"
          y="32"
          width="14"
          height="64"
          rx="3"
          fill="white"
          opacity="0.6"
        />
        <rect
          x="65"
          y="44"
          width="14"
          height="40"
          rx="3"
          fill="white"
          opacity="0.75"
        />
        <rect
          x="84"
          y="36"
          width="14"
          height="56"
          rx="3"
          fill="white"
          opacity="0.65"
        />
        <rect
          x="103"
          y="48"
          width="14"
          height="32"
          rx="3"
          fill="white"
          opacity="0.5"
        />
        <circle cx="28" cy="24" r="6" fill="white" />
        <circle cx="57" cy="16" r="6" fill="white" />
        <circle cx="86" cy="20" r="6" fill="white" />
        <line
          x1="28"
          y1="24"
          x2="57"
          y2="16"
          stroke="white"
          strokeWidth="2.5"
        />
        <line
          x1="57"
          y1="16"
          x2="86"
          y2="20"
          stroke="white"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
];

const professionalSkills = [
  {
    name: "Machine Learning",
    href: "/courses/machine-learning-professional-course",
    svgIcon: (
      <LocalSkillIcon
        src="/images/courses/ml.png"
        alt="Machine Learning logo"
        className="h-full w-full !p-0"
      />
    ),
  },
  {
    name: "Agentic AI",
    href: "/courses/agentic-ai-professional-course",
    svgIcon: (
      <LocalSkillIcon
        src="/images/courses/agentic-ai.png"
        alt="Agentic AI logo"
        className="h-full w-full !p-0"
      />
    ),
  },
  {
    name: "Java Full Stack",
    href: "/training/professional-training/java-full-stack-development",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path
          fill="#0074BD"
          d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
        />
        <path
          fill="#EA2D2E"
          d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
        />
        <path
          fill="#0074BD"
          d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.386-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327 1.468-.617z"
        />
        <path
          fill="#EA2D2E"
          d="M52.343 126.953c22.479 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
        />
      </svg>
    ),
  },
  {
    name: "React Web Development",
    href: "/training/professional-training/react-web-development",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="5">
          <ellipse cx="64" cy="64" rx="50" ry="20" />
          <ellipse
            cx="64"
            cy="64"
            rx="50"
            ry="20"
            transform="rotate(60 64 64)"
          />
          <ellipse
            cx="64"
            cy="64"
            rx="50"
            ry="20"
            transform="rotate(120 64 64)"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    href: "/training/professional-training/nextjs-web-development",
    svgIcon: (
      <svg
        viewBox="0 0 180 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="nxMask"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#nxMask)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1846V69.3836L139.999 164.845C143.291 162.485 146.441 159.94 149.508 157.52Z"
            fill="url(#nxGrad1)"
          />
          <rect x="115" y="54" width="12" height="72" fill="url(#nxGrad2)" />
        </g>
        <defs>
          <linearGradient
            id="nxGrad1"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="nxGrad2"
            x1="115"
            y1="54"
            x2="115.5"
            y2="106.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Full Stack Angular + .NET",
    href: "/training/professional-training/angular-web-development",
    svgIcon: (
      <LocalSkillIcon
        src={ANGULAR_DOTNET_LOGO}
        alt="Angular and .NET logo"
        className="h-full w-full scale-[1.35] !p-0"
      />
    ),
  },
  {
    name: "AWS Data Engineering",
    href: "/training/professional-training/aws-data-engineering",
    svgIcon: (
      <LocalSkillIcon
        src="/images/courses/aws-devops.png"
        alt="AWS logo"
        className="h-full w-full scale-[1.55] !p-0"
      />
    ),
  },
  {
    name: "Snowflake Data Engineering",
    href: "/training/professional-training/snowflake-data-engineering",
    svgIcon: (
      <LocalSkillIcon
        src={SNOWFLAKE_LOGO}
        alt="Snowflake logo"
        className="h-full w-full scale-[1.6] !p-0"
      />
    ),
  },
  {
    name: "Azure Data Engineering",
    href: "/training/professional-training/azure-data-engineering",
    svgIcon: (
      <svg
        viewBox="0 0 96 96"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="azDEA"
            x1="-1032.172"
            y1="145.312"
            x2="-1059.213"
            y2="65.426"
            gradientTransform="matrix(1 0 0 -1 1075 158)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#114a8b" />
            <stop offset="1" stopColor="#0669bc" />
          </linearGradient>
          <linearGradient
            id="azDEB"
            x1="-1027.165"
            y1="147.642"
            x2="-997.482"
            y2="68.561"
            gradientTransform="matrix(1 0 0 -1 1075 158)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3ccbf4" />
            <stop offset="1" stopColor="#2892df" />
          </linearGradient>
        </defs>
        <path
          d="M33.338 6.544h26.038l-27.03 80.31a4.152 4.152 0 01-3.933 2.835H8.149a4.145 4.145 0 01-3.928-5.459L29.404 9.378a4.152 4.152 0 013.934-2.834z"
          fill="url(#azDEA)"
        />
        <path
          d="M71.175 60.261H41.404a1.911 1.911 0 00-1.3 3.309l19.316 18.053a4.171 4.171 0 002.85 1.126h25.328z"
          fill="#0078d4"
        />
        <path
          d="M66.6 9.378a4.145 4.145 0 00-3.928-2.834H33.648a4.146 4.146 0 013.928 2.834l25.18 75.231a4.146 4.146 0 01-3.928 5.46h29.026a4.146 4.146 0 003.926-5.46z"
          fill="url(#azDEB)"
        />
      </svg>
    ),
  },
  {
    name: "GCP Data Engineering",
    href: "/training/professional-training/gcp-data-engineering",
    svgIcon: (
      <LocalSkillIcon
        src="/images/courses/google-cloud.png"
        alt="Google Cloud logo"
      />
    ),
  },
  {
    name: "Power BI",
    href: "/training/professional-training/visualization-course",
    svgIcon: (
      <LocalSkillIcon src="/images/courses/powerbi.png" alt="Power BI logo" />
    ),
  },
];

/* ─── Skills Switcher ─────────────────────────────────────────────────────────── */
const courseCardDetails = {
  "Artificial Intelligence": {
    summary:
      "Start with AI concepts, prompt practice, practical tools, and simple automations you can use in real work.",
    points: ["AI foundations", "Prompt workflows", "Mini automation projects"],
  },
  Python: {
    summary:
      "Build a strong coding base with Python syntax, functions, data handling, APIs, and project logic.",
    points: ["Python basics", "Data and APIs", "Project-ready practice"],
  },
  JavaScript: {
    summary:
      "Learn browser fundamentals, DOM control, events, async code, and interactive front-end behavior.",
    points: ["DOM and events", "Async JavaScript", "UI project tasks"],
  },
  TypeScript: {
    summary:
      "Write cleaner JavaScript with types, interfaces, tooling, and safer patterns for modern apps.",
    points: ["Type safety", "Interfaces and tooling", "App patterns"],
  },
  Java: {
    summary:
      "Master OOP, collections, exceptions, JDBC basics, and practical problem-solving with Java.",
    points: ["Core Java", "OOP and collections", "Coding practice"],
  },
  SQL: {
    summary:
      "Query relational data using joins, aggregations, subqueries, reporting logic, and database basics.",
    points: ["Joins and filters", "Reports and queries", "Database basics"],
  },
  "Data Structures": {
    summary:
      "Understand arrays, stacks, queues, trees, search, and interview-style logic with clear practice.",
    points: ["Core structures", "Search and sorting", "Problem solving"],
  },
  "Machine Learning": {
    summary:
      "Build model pipelines from data preparation to evaluation with practical, deployment-aware exercises.",
    points: ["Data preparation", "Model training", "Evaluation practice"],
  },
  "Agentic AI": {
    summary:
      "Design AI assistants with tools, memory, workflow orchestration, and practical safety checks.",
    points: ["Agent workflows", "Tools and memory", "AI automation"],
  },
  "Java Full Stack": {
    summary:
      "Create Spring APIs, React screens, authentication, database flows, and production-style projects.",
    points: ["Spring backend", "React frontend", "Full stack projects"],
  },
  "React Web Development": {
    summary:
      "Create fast responsive interfaces with components, hooks, APIs, state, and deployment practice.",
    points: ["React components", "Hooks and APIs", "Responsive UI"],
  },
  "Next.js": {
    summary:
      "Ship full-stack React apps with routing, server rendering, API routes, and performance patterns.",
    points: ["App routing", "Server rendering", "Optimization"],
  },
  "Full Stack Angular + .NET": {
    summary:
      "Deliver enterprise apps using Angular, ASP.NET APIs, SQL, authentication, and clean architecture.",
    points: ["Angular UI", ".NET APIs", "Enterprise projects"],
  },
  "AWS Data Engineering": {
    summary:
      "Build cloud data pipelines with storage, compute, orchestration, monitoring, and delivery practice.",
    points: ["AWS services", "Data pipelines", "Cloud delivery"],
  },
  "Snowflake Data Engineering": {
    summary:
      "Model, load, transform, and tune analytical workloads on Snowflake for real reporting needs.",
    points: ["Snowflake SQL", "Data modeling", "Performance tuning"],
  },
  "Azure Data Engineering": {
    summary:
      "Create Azure data flows with Data Factory, Data Lake, Synapse concepts, and governance basics.",
    points: ["ADF pipelines", "Data Lake", "Azure analytics"],
  },
  "GCP Data Engineering": {
    summary:
      "Build data solutions with BigQuery, Cloud Storage, pipelines, and analytics delivery practice.",
    points: ["BigQuery", "Cloud pipelines", "Analytics practice"],
  },
  "Power BI": {
    summary:
      "Turn raw data into dashboards, DAX measures, reports, and business-ready insights.",
    points: ["DAX measures", "Dashboards", "Business insights"],
  },
};

const getCourseCardDetails = (name) =>
  courseCardDetails[name] ?? {
    summary:
      "Build practical skills through guided lessons, mentor review, and portfolio-ready exercises.",
    points: ["Guided learning", "Hands-on tasks", "Project outcomes"],
  };

function SkillsSwitcher() {
  const [tab, setTab] = useState("beginner");
  const [tabDirection, setTabDirection] = useState(1);
  const skills = tab === "beginner" ? beginnerSkills : professionalSkills;
  const isProfessional = tab === "professional";
  const gridClassName =
    "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedTab = sessionStorage.getItem("skillsTab");
    if (savedTab !== "beginner" && savedTab !== "professional") return;
    const frame = window.requestAnimationFrame(() => {
      setTabDirection(savedTab === "professional" ? 1 : -1);
      setTab(savedTab);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleTabChange = (t) => {
    if (t === tab) return;
    setTabDirection(t === "professional" ? 1 : -1);
    setTab(t);
    if (typeof window !== "undefined") sessionStorage.setItem("skillsTab", t);
  };

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f4f8fc_100%)] px-4 py-12 transition-colors duration-300 dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] sm:px-6 sm:py-14 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 p-5 shadow-[0_28px_80px_-60px_rgba(15,23,42,0.55)] transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-900/90 dark:shadow-[0_30px_90px_-58px_rgba(2,6,23,0.95)] sm:p-8 md:p-10">
          <h2 className="mx-auto mb-3 max-w-6xl whitespace-nowrap text-center text-[1.7rem] font-extrabold text-[#12345f] sm:text-4xl lg:text-5xl">
            Explore Our Career-Focused Programs
          </h2>
          <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-[#e3b526]" />
          <p className="mx-auto mb-7 max-w-2xl text-pretty text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Choose a course path built around practical skills, guided projects,
            and mentor-led learning.
          </p>
          <div className="mb-8 flex justify-center">
            <div className="grid w-full max-w-sm grid-cols-2 gap-2 rounded-[1.35rem] border border-slate-200 bg-slate-100 p-1.5 dark:border-slate-700 dark:bg-slate-950/70">
              {["beginner", "professional"].map((t) => (
                <button
                  key={t}
                  onClick={() => handleTabChange(t)}
                  className={`touch-target rounded-[1rem] px-4 py-3 text-sm font-bold capitalize transition-all duration-300 sm:px-8 sm:text-base ${
                    tab === t
                      ? "bg-[#12345f] text-white shadow-[0_12px_30px_-18px_rgba(18,52,95,0.75)]"
                      : "text-slate-600 hover:bg-white hover:text-[#12345f]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait" custom={tabDirection}>
            <motion.div
              key={tab}
              custom={tabDirection}
              initial={(direction) => ({
                opacity: 0,
                x: direction > 0 ? 44 : -44,
              })}
              animate={{ opacity: 1, x: 0 }}
              exit={(direction) => ({
                opacity: 0,
                x: direction > 0 ? -44 : 44,
              })}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={gridClassName}
            >
              {skills.map((skill) => {
                const details = getCourseCardDetails(skill.name);

                return (
                  <Link
                    key={skill.name}
                    href={skill.href}
                    prefetch
                    className="group relative isolate flex min-h-[365px] flex-col overflow-hidden rounded-[1.65rem] border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-5 text-left shadow-[0_22px_55px_-38px_rgba(15,23,42,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d9b11e]/70 hover:shadow-[0_30px_75px_-45px_rgba(18,52,95,0.7)] dark:border-slate-700/80 dark:bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] dark:shadow-[0_28px_70px_-45px_rgba(2,6,23,0.95)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#e3b526_0%,#12345f_45%,#2d7ff9_100%)]" />
                    <div
                      className={`absolute left-1/2 flex h-24 w-24 max-w-[36%] -translate-x-1/2 items-center justify-center overflow-hidden opacity-95 transition-transform duration-300 group-hover:scale-110 sm:left-auto sm:right-6 sm:top-14 sm:h-28 sm:w-28 sm:translate-x-0 [&>img]:!scale-100 [&>img]:h-full [&>img]:w-full [&>img]:object-contain [&>svg]:h-full [&>svg]:w-full ${
                        isProfessional ? "top-20" : "top-12"
                      }`}
                    >
                      {skill.svgIcon}
                    </div>

                    <div
                      className={`relative z-10 flex items-start sm:min-h-[8.5rem] ${
                        isProfessional ? "min-h-[11rem]" : "min-h-[8.5rem]"
                      }`}
                    >
                      <div className="flex flex-col items-start gap-2">
                        {isProfessional ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[0.68rem] font-bold uppercase leading-none tracking-[0.1em] text-violet-700">
                            <Sparkles className="h-3.5 w-3.5" />
                            AI Included
                          </span>
                        ) : null}
                        <span className="inline-flex items-center rounded-full border border-[#e3b526]/35 bg-[#fff8db] px-3 py-1 text-[0.68rem] font-bold uppercase leading-none tracking-[0.1em] text-[#8a6b00]">
                          {isProfessional ? "Professional" : "Beginner"}
                        </span>
                      </div>
                    </div>

                    <h3 className="relative z-10 mt-2 min-h-[3.35rem] max-w-[78%] text-balance text-2xl font-extrabold leading-tight text-[#12345f]">
                      {skill.name}
                    </h3>
                    <p className="relative z-10 mt-4 min-h-[4.75rem] text-sm font-medium leading-6 text-slate-600">
                      {details.summary}
                    </p>

                    <div className="relative z-10 mt-5 flex flex-1 flex-col">
                      <ul className="space-y-3">
                        {details.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700"
                          >
                            <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#18a86b]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex justify-center pt-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#12345f] px-5 py-2.5 text-sm font-bold text-white transition-colors duration-300 group-hover:bg-[#d9b11e] group-hover:text-[#111827]">
                          Learn More
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
const assessmentSkills = [
  {
    key: "python",
    name: "Python",
    focus: "Logic, automation, backend foundations",
    logoSrc: "/images/courses/python.png",
    color: "#3776ab",
  },
  {
    key: "java",
    name: "Java",
    focus: "OOP, enterprise coding, application structure",
    logoSrc: "/images/courses/java.png",
    color: "#e11d48",
  },
  {
    key: "ai",
    name: "Artificial Intelligence",
    focus: "AI tools, workflows, prompt discipline",
    logoSrc: "/images/courses/ai.png",
    color: "#10b8d7",
  },
  {
    key: "sql",
    name: "SQL",
    focus: "Queries, joins, data problem solving",
    logoSrc: "/images/courses/sql.png",
    color: "#0f7fb8",
  },
  {
    key: "javascript",
    name: "JavaScript",
    focus: "Web logic, browser behavior, interactivity",
    logoSrc: "/images/courses/js.png",
    color: "#10a8a6",
  },
  {
    key: "react",
    name: "React / Next.js",
    focus: "Components, routing, production UI patterns",
    logo: ReactCourseIcon,
    color: "#f59f00",
  },
  {
    key: "ml",
    name: "Machine Learning",
    focus: "Models, datasets, evaluation thinking",
    logoSrc: "/images/courses/ml.png",
    color: "#16a34a",
  },
  {
    key: "dsa",
    name: "Data Structures",
    focus: "Problem solving, patterns, interview basics",
    logoSrc: "/images/courses/dsa.png",
    color: "#f97316",
  },
];

const assessmentGold = "#c9a227";
const assessmentGoldBright = "#ffc20a";

const assessmentPlans = {
  spark: {
    name: "Spark",
    title: "The Spark",
    stage: "Confident Starter Path",
    price: "Rs.50K + GST",
    threshold: "Best when your current confidence is already strong.",
    summary:
      "A lean pathway for students who can move faster and need focused project guidance, review, and completion proof.",
    ideal: ["Fast-track guidance", "Focused projects", "Completion proof"],
    icon: BookOpen,
    accent: assessmentGold,
    soft: "#fff7df",
    href: "/request-callback?service=Tinitiate%20Spark%20Recommendation",
  },
  prime: {
    name: "Prime",
    title: "The Prime",
    stage: "Momentum Path",
    price: "Rs.99K + GST",
    threshold: "Best when confidence is steady but project execution needs polish.",
    summary:
      "A stronger project pathway for students who can build with support and need mentor review, portfolio proof, and interview readiness.",
    ideal: ["Mentor review", "Portfolio shaping", "Rs.10K/month R&D"],
    icon: Target,
    accent: assessmentGold,
    soft: "#fff6d7",
    href: "/request-callback?service=Tinitiate%20Prime%20Recommendation",
  },
  apex: {
    name: "Apex",
    title: "The Apex",
    stage: "Ownership Path",
    price: "Rs.199K + GST",
    threshold: "Best when you need the highest support and structure.",
    summary:
      "A high-touch pathway for students who need deeper mentoring, stronger accountability, and work-style execution from the ground up.",
    ideal: ["Deep mentoring", "Job from day 1", "Rs.10K/month trainee pay"],
    icon: Trophy,
    accent: assessmentGold,
    soft: "#fff4d6",
    href: "/request-callback?service=Tinitiate%20Apex%20Recommendation",
  },
};

const ratingScale = Array.from({ length: 5 }, (_, index) => index + 1);

function getAssessmentPlanFromRatings(ratings) {
  const values = assessmentSkills
    .map((skill) => ratings[skill.key])
    .filter((value) => typeof value === "number");
  const average = values.length
    ? values.reduce((total, value) => total + value, 0) / values.length
    : 0;

  if (average < 2.6) return assessmentPlans.apex;
  if (average < 4) return assessmentPlans.prime;
  return assessmentPlans.spark;
}
function getSkillReadinessLabel(rating) {
  if (rating >= 5) return "Strong";
  if (rating >= 4) return "Ready";
  if (rating >= 3) return "Developing";
  if (rating >= 2) return "Guided";
  return "Start";
}

function AssessmentCourseLogo({ skill, className = "h-11 w-11" }) {
  if (skill.logoSrc) {
    return (
      <Image
        src={skill.logoSrc}
        alt={`${skill.name} logo`}
        width={64}
        height={64}
        className={`${className} object-contain`}
        sizes="48px"
      />
    );
  }

  const Logo = skill.logo;
  return Logo ? (
    <Logo className={className} idSuffix={`assessment-${skill.key}`} />
  ) : null;
}

function SkillRatingControl({ skill, rating, onChange }) {
  const activeRating = rating ?? 0;

  return (
    <div className="rounded-2xl border border-[#dbe5ef] bg-white p-3 shadow-[0_16px_36px_-34px_rgba(16,24,40,0.6)] transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_20px_55px_-42px_rgba(2,6,23,0.95)] sm:p-4">
      <div className="grid gap-4 xl:grid-cols-[minmax(205px,0.7fr)_minmax(0,1fr)] xl:items-center">
        <div className="flex items-start gap-3 sm:gap-4">
          <AssessmentCourseLogo
            skill={skill}
            className="h-12 w-12 shrink-0 sm:h-16 sm:w-16"
          />
          <div className="min-w-0">
            <h4 className="truncate text-sm font-black leading-5 text-[#13233a]">
              {skill.name}
            </h4>
            <p className="mt-0.5 text-xs font-medium leading-5 text-[#64748b]">
              {skill.focus}
            </p>
          </div>
        </div>

        <div className="flex min-w-0 overflow-hidden rounded-2xl border-2 border-[#ffc20a] bg-white shadow-[0_14px_34px_-30px_rgba(15,23,42,0.7)] transition-colors duration-300 dark:bg-slate-950 dark:shadow-[0_18px_42px_-34px_rgba(2,6,23,0.95)]">
          <div className="flex w-[62px] shrink-0 flex-col items-center justify-center bg-[#ffc20a] px-1.5 py-2 text-white sm:w-[76px] sm:px-2">
            <span className="text-lg font-black leading-none sm:text-xl">
              {activeRating.toFixed(1)}
            </span>
            <span className="mt-0.5 text-[9px] font-black uppercase leading-none sm:text-[11px]">
              Rating
            </span>
          </div>
          <div className="grid min-w-0 flex-1 grid-cols-5 items-center gap-0.5 px-1.5 py-1.5 sm:gap-1 sm:px-3">
          {ratingScale.map((value) => {
            const isFilled = value <= activeRating;

            return (
              <button
                key={value}
                type="button"
                onClick={() => onChange(skill.key, value)}
                aria-label={`Rate ${skill.name} ${value} out of 5`}
                aria-pressed={rating === value}
                className="flex h-8 min-w-0 items-center justify-center rounded-lg transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/30 sm:h-10"
              >
                <Star
                  className="h-5 w-5 min-[390px]:h-6 min-[390px]:w-6 sm:h-7 sm:w-7"
                  fill={isFilled ? assessmentGoldBright : "#e5e7eb"}
                  strokeWidth={1.4}
                  style={{
                    color: isFilled ? assessmentGoldBright : "#d5d9df",
                  }}
                />
              </button>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

function AssessmentGraphBar({ skill, rating, index }) {
  const safeRating =
    typeof rating === "number" ? Math.min(Math.max(rating, 1), 5) : 0;
  const width = `${safeRating * 20}%`;

  return (
    <div className="grid grid-cols-[96px_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[232px_minmax(0,1fr)] sm:gap-3">
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] items-center gap-3 text-right sm:grid-cols-[64px_minmax(0,1fr)]">
        <div className="hidden items-center justify-center sm:flex">
          <AssessmentCourseLogo skill={skill} className="h-14 w-14" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[10px] font-black uppercase leading-tight tracking-[0.08em] text-[#26364d] sm:text-sm">
            {skill.name}
          </p>
          <p className="hidden text-[11px] font-bold text-[#7b8da4] sm:block">
            {getSkillReadinessLabel(safeRating)}
          </p>
        </div>
      </div>
      <div className="relative h-8 overflow-hidden rounded-r-full bg-[#eef3f8] shadow-inner sm:h-11">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-r-full"
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{
            duration: 0.72,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            backgroundColor: skill.color,
          }}
        />
      </div>
    </div>
  );
}

function RecommendedPlanCard({ plan }) {
  const PlanIcon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 34 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[1.4rem] border border-[#d7e2ee] bg-white p-4 shadow-[0_26px_70px_-52px_rgba(15,23,42,0.85)] transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_30px_80px_-48px_rgba(2,6,23,0.95)] sm:p-6"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#c9a227]" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#697b91]">
              Recommended Plan
            </p>
            <h3 className="mt-2 text-2xl font-black leading-none text-[#13233a] sm:text-3xl">
              {plan.title}
            </h3>
            <p className="mt-2 text-sm font-black" style={{ color: plan.accent }}>
              {plan.stage}
            </p>
          </div>
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_16px_36px_-24px_rgba(15,23,42,0.8)]"
            style={{ backgroundColor: plan.accent }}
          >
            <PlanIcon className="h-6 w-6" />
          </span>
        </div>

        <div className="mt-5 rounded-2xl border border-[#e0e9f3] p-4 dark:border-slate-700 dark:bg-slate-950/55">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#697b91]">
            Pathway Fee
          </p>
          <p className="mt-1 text-xl font-black text-[#13233a] sm:text-2xl">
            {plan.price}
          </p>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#53657c]">
            {plan.threshold}
          </p>
        </div>

        <p className="mt-4 text-sm font-medium leading-6 text-[#53657c]">
          {plan.summary}
        </p>

        <div className="mt-4 grid gap-2">
          {plan.ideal.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-xl border border-[#e2ebf4] bg-[#f8fbff] px-3 py-2 text-xs font-black text-[#13233a] sm:text-sm"
            >
              <CheckCircle
                className="h-4 w-4 shrink-0"
                style={{ color: plan.accent }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <Link
          href={plan.href}
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
          style={{ backgroundColor: plan.accent }}
        >
          Discuss {plan.name}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function StudentPlanAssessment() {
  const [phase, setPhase] = useState("intro");
  const [ratings, setRatings] = useState({});
  const [result, setResult] = useState(null);

  const ratedSkills = assessmentSkills.filter(
    (skill) => typeof ratings[skill.key] === "number"
  );
  const hasRatedSkills = ratedSkills.length > 0;
  const resultSkills = result
    ? assessmentSkills.filter(
        (skill) => typeof result.ratings[skill.key] === "number"
      )
    : [];
  const updateRating = (skillKey, value) => {
    setRatings((current) => ({
      ...current,
      [skillKey]: value,
    }));
  };

  const startAssessment = () => {
    setPhase("rate");
  };

  const closeAssessment = () => {
    setPhase("intro");
  };

  const submitAssessment = (event) => {
    event.preventDefault();
    if (!hasRatedSkills) return;

    const finalRatings = Object.fromEntries(
      ratedSkills.map((skill) => [skill.key, ratings[skill.key]])
    );

    setResult({
      ratings: finalRatings,
      plan: getAssessmentPlanFromRatings(finalRatings),
    });
    setPhase("result");
  };

  const retakeAssessment = () => {
    setRatings(result?.ratings ?? {});
    setResult(null);
    setPhase("rate");
  };

  return (
    <section className="bg-white px-3 py-8 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-12 md:px-10">
      <motion.div
        layout
        transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
        className={`mx-auto max-w-[1360px] overflow-hidden rounded-[1.35rem] border shadow-[0_30px_90px_-70px_rgba(15,23,42,0.9)] transition-colors duration-300 sm:rounded-[1.75rem] ${
          phase === "intro"
            ? "border-[#c9a227] bg-[#c9a227] dark:border-[#c9a227]/70 dark:bg-[linear-gradient(135deg,#0f172a_0%,#13233a_58%,#0b1220_100%)]"
            : "border-[#d8e3ee] bg-[#fbfdff] dark:border-slate-700 dark:bg-slate-900"
        }`}
      >
        <AnimatePresence mode="wait">
          {phase === "intro" ? (
            <motion.div
              key="assessment-intro"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="relative px-5 py-7 sm:min-h-[300px] sm:px-8 sm:py-8 lg:px-12"
            >
              <div className="relative z-10 grid min-h-0 items-center gap-7 sm:min-h-[240px] lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-8">
                <div className="max-w-3xl text-center lg:text-left">
                  <h2 className="text-balance text-[2rem] font-black leading-[1.08] text-[#13233a] min-[390px]:text-[2.2rem] sm:text-4xl sm:leading-tight lg:text-[2.8rem]">
                    Find the right plan before choosing your training path.
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm font-semibold leading-6 text-[#26364d] min-[390px]:text-[15px] sm:text-lg sm:leading-7 lg:mx-0">
                    Rate your current confidence across core courses. The result
                    turns your selections into a clear skill graph and recommends
                    Apex, Prime, or Spark.
                  </p>
                </div>

                <div className="relative flex min-h-[190px] items-center justify-center sm:min-h-[230px] lg:justify-end">
                  <motion.div
                    aria-hidden="true"
                    className="absolute h-36 w-36 rounded-full bg-white/25 blur-3xl sm:h-44 sm:w-44"
                    animate={{
                      opacity: [0.35, 0.75, 0.35],
                      scale: [0.88, 1.08, 0.88],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    aria-hidden="true"
                    className="absolute h-28 w-28 rounded-full border border-[#13233a]/20 dark:border-[#c9a227]/25 sm:h-32 sm:w-32"
                    animate={{ rotate: 360, scale: [1, 1.08, 1] }}
                    transition={{
                      rotate: {
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />
                  <motion.div
                    aria-hidden="true"
                    className="absolute h-40 w-40 rounded-full border border-white/35 sm:h-48 sm:w-48"
                    animate={{ scale: [0.82, 1.18], opacity: [0.5, 0] }}
                    transition={{
                      duration: 2.1,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />

                  <div className="relative z-10 w-full max-w-full sm:max-w-[430px]">
                    <motion.p
                      className="mx-auto mb-4 w-fit rounded-full bg-[#13233a] px-4 py-2 text-[10px] font-black uppercase leading-none tracking-[0.16em] text-white shadow-[0_16px_34px_-24px_rgba(15,23,42,0.95)] dark:bg-[#c9a227] dark:text-[#0b1220] sm:text-xs sm:tracking-[0.18em]"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      Start Here
                    </motion.p>
                    <div className="relative">
                    <motion.div
                      aria-hidden="true"
                      className="absolute -inset-3 rounded-[1.55rem] bg-white/22"
                      animate={{
                        opacity: [0.28, 0.72, 0.28],
                        scale: [0.96, 1.06, 0.96],
                      }}
                      transition={{
                        duration: 2.05,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.button
                      type="button"
                      onClick={startAssessment}
                      animate={{
                        boxShadow: [
                          "0 20px 42px -24px rgba(15,23,42,0.95), 0 0 0 0 rgba(255,255,255,0)",
                          "0 30px 62px -22px rgba(15,23,42,1), 0 0 0 12px rgba(255,255,255,0.22)",
                          "0 20px 42px -24px rgba(15,23,42,0.95), 0 0 0 0 rgba(255,255,255,0)",
                        ],
                        y: [0, -2, 0],
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.035,
                        backgroundColor: "#203958",
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        boxShadow: {
                          duration: 2.35,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        y: {
                          duration: 2.35,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        default: { duration: 0.22 },
                      }}
                      className="group relative isolate inline-flex min-h-14 w-full overflow-hidden rounded-2xl border border-[#081629]/30 bg-[#13233a] px-4 py-3 text-sm font-black text-white sm:min-h-16 sm:px-7 sm:py-4 sm:text-[15px]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.24),transparent_34%)]"
                      />
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/28 blur-[1px]"
                        animate={{ x: ["0%", "360%"] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          repeatDelay: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                      <span className="relative z-10 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap sm:gap-3">
                        <span className="sm:hidden">Take Skill Check</span>
                        <span className="hidden sm:inline">Take Skill Check & Find My Plan</span>
                        <motion.span
                          aria-hidden="true"
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#13233a] dark:!bg-white dark:!text-[#13233a] sm:h-8 sm:w-8"
                          animate={{ x: [0, 7, 0] }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </span>
                    </motion.button>
                    <div
                      aria-hidden="true"
                      className="mx-auto mt-5 h-1.5 w-[78%] overflow-hidden rounded-full bg-[#8f721b]/30"
                    >
                      <motion.div
                        className="h-full w-1/3 rounded-full bg-[#13233a]"
                        animate={{ x: ["-110%", "330%"] }}
                        transition={{
                          duration: 1.75,
                          repeat: Infinity,
                          repeatDelay: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}

          {phase === "rate" ? (
            <motion.form
              key="assessment-rate"
              onSubmit={submitAssessment}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="px-4 py-5 sm:px-7 sm:py-6 lg:px-9"
            >
              <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl pr-14 lg:pr-0">
                  <h2 className="text-balance text-2xl font-black leading-tight text-[#13233a] sm:text-3xl">
                    Select your level for the courses you know.
                  </h2>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#64748b]">
                    Rate one course or many. The recommendation uses only your
                    selected courses, so the plan stays matched to your current
                    confidence.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeAssessment}
                  className="absolute right-0 top-0 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d8e3ee] bg-white text-[#13233a] transition hover:bg-[#f3f7fb] dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-slate-800 lg:static"
                  aria-label="Close assessment"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:mt-6 lg:grid-cols-2">
                {assessmentSkills.map((skill) => (
                  <SkillRatingControl
                    key={skill.key}
                    skill={skill}
                    rating={ratings[skill.key]}
                    onChange={updateRating}
                  />
                ))}
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  disabled={!hasRatedSkills}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#13233a] px-5 py-3 text-sm font-black text-white transition enabled:hover:-translate-y-0.5 enabled:hover:bg-[#203958] disabled:cursor-not-allowed disabled:bg-[#d8c895] disabled:text-white/80 sm:w-auto"
                >
                  Show My Recommended Plan
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.form>
          ) : null}

          {phase === "result" && result ? (
            <motion.div
              key="assessment-result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="px-4 py-5 sm:px-7 sm:py-6 lg:px-9"
            >
              <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-balance text-2xl font-black leading-tight text-[#13233a] sm:text-3xl">
                    Ratings moved into a plan-ready graph.
                  </h2>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={retakeAssessment}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#d8e3ee] bg-white px-4 py-2 text-sm font-black text-[#13233a] transition hover:bg-[#f3f7fb] dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-slate-800"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Retake
                  </button>
                  <button
                    type="button"
                    onClick={closeAssessment}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8e3ee] bg-white text-[#13233a] transition hover:bg-[#f3f7fb] dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-slate-800"
                    aria-label="Close assessment result"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_390px]">
                <motion.div
                  initial={{ opacity: 0, x: -34 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.4rem] border border-[#d7e2ee] bg-white p-4 shadow-[0_26px_70px_-54px_rgba(15,23,42,0.8)] transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_30px_80px_-50px_rgba(2,6,23,0.95)] sm:p-6"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black text-[#13233a]">
                        Course Star Map
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#64748b]">
                        Only the courses you rated are included in this graph.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {resultSkills.map((skill, index) => (
                      <AssessmentGraphBar
                        key={skill.key}
                        skill={skill}
                        rating={result.ratings[skill.key]}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>

                <RecommendedPlanCard plan={result.plan} />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
      <PricingCardsShowcase compact />
    </section>
  );
}

function CorporateLearningEnvironment() {
  const environmentPoints = [
    {
      title: "Real Project Execution",
      text: "Build assignments with defined scope, checkpoints, and mentor-led delivery standards.",
      proof: "Hands-on builds",
      icon: ClipboardCheck,
    },
    {
      title: "Team Workflow Practice",
      text: "Use Git, task ownership, documentation, reviews, and release habits followed by teams.",
      proof: "Delivery routine",
      icon: Code2,
    },
    {
      title: "Mentor Review Loops",
      text: "Get practical feedback on code quality, communication, problem solving, and readiness.",
      proof: "Expert feedback",
      icon: Users,
    },
    {
      title: "Portfolio-Ready Demos",
      text: "Convert completed work into demos, resume evidence, and confident interview explanations.",
      proof: "Career proof",
      icon: FileText,
    },
  ];

  return (
    <section className="bg-white px-4 py-8 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-12 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-balance text-[1.9rem] font-extrabold leading-tight text-[#12345f] min-[390px]:text-3xl sm:text-4xl lg:whitespace-nowrap lg:text-5xl">
            Learn in a Real Work-Style Environment
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-sm font-medium leading-6 text-[#53677d] sm:text-lg sm:leading-7">
            Training is designed around real execution: structured projects,
            mentor review, professional tools, and confident presentation of
            completed work.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {environmentPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group min-w-0 rounded-[1rem] border border-[#d8e2ee] bg-white p-4 shadow-[0_18px_48px_-42px_rgba(15,23,42,0.7)] transition duration-300 hover:-translate-y-1 hover:border-[#c9a227]/70 hover:shadow-[0_24px_56px_-42px_rgba(15,23,42,0.85)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_22px_60px_-46px_rgba(2,6,23,0.95)] sm:min-h-[165px] sm:rounded-[1.2rem]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#12345f] text-white sm:h-10 sm:w-10">
                  <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                </div>
                <h3 className="mt-2 text-[13px] font-extrabold leading-tight text-[#12345f] sm:mt-3 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[11px] leading-4 text-[#53677d] sm:mt-2 sm:text-[13px] sm:leading-5">
                  {item.text}
                </p>
                <div className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#f6f9fc] px-2.5 py-1.5 text-[10px] font-extrabold text-[#12345f] sm:mt-3 sm:gap-2 sm:px-3 sm:text-[11px]">
                  <CheckCircle className="h-3.5 w-3.5 text-[#0f8f70] sm:h-4 sm:w-4" />
                  {item.proof}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeadershipVisionMessage() {
  const ceoPrinciples = [
    {
      title: "Execution",
      text: "Every concept is tied to a task, checkpoint, and outcome.",
      icon: Briefcase,
    },
    {
      title: "Clarity",
      text: "Learners practice explaining decisions with professional confidence.",
      icon: Users,
    },
    {
      title: "Evidence",
      text: "Finished work becomes proof for interviews, reviews, and portfolios.",
      icon: LineChart,
    },
  ];

  return (
    <section className="overflow-hidden bg-white px-4 py-9 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-11 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-[#12345f] sm:text-4xl lg:text-5xl">
            Message From Our CEO
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
        </div>

        <div className="mt-9 grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="order-1">
            <div className="mx-auto max-w-[760px] overflow-hidden rounded-[1.6rem] border border-[#d8e2ee] bg-white shadow-[0_28px_86px_-62px_rgba(15,23,42,0.9)] transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_32px_90px_-48px_rgba(2,6,23,0.98)] lg:mx-0">
              <div className="flex items-center justify-between border-b border-[#d8e2ee] bg-[#f8fbff] px-4 py-3 dark:border-slate-700 dark:bg-slate-950/70">
                <div>
                  <p className="mt-1 text-sm font-extrabold text-[#12345f]">
                    STEM or Non-STEM career options
                  </p>
                </div>
                <span className="hidden rounded-xl border border-[#d8e2ee] bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#53677d] dark:border-slate-700 dark:bg-slate-900 sm:inline-flex">
                  5:54 Guide
                </span>
              </div>

              <video
                className="aspect-video h-auto w-full bg-[#071425] object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/videos/tinitiate-ai-career-options-poster.jpg"
              >
                <source
                  src="/videos/tinitiate-ai-career-options.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="order-2">
            <div className="border-l-4 border-[#c9a227] pl-5">
              <Quote className="mb-3 h-8 w-8 text-[#c9a227]" />
              <p className="text-pretty text-2xl font-black leading-tight text-[#12345f] sm:text-[2rem] lg:text-[2.15rem]">
                Training should help learners think, communicate, and deliver
                like professionals.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#53677d] sm:text-lg">
                Tinitiate AI is built around practical depth, review habits,
                and the confidence to explain completed work. The goal is not a
                certificate alone; it is the ability to show evidence, discuss
                decisions, and handle real project expectations.
              </p>
            </div>

            <div className="mt-5 grid overflow-hidden rounded-[1.15rem] border border-[#d8e2ee] bg-[#fbfcff] shadow-[0_18px_50px_-46px_rgba(15,23,42,0.8)] transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_24px_70px_-52px_rgba(2,6,23,0.95)] md:grid-cols-3">
              {ceoPrinciples.map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 border-b border-[#d8e2ee] p-4 last:border-b-0 dark:border-slate-700 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#12345f] text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-[#12345f]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-5 text-[#53677d]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const careerPlanCourses = [
  "Python Full Stack",
  "Java Full Stack",
  "AI and Machine Learning",
  "SQL and Data Engineering",
  "React / Next.js",
  "Cloud and DevOps",
  "Not Sure Yet",
];

const careerPlanTimes = [
  "Morning: 9am - 12pm",
  "Afternoon: 12pm - 4pm",
  "Evening: 4pm - 8pm",
  "Weekend",
];

function CareerPathPlanSection() {
  const guideFormRef = useRef(null);
  const guideSubmitLockRef = useRef(false);
  const [guideFormData, setGuideFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    preferredTime: "",
  });
  const [guideSubmitted, setGuideSubmitted] = useState(false);
  const [guideSubmitting, setGuideSubmitting] = useState(false);
  const [guideSubmitError, setGuideSubmitError] = useState("");

  const handleGuideChange = (event) => {
    const { name, value } = event.target;
    setGuideFormData((current) => ({ ...current, [name]: value }));
  };

  const submitGuideForm = async (formElement) => {
    if (!formElement || guideSubmitLockRef.current) return;
    if (typeof formElement.reportValidity === "function" && !formElement.reportValidity()) {
      return;
    }

    guideSubmitLockRef.current = true;
    setGuideSubmitting(true);
    setGuideSubmitError("");

    try {
      await submitContactForm(formElement);
      setGuideSubmitted(true);
      setGuideSubmitting(false);
      setGuideFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        preferredTime: "",
      });
    } catch (error) {
      console.error(error);
      setGuideSubmitError(error.message || "Something went wrong. Please try again.");
      setGuideSubmitting(false);
    } finally {
      guideSubmitLockRef.current = false;
    }
  };

  const handleGuideSubmit = async (event) => {
    event.preventDefault();
    await submitGuideForm(event.currentTarget);
  };

  useEffect(() => {
    const formElement = guideFormRef.current;
    if (!formElement) return undefined;

    const handleNativeSubmit = (event) => {
      if (event.defaultPrevented) return;
      event.preventDefault();
      submitGuideForm(formElement);
    };

    formElement.addEventListener("submit", handleNativeSubmit);
    return () => {
      formElement.removeEventListener("submit", handleNativeSubmit);
    };
  }, []);

  const guideMessage = `Course guidance request. Course interest: ${
    guideFormData.course || "Not selected"
  }. Preferred time: ${guideFormData.preferredTime || "Not selected"}.`;

  return (
    <section className="overflow-hidden bg-[#f7fafc] px-4 py-10 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-12 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-[#12345f] sm:text-4xl lg:text-5xl">
            Unlock your IT career path
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base font-medium leading-7 text-[#53677d] sm:text-lg">
            Get a mentor-reviewed plan that connects your course choice,
            project sequence, pricing discussion, and placement preparation into
            one clear next step.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative mx-auto w-full max-w-[760px]">
            <div className="absolute inset-x-8 -top-4 h-8 rounded-t-[1.5rem] bg-[#c9a227]" />
            <div className="relative overflow-hidden rounded-[1.65rem] border border-[#d8e4f1] bg-white p-5 shadow-[0_30px_90px_-48px_rgba(15,23,42,0.6)] transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_36px_95px_-52px_rgba(2,6,23,0.98)] sm:p-7 lg:p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#12345f_0%,#c9a227_48%,#0f8f70_100%)]" />
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf4ff] text-[#12345f] dark:bg-slate-950 dark:text-[#f2cf5b]">
                <UserCircle2 className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-2xl font-black leading-tight text-[#12345f]">
                  Talk to a course mentor
                </h3>
                <p className="mt-1 text-sm font-medium text-[#64748b]">
                  Share your details and we will help you choose the right path.
                </p>
              </div>
            </div>

            {guideSubmitted ? (
              <div className="mt-7 rounded-[1.35rem] border border-[#c8ead9] bg-[#f0fff6] p-6 text-center dark:border-emerald-400/25 dark:bg-emerald-950/25">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0f8f70] text-white">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h4 className="mt-4 text-xl font-black text-[#12345f]">
                  Guidance request received.
                </h4>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#53677d]">
                  Our team will review your course interest and contact you with
                  the next clear step.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setGuideSubmitted(false);
                    setGuideSubmitError("");
                  }}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border border-[#12345f]/15 bg-white px-5 py-2 text-sm font-black text-[#12345f] dark:border-slate-700 dark:bg-slate-950"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                ref={guideFormRef}
                name="request-callback"
                method="POST"
                action="/api/contact"
                onSubmit={handleGuideSubmit}
                className="mt-7 space-y-4 lg:space-y-5"
              >
                <input type="hidden" name="form-name" value="request-callback" readOnly />
                <input type="hidden" name="originalFormName" value="mentor-guidance" readOnly />
                <input type="hidden" name="source" value="Home mentor guidance" readOnly />
                <input type="hidden" name="message" value={guideMessage} readOnly />

                <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#53677d]">
                      Full Name
                    </span>
                    <span className="relative block">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9aa8ba]" />
                      <input
                        name="name"
                        type="text"
                        required
                        value={guideFormData.name}
                        onChange={handleGuideChange}
                        placeholder="Your name"
                        className="h-12 w-full rounded-2xl border border-[#d9e3ef] bg-white pl-12 pr-4 text-sm font-semibold text-[#13233a] outline-none transition focus:border-[#c9a227] focus:ring-4 focus:ring-[#c9a227]/15 dark:border-slate-700 dark:bg-slate-950 dark:placeholder:text-slate-500"
                      />
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#53677d]">
                      Email
                    </span>
                    <span className="relative block">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9aa8ba]" />
                      <input
                        name="email"
                        type="email"
                        value={guideFormData.email}
                        onChange={handleGuideChange}
                        placeholder="Optional"
                        className="h-12 w-full rounded-2xl border border-[#d9e3ef] bg-white pl-12 pr-4 text-sm font-semibold text-[#13233a] outline-none transition focus:border-[#c9a227] focus:ring-4 focus:ring-[#c9a227]/15 dark:border-slate-700 dark:bg-slate-950 dark:placeholder:text-slate-500"
                      />
                    </span>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#53677d]">
                    Course Interest
                  </span>
                  <select
                    name="course"
                    required
                    value={guideFormData.course}
                    onChange={handleGuideChange}
                    className="h-12 w-full rounded-2xl border border-[#d9e3ef] bg-white px-4 text-sm font-semibold text-[#13233a] outline-none transition focus:border-[#c9a227] focus:ring-4 focus:ring-[#c9a227]/15 dark:border-slate-700 dark:bg-slate-950"
                  >
                    <option value="">Select a course</option>
                    {careerPlanCourses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_220px] lg:gap-5">
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#53677d]">
                      WhatsApp Number
                    </span>
                    <span className="relative block">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9aa8ba]" />
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={guideFormData.phone}
                        onChange={handleGuideChange}
                        placeholder="+91 6309123485"
                        className="h-12 w-full rounded-2xl border border-[#d9e3ef] bg-white pl-12 pr-4 text-sm font-semibold text-[#13233a] outline-none transition focus:border-[#c9a227] focus:ring-4 focus:ring-[#c9a227]/15 dark:border-slate-700 dark:bg-slate-950 dark:placeholder:text-slate-500"
                      />
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#53677d]">
                      Best Time
                    </span>
                    <span className="relative block">
                      <Clock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9aa8ba]" />
                      <select
                        name="preferredTime"
                        required
                        value={guideFormData.preferredTime}
                        onChange={handleGuideChange}
                        className="h-12 w-full rounded-2xl border border-[#d9e3ef] bg-white pl-12 pr-3 text-sm font-semibold text-[#13233a] outline-none transition focus:border-[#c9a227] focus:ring-4 focus:ring-[#c9a227]/15 dark:border-slate-700 dark:bg-slate-950"
                      >
                        <option value="">Time</option>
                        {careerPlanTimes.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </span>
                  </label>
                </div>

                {guideSubmitError ? (
                  <p className="text-center text-sm font-bold text-red-600">
                    {guideSubmitError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    submitGuideForm(guideFormRef.current);
                  }}
                  disabled={guideSubmitting}
                  className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-2xl bg-[#12345f] px-5 py-4 text-sm font-black text-white shadow-[0_18px_42px_-28px_rgba(18,52,95,0.9)] transition enabled:hover:-translate-y-0.5 enabled:hover:bg-[#1c4778] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {guideSubmitting ? "Sending..." : "Request Mentor Guidance"}
                  <Send className="h-4 w-4 transition group-enabled:group-hover:translate-x-1" />
                </button>

                <div className="flex items-start gap-2 rounded-2xl bg-[#f7fafc] px-4 py-3 pr-16 text-xs font-semibold leading-5 text-[#53677d] dark:bg-slate-950/70 sm:pr-4">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0f8f70]" />
                  We use your details only to guide the course conversation.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

const whyChooseCards = [
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Learn from mentors with real delivery experience, not just classroom theory.",
    href: "/request-callback?service=Expert%20Faculty",
    tone: "from-[#0e2a50] to-[#174777]",
    iconTone: "bg-[#e8f1ff] text-[#123d6d]",
  },
  {
    icon: LineChart,
    title: "Structured Path",
    description:
      "Move from fundamentals to advanced work through a clear, role-mapped plan.",
    href: "/training",
    tone: "from-[#183a6d] to-[#1f6f8b]",
    iconTone: "bg-[#e7f8fb] text-[#176a82]",
  },
  {
    icon: Factory,
    title: "Business Domain Training",
    description:
      "Understand how technology is used in banking, healthcare, logistics, and more.",
    href: "/training/professional-training",
    tone: "from-[#173b57] to-[#2f5d62]",
    iconTone: "bg-[#eaf7f0] text-[#27624a]",
  },
  {
    icon: Sparkles,
    title: "Bonus Technologies",
    description:
      "Get exposure to adjacent tools that make your profile stronger in interviews.",
    href: "/training/professional-training",
    tone: "from-[#3a2f64] to-[#7750a6]",
    iconTone: "bg-[#f2edff] text-[#604196]",
  },
  {
    icon: Code2,
    title: "Development Services",
    description:
      "Custom web, Android, API, IoT, and backend solutions shaped for business needs.",
    href: "/remote-consulting",
    tone: "from-[#102a43] to-[#315b7c]",
    iconTone: "bg-[#e8f3ff] text-[#245272]",
  },
  {
    icon: DatabaseZap,
    title: "Data & Cloud Support",
    description:
      "Practical help with AWS, Azure, data engineering, deployment, and testing workflows.",
    href: "/remote-consulting/enterprise",
    tone: "from-[#243b53] to-[#486581]",
    iconTone: "bg-[#edf4fb] text-[#334e68]",
  },
  {
    icon: Briefcase,
    title: "IT Career Guidance",
    description:
      "Personalized guidance from industry experts to align your goals with real-world roles in IT.",
    href: "/request-callback?service=IT%20Career%20Guidance",
    tone: "from-[#123d6d] to-[#2266a5]",
    iconTone: "bg-[#e6f0ff] text-[#1b4f86]",
  },
  {
    icon: BookOpen,
    title: "Basics to Advanced Learning",
    description:
      "Step-by-step learning paths from foundational concepts to advanced tech stacks and real use cases.",
    href: "/training/beginner-training",
    tone: "from-[#194569] to-[#5f7a61]",
    iconTone: "bg-[#eef7ed] text-[#486a39]",
  },
  {
    icon: CheckCircle,
    title: "Hands-On Coding Exercises",
    description:
      "Daily challenges and practice labs to build strong coding logic and practical development skills.",
    href: "/work-experience-program",
    tone: "from-[#0f3d3e] to-[#27746f]",
    iconTone: "bg-[#e6faf7] text-[#1e6861]",
  },
  {
    icon: FileText,
    title: "Live Projects",
    description:
      "Build real-world applications with mentorship support to strengthen your portfolio and confidence.",
    href: "/work-experience-program",
    tone: "from-[#563f1b] to-[#b68422]",
    iconTone: "bg-[#fff5d7] text-[#846114]",
  },
  {
    icon: UserCircle2,
    title: "Resume Preparation",
    description:
      "Get help crafting a standout, recruiter-friendly resume tailored for your desired job roles.",
    href: "/request-callback?service=Resume%20Preparation",
    tone: "from-[#29335c] to-[#4a5d93]",
    iconTone: "bg-[#eef1ff] text-[#354981]",
  },
  {
    icon: ClipboardCheck,
    title: "Interview Preparation",
    description:
      "Mock interviews, HR tips, and technical assessments to boost your readiness and confidence.",
    href: "/request-callback?service=Interview%20Preparation",
    tone: "from-[#2b3440] to-[#556575]",
    iconTone: "bg-[#eef2f5] text-[#415263]",
  },
];

const careerSupport = whyChooseCards;

/* ─── Main Page ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event) => {
    event?.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      await submitContactForm(event.currentTarget);

      setSubmitted(true);
      setSubmitting(false);
      setTimeout(() => {
        setShowModal(false);
        setSubmitted(false);
        setSubmitError("");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 2500);
    } catch (error) {
      console.error(error);
      setSubmitError(error.message || "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-gray-800 transition-colors duration-300 dark:bg-slate-950">
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowModal(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl transition-colors duration-300 dark:bg-slate-950"
            >
              <div className="bg-gradient-to-r from-[#1a3c6e] to-[#0e2a50] px-6 py-5 sm:px-8 sm:py-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute right-5 top-4 text-2xl font-light leading-none text-white/70 hover:text-white"
                >
                  ×
                </button>
                <h3 className="text-white text-xl font-bold">
                  Request a Call Back
                </h3>
                <p className="text-blue-200 text-sm mt-1">
                  Our expert will reach out within 24 hours
                </p>
              </div>
              <div className="px-6 py-6 dark:bg-slate-950 sm:px-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-emerald-950/80">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-100">
                      Request Received!
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-slate-300">
                      We&apos;ll be in touch shortly. Thank you for reaching
                      out.
                    </p>
                  </div>
                ) : (
                  <form
                    name="request-callback"
                    method="POST"
                    action="/api/contact"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="request-callback" readOnly />
                    <input type="hidden" name="source" value="Homepage callback modal" readOnly />
                    <input type="hidden" name="topicType" value="" readOnly />
                    <input type="hidden" name="course" value="" readOnly />
                    <input type="hidden" name="preferredTime" value="" readOnly />
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-300">
                        Full Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, name: e.target.value }))
                        }
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-300">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, email: e.target.value }))
                        }
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-300">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91 6309123485"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, phone: e.target.value }))
                        }
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-300">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us what you're looking for..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        rows={3}
                        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 bg-gradient-to-r from-[#c9a227] to-[#e8bc30] text-[#1a1a00] font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-sm disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Request My Call Back →"}
                    </button>
                    {submitError ? (
                      <p className="text-center text-xs font-medium text-red-600">
                        {submitError}
                      </p>
                    ) : null}
                    <p className="text-center text-xs text-gray-400 dark:text-slate-500">
                      No spam, ever. We respect your privacy.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollReveal>
        <HomeHeroSlider />
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-[#f7fafc] px-4 py-7 transition-colors duration-300 dark:bg-slate-950 sm:px-6 md:px-10">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-[#12345f] sm:text-4xl lg:text-5xl">
                About Tinitiate
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
            </div>

            <div className="mt-5 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_470px] lg:gap-16 lg:px-20">
              <div className="mx-auto max-w-[58rem] text-center lg:mx-0 lg:text-left">
                <p className="mx-auto max-w-[34rem] text-pretty text-sm font-medium leading-7 text-[#5b667a] sm:text-base lg:mx-0">
                  Practical IT training, project mentoring, and technology
                  consulting for learners, professionals, and growing teams.
                </p>
                <p className="mt-4 text-pretty text-sm leading-7 text-[#53677d] sm:text-base sm:leading-8">
                  <strong className="text-gray-900">
                    Tinitiate AI Solutions
                  </strong>{" "}
                  is a leading training company,
                  dedicated to empowering businesses with cutting-edge
                  technology solutions and high-quality professional training.
                  Our vision is to bridge the gap between industry demands and
                  individual potential helping learners and enterprises grow
                  together. With a highly experienced team carrying years of
                  deep expertise in IT services, database management, and cloud
                  computing, we craft tailored solutions that meet the evolving
                  demands of enterprises worldwide from ambitious startups to
                  established global corporations. Every engagement is backed by
                  real-world experience and a passion for measurable outcomes.
                  Our commitment goes beyond training. We partner with our
                  learners through every step of their journey delivering
                  real-world skills, actionable insights, and the career
                  momentum needed to thrive in today's rapidly changing digital
                  landscape. With Tinitiate AI Solutions, your next career
                  breakthrough starts here.
                </p>
              </div>
              <div className="flex justify-center lg:justify-self-end lg:-translate-y-2 lg:translate-x-4">
                <div className="flex w-full max-w-[470px] flex-col justify-center rounded-[1.35rem] bg-[linear-gradient(135deg,#12345f_0%,#0d2747_100%)] p-5 text-white shadow-[0_22px_58px_rgba(18,52,95,0.22)] sm:rounded-[1.75rem] sm:p-7">
                  <div className="mb-4 text-center">
                    <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                      <span className="h-2 w-2 rounded-full bg-[#24b47e]" />
                      Available Now
                    </div>
                    <h3 className="text-2xl font-extrabold sm:text-3xl">
                      Talk to an Expert
                    </h3>
                    <p className="mx-auto mt-3 max-w-[28rem] text-sm leading-7 text-blue-100/90 sm:text-base">
                      Get clear guidance on the right course, batch, and next
                      step for your career goal.
                    </p>
                  </div>
                  <ul className="mx-auto mb-5 w-full max-w-[28rem] space-y-3 text-left">
                    {[
                      "Free 1-on-1 career guidance",
                      "Course roadmap matched to your goal",
                      "Project and portfolio direction",
                      "Flexible batch timing support",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm leading-6 text-blue-50/95 sm:text-base"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/12">
                          <CheckCircle className="h-4 w-4 text-[#7ee0b2]" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/request-callback"
                    className="touch-target mx-auto flex w-fit max-w-full items-center justify-center rounded-full bg-[#e4b72e] px-8 py-3.5 text-center text-sm font-extrabold text-[#171100] transition hover:bg-[#f0c542]"
                  >
                    Request a Call Back
                  </Link>
                  <p className="mt-3 text-center text-sm text-blue-100/80">
                    Our team responds within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <CourseSlider />
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative overflow-hidden bg-[#f7fafc] px-4 py-8 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-12 md:px-10 lg:px-14">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/60 to-transparent" />
          <div className="mx-auto max-w-[1400px]">
            <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-9">
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-[#12345f] sm:text-4xl lg:text-5xl">
                Why Choose Us
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {whyChooseCards.map(
                ({ icon: Icon, title, description, tone, iconTone }) => (
                  <div
                    key={title}
                    className="group relative flex min-h-[150px] overflow-hidden rounded-[1.15rem] border border-[#d8e2ee] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1 hover:border-[#c9a227]/70 hover:shadow-[0_24px_60px_-32px_rgba(15,23,42,0.65)] dark:border-slate-700/80 dark:bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] dark:shadow-[0_24px_65px_-44px_rgba(2,6,23,0.98)] sm:min-h-[190px] sm:rounded-2xl sm:p-5 xl:min-h-[245px]"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${tone}`} />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${iconTone} shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75)] sm:mb-4 sm:h-11 sm:w-11 sm:rounded-2xl`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="max-w-[14rem] text-balance text-base font-extrabold leading-tight text-[#12345f] sm:text-[1.05rem]">
                        {title}
                      </h3>
                      <p className="mt-2 text-pretty text-[12px] leading-5 text-[#53677d] sm:mt-3 sm:text-[13px] sm:leading-6">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="hidden overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-10 text-center lg:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] mb-4">
                Why Choose Us
              </span>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <h2 className="text-balance text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Where Real Expertise Meets Your Ambition
                </h2>
                <p className="max-w-xs text-pretty text-sm leading-7 text-gray-500 dark:text-slate-300 lg:text-right lg:shrink-0">
                  Not just a training institute a launchpad engineered for
                  career breakthroughs.
                </p>
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-[#c9a227] via-gray-200 to-transparent" />
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-3xl">
                <div className="relative">
                  <div className="absolute left-0 top-0 h-full w-1.5 rounded-full bg-[#c9a227]" />
                  <p className="max-w-[34rem] pl-5 pr-1 text-balance text-base font-bold leading-relaxed tracking-normal text-gray-900 sm:pl-6 sm:text-lg lg:text-xl">
                    With{" "}
                    <span className="text-[#0e2a50]">
                      15+ years of hands-on IT experience
                    </span>
                    , our training isn't just theory it's real-time knowledge
                    paired with live projects, bonus technologies, and business
                    domain immersion.
                  </p>
                </div>
                <div className="mt-10 space-y-8 sm:mt-14 sm:space-y-10">
                  {[
                    {
                      label: "Expert Faculty",
                      detail:
                        "Deep industry background, not just classroom instructors — our mentors have shipped real products.",
                    },
                    {
                      label: "Structured Path",
                      detail:
                        "From fundamentals to advanced architecture, every step is deliberate and career-mapped.",
                    },
                    {
                      label: "Business Domain Training",
                      detail:
                        "Go beyond code. Understand the industry you'll work in — banking, logistics, healthcare, and more.",
                    },
                    {
                      label: "Bonus Technologies",
                      detail:
                        "We don't stop at the syllabus. Get exposure to adjacent tools that give you an edge in interviews.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="group flex gap-4 sm:gap-5">
                      <div className="shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-[#0e2a50]/5 border border-[#0e2a50]/10 flex items-center justify-center group-hover:bg-[#c9a227] group-hover:border-[#c9a227] transition-all duration-300">
                          <svg
                            className="w-4 h-4 text-[#0e2a50] group-hover:text-white transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="max-w-[34rem]">
                        <p className="text-base font-bold text-gray-900">
                          {item.label}
                        </p>
                        <p className="mt-1 text-pretty text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-[#0e2a50] p-6 text-white sm:p-8 lg:max-w-none lg:p-10">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
                <div className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-[#c9a227]/10" />
                <div className="relative z-10">
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#c9a227] mb-4">
                    Development Services
                  </span>
                  <h3 className="mb-4 max-w-[16ch] text-balance text-[2rem] font-black leading-[1.05] sm:text-[2.4rem]">
                    Full-Spectrum Tech Solutions
                  </h3>
                  <p className="mb-10 max-w-[34rem] text-pretty text-sm leading-7 text-blue-100/85 sm:text-[15px]">
                    From scalable backend systems to robust data pipelines and
                    mobile apps, Tinitiate AI Solutions offers development
                    services tailored to modern business needs.
                  </p>
                  <div className="space-y-5">
                    {[
                      "Custom application development (Android, Web)",
                      "Data engineering using AWS & Azure",
                      "API integrations and backend systems",
                      "IoT backend and message queue handling",
                      "Comprehensive testing & deployment support",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="shrink-0 w-5 h-5 rounded-full border border-[#c9a227]/50 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#c9a227]" />
                        </div>
                        <span className="max-w-[30ch] text-pretty text-sm leading-7 text-blue-100/92 sm:max-w-none sm:text-[15px]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="hidden relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-black opacity-10 dark:text-slate-400"
            viewBox="0 0 1440 600"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <line
              x1="100"
              y1="100"
              x2="400"
              y2="250"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <line
              x1="400"
              y1="250"
              x2="700"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <line
              x1="700"
              y1="100"
              x2="1000"
              y2="250"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <line
              x1="1000"
              y1="250"
              x2="1340"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <line
              x1="100"
              y1="100"
              x2="400"
              y2="500"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <line
              x1="400"
              y1="250"
              x2="700"
              y2="500"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <line
              x1="700"
              y1="100"
              x2="1000"
              y2="500"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <line
              x1="1000"
              y1="250"
              x2="1340"
              y2="500"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            {[
              [100, 100],
              [400, 250],
              [700, 100],
              [1000, 250],
              [1340, 100],
              [400, 500],
              [700, 400],
              [1000, 500],
              [1340, 400],
              [250, 380],
              [850, 300],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="4"
                fill="currentColor"
                opacity="0.25"
              />
            ))}
          </svg>
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-slate-300 mb-3">
                What Sets Us Apart
              </span>
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-black sm:text-4xl md:text-5xl">
                Engineered for Career Transformation
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mt-5 rounded-full" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {[
                {
                  num: "01",
                  heading: "Industry-Aligned Specialization",
                  subtext:
                    "Master high-demand competencies through a curriculum engineered by active practitioners to meet current market requirements.",
                },
                {
                  num: "02",
                  heading: "Evidence-Based Skill Acquisition",
                  subtext:
                    "Develop a high-impact professional portfolio by executing complex, real-world projects that demonstrate technical proficiency to recruiters.",
                },
                {
                  num: "03",
                  heading: "Curated Expert Mentorship",
                  subtext:
                    "Gain a competitive edge through direct engagement with a specialized cohort and personalized feedback from subject matter experts.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group relative h-full rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400 hover:bg-white hover:shadow-xl sm:p-8 md:p-10"
                >
                  <div className="absolute top-4 right-6 select-none text-7xl font-black leading-none text-black/5 transition-all group-hover:text-yellow-400/20 dark:text-white/10 dark:group-hover:text-yellow-300/30 sm:text-8xl">
                    {card.num}
                  </div>
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 h-1 w-12 rounded-full bg-yellow-400" />
                    <h3 className="mb-4 max-w-[14ch] text-balance text-[1.45rem] font-bold leading-[1.1] tracking-[-0.025em] text-black sm:max-w-[16ch] sm:text-[1.7rem] lg:text-[1.95rem]">
                      {card.heading}
                    </h3>
                    <p className="max-w-[34ch] text-pretty text-sm leading-7 text-[#5b667a] dark:text-slate-300 sm:text-[15px] sm:leading-8">
                      {card.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <SkillsSwitcher />
      </ScrollReveal>

      <ScrollReveal>
        <StudentPlanAssessment />
      </ScrollReveal>

      <ScrollReveal>
        <CorporateLearningEnvironment />
      </ScrollReveal>

      <ScrollReveal>
        <CampusPlacementVisits />
      </ScrollReveal>

      <ScrollReveal>
        <LeadershipVisionMessage />
      </ScrollReveal>

      <ScrollReveal>
        <CareerPathPlanSection />
      </ScrollReveal>

      <ScrollReveal>
        <HomeFAQSection />
      </ScrollReveal>

      <ScrollReveal>
        <section className="hidden bg-gray-50 px-4 py-12 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="mx-auto mb-8 max-w-3xl text-balance text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Career Support
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerSupport.map(({ icon: Icon, title, description, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 bg-blue-100 p-3 rounded-full">
                    <Icon className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="mb-2 max-w-[18ch] text-balance text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-700">
                    {title}
                  </h3>
                  <p className="max-w-[28ch] text-pretty text-sm leading-7 text-gray-600 dark:text-slate-300">
                    {description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
