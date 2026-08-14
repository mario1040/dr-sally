import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Apple, Dumbbell, Zap, Activity, Heart, Target } from 'lucide-react';

const NutritionContouring = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Apple,
      title: language === 'ar' ? 'خطط غذائية مخصصة' : 'Custom Diet Plans',
      description: language === 'ar'
        ? 'برامج غذائية مصممة خصيصاً لأهدافك الصحية'
        : 'Nutrition programs tailored to your health goals',
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'سمارت ليبو' : 'Smart Lipo',
      description: language === 'ar'
        ? 'تقنية متقدمة لإذابة الدهون ونحت الجسم'
        : 'Advanced technology for fat melting and body sculpting',
    },
    {
      icon: Activity,
      title: language === 'ar' ? 'أوندا كولويفز' : 'Onda Coolwaves',
      description: language === 'ar'
        ? 'موجات باردة لتقليل السيلوليت والدهون'
        : 'Coolwaves for cellulite and fat reduction',
    },
    {
      icon: Dumbbell,
      title: language === 'ar' ? 'شوارزي' : 'Schwarzy',
      description: language === 'ar'
        ? 'جهاز بناء العضلات وشد الجسم'
        : 'Muscle building and body toning device',
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'متابعة الوزن' : 'Weight Follow-up',
      description: language === 'ar'
        ? 'متابعة دورية لضمان تحقيق أهدافك'
        : 'Regular follow-up to ensure you reach your goals',
    },
    {
      icon: Target,
      title: language === 'ar' ? 'نحت الجسم' : 'Body Sculpting',
      description: language === 'ar'
        ? 'تقنيات متعددة لتحقيق الجسم المثالي'
        : 'Multiple techniques for achieving your ideal body',
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
              {language === 'ar' ? 'التغيير يبدأ من جوّه' : 'Nutrition & Body Contouring'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'خطط تغذية وتقنيات متقدمة لنحت الجسم، حسب احتياجات وأهداف كل حالة.'
                : 'A comprehensive wellness journey from custom nutrition plans to advanced body sculpting.'
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-accent" />
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

export default NutritionContouring;