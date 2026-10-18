import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Languages, Sparkles, Check } from "lucide-react";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/service-card";
import { CvPromo } from "@/components/cv-promo";
import { Button } from "@/components/ui/button";
import { CreatorHero, CreatorTrust, CreatorCatalog, CreatorExamples, CreatorFaq } from "@/components/creator-sections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "أنجزها AI | خدمات مكتوبة للمبدعين والكتابة في الإمارات" },
    { name: "description", content: "أنجزها للمبدعين: عناوين يوتيوب وأفكار ونصوص وخطط محتوى تبدأ من 19 AED، مع خدمات السيرة الذاتية والترجمة والكتابة. عربي أولاً، بدون مونتاج فيديو." },
    { property: "og:title", content: "أنجزها AI | أنت تصنع المحتوى، ونحن نجهّز الكلمات" },
    { property: "og:description", content: "خدمات نصوص وخطط للمبدعين والمشاريع الصغيرة، وكتابة وترجمة بأسعار واضحة بالدرهم الإماراتي." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

const steps = [
  { n: "01", t: "اختر ما تحتاجه", d: "خدمة واضحة بسعر معلن بالدرهم الإماراتي." },
  { n: "02", t: "شاركنا تفاصيلك", d: "موضوعك وجمهورك ونصوصك، من نموذج الطلب الحالي." },
  { n: "03", t: "أكمل طلبك", d: "ادفع عبر Ziina للخدمات المفعّلة؛ الباقات الأخرى طلب اهتمام فقط." },
  { n: "04", t: "استلم مخرجاتك", d: "نؤكد موعد التنفيذ ثم نرسل المواد المكتوبة إلى بريدك." },
];

function Home() {
  return <>
    <CreatorHero />
    <CreatorTrust />
    <CreatorCatalog />
    <CreatorExamples />
    <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <span className="text-sm font-bold text-accent">لماذا أنجزها؟</span>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">محتواك بصوتك. وخطوتك التالية أوضح.</h2>
      <div className="mt-9 grid gap-8 md:grid-cols-3">{[
        { icon: FileText, title: "تعرف ما ستستلم", text: "عدد الأفكار والنصوص ونطاق كل خدمة أمامك قبل الطلب، بدون وعود بمشاهدات أو نتائج." },
        { icon: Languages, title: "لغة تناسب جمهورك", text: "شاركنا نبرتك ومجالك، وحدد العربية أو الإنجليزية لتبقى الكلمات قريبة من علامتك." },
        { icon: Sparkles, title: "أنت تقود الفكرة", text: "نرتّب المادة التي ترسلها ونجهّز نصوصها. التصوير والمونتاج والنشر تبقى خارج نطاق الخدمة." },
      ].map(({ icon: Icon, title, text }) => <div key={title}><Icon className="h-7 w-7 text-accent" /><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-8 text-muted-foreground">{text}</p></div>)}</div>
    </section>
    <section className="border-y border-border bg-secondary/50 py-14 sm:py-20"><div className="mx-auto max-w-6xl px-5"><span className="text-sm font-bold text-accent">من الفكرة إلى الطلب</span><h2 className="mt-3 text-3xl font-extrabold">خطوات قليلة، وتفاصيل واضحة</h2><div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map(step => <div key={step.n}><span dir="ltr" className="text-sm font-bold text-accent">{step.n}</span><h3 className="mt-3 text-lg font-bold">{step.t}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{step.d}</p></div>)}</div></div></section>
    <CvPromo />
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16"><span className="text-sm font-bold text-accent">خدماتنا الأساسية مستمرة</span><h2 className="mt-3 text-3xl font-extrabold">لشغلك، لمستقبلك، ولكل كلمة</h2><p className="mt-4 text-muted-foreground">السيرة الذاتية والإيميلات والتلخيص والترجمة، بنفس الخدمات والأسعار الحالية.</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(service => <ServiceCard key={service.id} service={service} />)}</div></section>
    <CreatorFaq />
    <section className="bg-navy-gradient py-14 text-navy-foreground sm:py-20"><div className="mx-auto max-w-6xl px-5"><span className="inline-flex items-center gap-2 text-sm text-navy-foreground/75"><Check className="h-4 w-4" /> نصوص وخطط، جاهزة لخطوتك التالية</span><h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">عندك فيديو؟ جهّز كلماته الآن.</h2><p className="mt-4 max-w-xl leading-8 text-navy-foreground/75">ابدأ بعناوين ووصف وتعليق مثبّت وCTA بسعر 19 AED. أرسل نص الفيديو أو ملخصه من نموذج الطلب.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild className="h-12 bg-ai-gradient px-6 font-bold text-primary-foreground"><Link to="/order" search={{ service: "youtube-publish" }}>اطلب تجهيز يوتيوب <ArrowLeft /></Link></Button><Button asChild variant="link" className="h-12 text-navy-foreground"><Link to="/suggestions">ساعدنا نطوّر أنجزها</Link></Button></div></div></section>
  </>;
}
