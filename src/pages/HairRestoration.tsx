import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Scissors, Droplets, Syringe, Sparkles, Activity, HeartPulse } from 'lucide-react';

const HairRestoration = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Scissors,
      title: language === 'ar' ? 'زراعة الشعر' : 'Hair Transplant',
      description: language === 'ar'
        ? 'تقنيات FUE و DHI للحصول على نتائج طبيعية'
        : 'FUE & DHI techniques for natural results',
    },
    {
      icon: Droplets,
      title: language === 'ar' ? 'بي آر بي للشعر' : 'Hair PRP',
      description: language === 'ar'
        ? 'حقن البلازما الغنية بالصفائح الدموية لتعزيز نمو الشعر'
        : 'Platelet-rich plasma injections to boost hair growth',
    },
    {
      icon: Syringe,
      title: language === 'ar' ? 'الميزوثيرابي' : 'Mesotherapy',
      description: language === 'ar'
        ? 'حقن فيتامينات ومعادن لتغذية فروة الرأس'
        : 'Vitamin and mineral injections to nourish the scalp',
    },
    {
      icon: Sparkles,
      title: language === 'ar' ? 'علاج الصلع' : 'Baldness Treatment',
      description: language === 'ar'
        ? 'حلول متكاملة لعلاج الصلع الوراثي'
        : 'Comprehensive solutions for hereditary baldness',
    },
    {
      icon: Activity,
      title: language === 'ar' ? 'تحليل الشعر' : 'Hair Analysis',
      description: language === 'ar'
        ? 'تشخيص دقيق لمشاكل الشعر وفروة الرأس'
        : 'Accurate diagnosis of hair and scalp problems',
    },
    {
      icon: HeartPulse,
      title: language === 'ar' ? 'علاج التساقط' : 'Hair Loss Treatment',
      description: language === 'ar'
        ? 'برامج علاجية شاملة لوقف تساقط الشعر'
        : 'Comprehensive treatment programs to stop hair loss',
    },
  ];

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6">
              {language === 'ar' ? 'شعر أقوى .. بثقة أكبر' : 'Hair Restoration'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'حلول متخصصة لزراعة الشعر وعلاج مشكلاته، بتقييم وخطة مناسبة لكل حالة.'
                : 'Complete hair restoration solutions using the latest technologies and treatment methods.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HairRestoration;