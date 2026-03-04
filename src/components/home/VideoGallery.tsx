import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  quoteEn: string;
  quoteAr: string;
  thumbnail: string;
  videoId: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    nameEn: "Dr. Sally El Adawy",
    nameAr: "د. سالي العدوي",
    roleEn: "Dentist",
    roleAr: "طبيب أسنان",
    quoteEn: "Tooth decay in children is one of the most common problems that parents encounter. In this video, we will talk about this topic:",
    quoteAr: "تسوّس الأسنان عند الأطفال من أكتر المشاكل اللي بتقابل الأهالي وفي الفيديو ده، هنتكلم عن الموضوع ده:",
    thumbnail: "images/sally2.png",
    videoId: "KceQnTS_GgQ",
  },
  {
    id: "2",
    nameEn: "Dr. Sally El Adawy",
    nameAr: "د. سالي العدوي",
    roleEn: "Dermatology & Aesthetics Specialist",
    roleAr: "تخصص جلديه وتجميل",
    quoteEn: "Do you feel that your gums are very clear when you laugh?  In this video, we will talk about the problem of the gummy smile, which causes embarrassment to many people!",
    quoteAr: "بتحس إن اللثة باينة جدًا وأنت بتضحك؟  في الفيديو ده هنتكلم عن مشكلة الضحكة اللثوية (Gummy Smile) واللي بتسبب إحراج لناس كتير!",
    thumbnail: "images/sally2.png",
    videoId: "VhaQ6pvLDyc",
  },
  {
    id: "3",
    nameEn: "Dr. Sally El Adawy",
    nameAr: "د. سالي العدوي",
    roleEn: "Plastic Surgeon",
    roleAr: "جراحة تجميل",
    quoteEn: "Are you looking for a natural treatment that will restore freshness and youth to your skin? Plasma (PRP) sessions are considered one of the most powerful solutions to renew skin cells and stimulate collagen in a 100% natural way.",
    quoteAr: "هل بتدوري على علاج طبيعي يعيد لبشرتك النضارة والشباب؟ جلسات البلازما (PRP) تعتبر من أقوى الحلول لتجديد خلايا البشرة وتحفيز الكولاجين بطريقة طبيعية 100%.",
    thumbnail: "images/sally2.png",
    videoId: "8tdDCVsS5fE",
  },
  {
    id: "4",
    nameEn: "Dr. Sally El Adawy",
    nameAr: "د. سالي العدوي",
    roleEn: "Dermatology & Aesthetics Specialist",
    roleAr: "تخصص جلديه وتجميل",
    quoteEn: "How can you get rid of local fat without surgery? 💉 In this video, we will talk about the mesolipolysis technique, one of the most famous techniques for breaking down fat with injections.",
    quoteAr: "زاي تتخلص من الدهون الموضعية من غير جراحة؟ 💉 في الفيديو ده هنتكلم عن تقنية الميزو ليبوليسيس (Mesolipolysis)، واحدة من أشهر التقنيات لتفتيت الدهون بالحقن.",
    thumbnail: "images/sally2.png",
    videoId: "uNoNlfUV1PA",
  },
];

const VideoGallery = () => {
  const { language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {language === "en" ? "Video Gallery" : "معرض الفيديوهات"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "doctors sharing their expertise and patient testimonials."
              : " الأطباء يشاركون خبراتهم وشهادات المرضى."}
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(testimonial)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img
                  src={testimonial.thumbnail}
                  alt={language === "en" ? testimonial.nameEn : testimonial.nameAr}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full border-2 border-primary bg-background/20 backdrop-blur-sm flex items-center justify-center transition-colors group-hover:bg-primary group-hover:border-primary"
                  >
                    <Play className="w-6 h-6 text-primary group-hover:text-primary-foreground ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-primary font-serif font-semibold text-lg mb-1">
                  {language === "en" ? testimonial.nameEn : testimonial.nameAr}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {language === "en" ? testimonial.roleEn : testimonial.roleAr}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {language === "en" ? testimonial.quoteEn : testimonial.quoteAr}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-navy-dark border-border overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedVideo && (language === "en" ? selectedVideo.nameEn : selectedVideo.nameAr)}
          </DialogTitle>
          <div className="relative aspect-video">
            {selectedVideo && (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title="Video testimonial"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-50"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoGallery;
