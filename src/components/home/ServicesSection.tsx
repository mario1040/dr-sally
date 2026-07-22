"use client";

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
ArrowRight,
Sparkles,
Apple,
Scissors,
BadgeCheck,
MoveUpRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

type ServiceItem = {
id: string;
title: string;
description: string;
icon: React.ElementType;
image: string;
href: string;
tag: string;
};

const ServicesSection = () => {
const { t, isRTL } = useLanguage();
const sectionRef = useRef<HTMLDivElement>(null);

const { scrollYProgress } = useScroll({
target: sectionRef,
offset: ["start end", "end start"],
});

const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

const services: ServiceItem[] = [
{
id: "01",
title: t.services.dermatology.title,
description: t.services.dermatology.description,
icon: Sparkles,
image:
"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
href: "/services/dermatology-laser",
tag: isRTL ? "جلدية وتجميل" : "Dermatology",
},
{
id: "02",
title: t.services.nutrition.title,
description: t.services.nutrition.description,
icon: Apple,
image:
"https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
href: "/services/nutrition-contouring",
tag: isRTL ? "تغذية ونحت" : "Nutrition",
},
{
id: "03",
title: t.services.hair.title,
description: t.services.hair.description,
icon: Scissors,
image:
"https://images.unsplash.com/photo-1595476103518-3c18c81f1a0a?q=80&w=2070&auto=format&fit=crop",
href: "/services/hair-restoration",
tag: isRTL ? "زراعة وشعر" : "Hair",
},
];

const sectionVariants: Variants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: { staggerChildren: 0.14, delayChildren: 0.08 },
},
};

const itemVariants: Variants = {
hidden: { opacity: 0, y: 24 },
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.8,
ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
},
},
};

const featureIcon = services[0].icon;
const secondIcon = services[1].icon;
const thirdIcon = services[2].icon;

const baseCard =
"group relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/85 shadow-[0_18px_50px_rgba(160,120,70,0.10)] backdrop-blur-md transition-all duration-500";
const imageMask =
"absolute inset-0 bg-[linear-gradient(to_top,rgba(252,248,242,0.98)_0%,rgba(252,248,242,0.76)_22%,rgba(252,248,242,0.10)_62%,rgba(252,248,242,0.02)_100%)]";

