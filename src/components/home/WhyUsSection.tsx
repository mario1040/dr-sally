import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, ClipboardList, Sparkles, UserCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FeatureItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyUsSection = () => {
  const { isRTL } = useLanguage();

  const features: FeatureItem[] = [
    {
      id: 1,
      icon: Stethoscope,
      title: isRTL ? "تقييم دقيق قبل أي إجراء" : "Precise Assessment Before Any Procedure",
      description: isRTL 
        ? "كل حالة مختلفة، عشان كده أول خطوة دايمًا هي التقييم الجيد، وسماع كل التفاصيل قبل اقتراح أي إجراء."
        : "Every case is different, so the first step is always a thorough assessment, listening to all details before suggesting any procedure.",
    },
    {
      id: 2,
      icon: ClipboardList,
      title: isRTL ? "شرح واضح لكل خطوة قبل بدء العلاج" : "Clear Explanation of Every Step Before Treatment",
      description: isRTL
        ? "مش كل تقنية تنفع لكل الناس. بعد التقييم، بيتم اختيار الإجراء أو التقنية اللي تناسب الحالة وتحقق أفضل نتيجة."
        : "Not every technique works for everyone. After assessment, the procedure or technique that suits the case and achieves the best result is selected.",
    },
    {
      id: 3,
      icon: Sparkles,
      title: isRTL ? "هدفنا نتيجة طبيعية تحافظ على ملامحك" : "Natural Results That Preserve Your Features",
      description: isRTL
        ? "اختيار الإجراء المناسب حسب احتياجات كل حالة، مش حسب الترند. هدفنا نتيجة طبيعية تحافظ على ملامحك، مش تغيرها."
        : "Choosing the right procedure based on each case's needs, not trends. Our goal is a natural result that preserves your features, not changes them.",
    },
    {
      id: 4,
      icon: UserCheck,
      title: isRTL ? "متابعة مستمرة بعد الإجراء" : "Continuous Follow-Up After the Procedure",
      description: isRTL
        ? "النتيجة مش بتقف عند نهاية الجلسة، والمتابعة جزء أساسي لضمان أفضل تطور للحالة والإجابة على أي استفسار."
        : "The result doesn't stop at the end of the session; follow-up is essential to ensure the best progress and answer any inquiries.",
    },
  ];

  return (
    <section id="why-us" className="relative py-32 bg-gradient-to-b from-[#fdfbf8] via-[#faf3ec] to-[#f6e9df] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#e9b9c4]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#c9a15a]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-28 max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a15a]/35 bg-white/70 backdrop-blur-sm text-[#8a5f2c] text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#c9a15a]" />
            <span>{isRTL ? 'رحلة العلاج' : 'Treatment Journey'}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3d2f2a] mb-6 font-cairo leading-[1.2]">
            {isRTL ? 'ليه تختار د. سالي العدوي؟' : 'Why Choose Dr. Sally El Adawy?'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a97c3f] via-[#c9a15a] to-[#a97c3f] bg-[size:200%] animate-gradient-x">
              {isRTL ? 'لأن التفاصيل الصغيرة هي اللي بتصنع الفرق' : 'Because Small Details Make the Difference'}
            </span>
          </h2>
        </motion.div>

        <div className="relative">
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
  const threadHeight = isOdd ? 88 : 28;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center group"
    >
      <div
        className="hidden lg:block w-px bg-gradient-to-b from-[#c9a15a]/50 to-[#c9a15a]/10 mb-4"
        style={{ height: threadHeight }}
      />

      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#c9a15a]/20 rounded-full blur-lg scale-75 group-hover:scale-125 transition-transform duration-700 ease-out" />

        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white to-[#faf3ec] border-2 border-[#c9a15a]/35 shadow-[0_12px_28px_-12px_rgba(201,161,90,0.5)] flex items-center justify-center transition-all duration-500 group-hover:border-[#c9a15a] group-hover:shadow-[0_16px_34px_-10px_rgba(201,161,90,0.6)] group-hover:scale-105">
          <div className="absolute inset-[6px] rounded-full border border-[#c9a15a]/20" />

          <span className="absolute inset-0 rounded-full border border-[#c9a15a]/70 opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-125 group-hover:animate-ping transition-all duration-700" />

          <Icon className="relative z-10 w-8 h-8 text-[#a97c3f] group-hover:text-[#8a5f2c] transition-colors duration-500" />
        </div>

        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#3d2f2a] text-[#f6e9df] text-[10px] font-bold tracking-widest whitespace-nowrap shadow-sm">
          {isRTL ? `المرحلة 0${index + 1}` : `STAGE 0${index + 1}`}
        </div>
      </div>

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