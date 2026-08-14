import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Apple, Scissors } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  // تأثير Parallax بسيط للخلفية
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const services = [
    {
      id: '01',
      title: 'الجلدية والليزر',
      description: 'علاجات متقدمة لمشاكل البشرة، وإجراءات الليزر والحقن التجميلية، مع اختيار التقنية المناسبة حسب طبيعة كل حالة.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
      href: '/services/dermatology-laser',
      bgGradient: 'from-purple-500/20 to-blue-500/20'
    },
    {
      id: '02',
      title: 'التغذية العلاجية ونحت الجسم',
      description: 'من خطط التغذية المخصصة لتقنيات نحت الجسم المتقدمة، بنشتغل على الوصول لتغيير متوازن يناسب احتياجات كل حالة.',
      icon: Apple,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop',
      href: '/services/nutrition-contouring',
      bgGradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: '03',
      title: 'زراعة وعلاج الشعر',
      description: 'حلول متخصصة لزراعة الشعر وعلاج مشكلاته، باستخدام تقنيات وأساليب علاجية مناسبة لطبيعة كل حالة.',
      icon: Scissors,
      image: 'https://images.unsplash.com/photo-1595476103518-3c18c81f1a0a?q=80&w=2070&auto=format&fit=crop',
      href: '/services/hair-restoration',
      bgGradient: 'from-yellow-500/20 to-orange-500/20'
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="relative pt-32 pb-24 bg-white overflow-hidden"
    >
       {/* ================= BACKGROUND DECORATION ================= */}
       <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />

       <motion.div 
         style={{ y: yBg }}
         className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[100px] -z-10 opacity-70"
       />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-yellow-500"></span>
            <span className="text-yellow-600 font-bold text-xs uppercase tracking-widest">
              {isRTL ? 'خدماتنا' : 'Our Services'}
            </span>
            <span className="h-px w-8 bg-yellow-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-cairo leading-tight">
            {isRTL ? 'كل خدمة تبدأ' : 'Medical Care Beyond'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              {isRTL ? 'بفهم احتياجات الحالة' : 'Expectations'}
            </span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            {isRTL 
              ? 'من الجلدية والليزر، للتغذية ونحت الجسم، وزراعة وعلاج الشعر، كل خدمة لها طريقة مختلفة في التقييم والعلاج، والهدف دايمًا اختيار الأنسب لكل حالة.'
              : 'We provide a comprehensive range of aesthetic and therapeutic services designed specifically to highlight your natural beauty.'}
          </p>
        </motion.div>

        {/* ================= SERVICES CARDS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <Link to={service.href} className="group relative block h-[500px] w-full overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-500 hover:-translate-y-2">

                {/* 1. Background Image */}
                <div className="absolute inset-0 h-full w-full">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05151F] via-[#05151F]/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
                </div>

                {/* 2. Top Content (Icon & Number) */}
                <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start z-20">
                   <div className={`p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300`}>
                      <service.icon className="w-8 h-8" />
                   </div>
                   <span className="text-6xl font-bold text-white/10 font-mono tracking-tighter select-none">
                      {service.id}
                   </span>
                </div>

                {/* 3. Bottom Content (Glass Card) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 overflow-hidden relative group-hover:bg-white/20 transition-colors duration-300">

                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.bgGradient} rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <h3 className="text-2xl font-bold text-white mb-3 font-cairo">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-white transition-colors">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm tracking-wide uppercase">
                      <span>{isRTL ? 'اعرف المزيد' : 'Learn More'}</span>
                      <div className={`w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black group-hover:translate-x-2 ${isRTL ? 'group-hover:-translate-x-2' : ''}`}>
                          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;