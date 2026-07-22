import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Cpu, ClipboardList, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FeatureItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyUsSection = () => {
  const { t, isRTL } = useLanguage();

  // الترتيب هنا له معنى حقيقي: رحلة العميلة معنا من أول استشارة حتى النتيجة
  const features: FeatureItem[] = [
    {
      id: 1,
      icon: Stethoscope,
      title: t.whyUs.doctorsCare.title,
      description: t.whyUs.doctorsCare.description,
    },
    {
      id: 2,
      icon: Cpu,
      title: t.whyUs.technology.title,
      description: t.whyUs.technology.description,
    },
    {
      id: 3,
      icon: ClipboardList,
      title: t.whyUs.customized.title,
      description: t.whyUs.customized.description,
    },
    {
      id: 4,
      icon: Award,
      title: t.whyUs.results.title,
      description: t.whyUs.results.description,
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#fdfbf8] via-[#faf3ec] to-[#f6e9df] overflow-hidden">
      {/* ================= خلفية دقيقة + توهجات ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#e9b9c4]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#c9a15a]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* ================= الهيدر ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-28 max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a15a]/35 bg-white/70 backdrop-blur-sm text-[#8a5f2c] text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#c9a15a]" />
            <span>{isRTL ? 'رحلة التحوّل الذهبية' : 'The Golden Ritual'}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3d2f2a] mb-6 font-cairo leading-[1.2]">
            {isRTL ? 'من أول استشارة' : 'From First Visit'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a97c3f] via-[#c9a15a] to-[#a97c3f] bg-[size:200%] animate-gradient-x">
              {isRTL ? 'إلى نتيجة تستحق الثقة' : 'To Results Worth Trusting'}
            </span>
          </h2>
        </motion.div>

        {/* ================= خيط الرحلة الذهبي (العنصر التوقيعي) ================= */}
        <div className="relative">
          {/* الخيط العلوي + الضوء المتحرك عليه */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a15a]/45 to-transparent">
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c9a15a]"
              style={{ boxShadow: '0 0 10px 3px rgba(201,161,90,0.6)' }}
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-8 pb-12 lg:pb-20">
            {features.map((feature, i) => (
              <JourneyStop key={feature.id} feature={feature} index={i} isRTL={isRTL} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= محطة في رحلة العميلة (بديل بطاقة السبوتلايت) =================
const JourneyStop = ({
  feature,
  index,
  isRTL,
}: {
  feature: FeatureItem;
  index: number;
  isRTL: boolean;
}) => {
  const Icon = feature.icon;
  const isOdd = index % 2 !== 0;
  const threadHeight = isOdd ? 88 : 28; // يتدلى كل ختم على ارتفاع مختلف فيعطي إيقاع "عقد" غير نمطي

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center group"
      style={{ paddingTop: undefined }}
    >
      {/* الخيط المتدلي من الرف العلوي حتى الختم */}
      <div
        className="hidden lg:block w-px bg-gradient-to-b from-[#c9a15a]/50 to-[#c9a15a]/10 mb-4"
        style={{ height: threadHeight }}
      />

      {/* الختم الشمعي (Wax Seal Medallion) */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#c9a15a]/20 rounded-full blur-lg scale-75 group-hover:scale-125 transition-transform duration-700 ease-out" />

        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white to-[#faf3ec] border-2 border-[#c9a15a]/35 shadow-[0_12px_28px_-12px_rgba(201,161,90,0.5)] flex items-center justify-center transition-all duration-500 group-hover:border-[#c9a15a] group-hover:shadow-[0_16px_34px_-10px_rgba(201,161,90,0.6)] group-hover:scale-105">
          <div className="absolute inset-[6px] rounded-full border border-[#c9a15a]/20" />

          {/* حلقة الختم النابضة عند التحويم */}
          <span className="absolute inset-0 rounded-full border border-[#c9a15a]/70 opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-125 group-hover:animate-ping transition-all duration-700" />

          <Icon className="relative z-10 w-8 h-8 text-[#a97c3f] group-hover:text-[#8a5f2c] transition-colors duration-500" />
        </div>

        {/* رقم المرحلة */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#3d2f2a] text-[#f6e9df] text-[10px] font-bold tracking-widest whitespace-nowrap shadow-sm">
          {isRTL ? `المرحلة 0${index + 1}` : `STAGE 0${index + 1}`}
        </div>
      </div>

      {/* النص */}
      <h3 className="text-xl font-bold text-[#3d2f2a] mb-3 font-cairo group-hover:text-[#a97c3f] transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-sm text-[#7a675d] leading-relaxed font-medium max-w-[230px]">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default WhyUsSection;