return ( <section
   id="services"
   ref={sectionRef}
   className="relative overflow-hidden bg-[#fcf8f2] py-20 text-slate-900 lg:py-32"
 >
{/* Background */} <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(252,248,242,1)_38%,rgba(246,237,226,1)_100%)]" /> <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(120,120,120,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

  <motion.div
    style={{ y: bgY, scale: bgScale }}
    className="pointer-events-none absolute right-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-amber-200/40 blur-3xl"
  />
  <motion.div
    style={{ y: bgY }}
    className="pointer-events-none absolute bottom-[-10rem] left-[-12rem] h-[32rem] w-[32rem] rounded-full bg-rose-100/55 blur-3xl"
  />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
    {/* Header */}
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="mx-auto mb-14 max-w-4xl text-center lg:mb-16"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/78 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-amber-700 shadow-[0_10px_30px_rgba(170,130,70,0.08)] backdrop-blur-md">
        <BadgeCheck className="h-4 w-4 text-amber-600" />
        <span>{t.services.subtitle || (isRTL ? "خدماتنا المتكاملة" : "Our Expertise")}</span>
      </div>

      <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-[4.9rem]">
        {isRTL ? (
          <>
            خدماتنا
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                كرحلة بصرية
              </span>
              <span className="absolute bottom-3 left-0 right-0 h-4 rounded-full bg-amber-200/60 blur-md" />
            </span>
          </>
        ) : (
          <>
            Services
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Designed as a Visual Story
              </span>
              <span className="absolute bottom-3 left-0 right-0 h-4 rounded-full bg-amber-200/60 blur-md" />
            </span>
          </>
        )}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
        {isRTL
          ? "بدل شكل الكروت التقليدي، السكشن هنا متصمم كتركيبة editorial واضحة: كارت رئيسي كبير، ومعه كارتين داعمين بشكل متناسق ومريح على كل الشاشات."
          : "Instead of a standard card grid, this section is built like a clean editorial composition: one large feature card with two supporting cards, fully responsive and visually calm."}
      </p>
    </motion.div>

    {/* Layout */}
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="grid gap-6 lg:grid-cols-12 lg:gap-8"
    >
      {/* Featured card */}
      <motion.div variants={itemVariants} className="lg:col-span-7">
        <Link
          to={services[0].href}
          className={cn(baseCard, "block min-h-[520px] lg:min-h-[720px]")}
        >
          <div className="absolute inset-0">
            <img
              src={services[0].image}
              alt={services[0].title}
              className="h-full w-full object-cover object-center transition-transform duration-[1.6s] ease-out group-hover:scale-110"
            />
          </div>

          <div className={imageMask} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_32%)]" />

          <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7 lg:p-8">
            <div className="flex items-start justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-amber-700 backdrop-blur-md">
                <featureIcon className="h-4 w-4" />
                {isRTL ? "خدمة أساسية" : "Hero service"}
              </div>

              <div className="rounded-full border border-white/80 bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-700 backdrop-blur-md">
                {services[0].id}
              </div>
            </div>

            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700 backdrop-blur-md">
                <MoveUpRight className="h-4 w-4" />
                {t.services.learnMore || (isRTL ? "اكتشفي المزيد" : "Discover more")}
              </div>

              <div className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_16px_40px_rgba(160,120,70,0.10)] backdrop-blur-md sm:p-6 lg:max-w-[70%]">
                <h3 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                  {services[0].title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  {services[0].description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-amber-700">
                    {isRTL ? "تفاصيل الخدمة" : "Service details"}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/80 bg-amber-50 text-amber-700 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className={cn("h-4 w-4", isRTL && "rotate-180")} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Side cards */}
      <div className="grid gap-6 lg:col-span-5 lg:grid-rows-2">
        {[services[1], services[2]].map((service, index) => {
          const SideIcon = index === 0 ? secondIcon : thirdIcon;

          return (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                to={service.href}
                className={cn(
                  baseCard,
                  "block min-h-[320px] lg:h-full lg:min-h-0"
                )}
              >
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-center transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                  />
                </div>

                <div className={imageMask} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),transparent_30%)]" />

                <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700 backdrop-blur-md">
                      <SideIcon className="h-4 w-4" />
                      {isRTL ? "خدمة" : "Service"}
                    </div>

                    <div className="rounded-full border border-white/80 bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-700 backdrop-blur-md">
                      {service.id}
                    </div>
                  </div>

                  <div className="rounded-[1.85rem] border border-white/80 bg-white/82 p-5 shadow-[0_16px_40px_rgba(160,120,70,0.10)] backdrop-blur-md">
                    <h3 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-amber-700">
                        {t.services.learnMore || (isRTL ? "اكتشفي المزيد" : "Discover more")}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/80 bg-amber-50 text-amber-700 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className={cn("h-4 w-4", isRTL && "rotate-180")} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>

    {/* Bottom note */}
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="mt-8 rounded-[2rem] border border-white/80 bg-white/75 px-5 py-4 shadow-[0_14px_40px_rgba(160,120,70,0.08)] backdrop-blur-md lg:mt-10"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-bold text-slate-900">
            {isRTL ? "واجهة أخف، أوضح، ومناسبة للموبايل" : "Lighter, clearer, mobile-friendly layout"}
          </div>
          <div className="mt-1 text-xs leading-6 text-slate-600">
            {isRTL
              ? "لا توجد كتل ضخمة أو تكدس بصري، وكل كارت يتحول لستاك واضح على الشاشات الصغيرة."
              : "No heavy blocks or visual clutter, and each card stacks naturally on smaller screens."}
          </div>
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 self-start rounded-full border border-amber-200/80 bg-amber-50 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-700 transition-transform duration-300 hover:-translate-y-0.5"
        >
          {isRTL ? "عرض كل الخدمات" : "View all services"}
          <ArrowRight className={cn("h-4 w-4", isRTL && "rotate-180")} />
        </Link>
      </div>
    </motion.div>
  </div>
</section>

);
};

export default ServicesSection;
