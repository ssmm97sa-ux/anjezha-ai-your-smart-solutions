import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, FileText, Lightbulb, CalendarDays, MessageSquare, Mic, Youtube, ShieldCheck, Wallet, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { creatorServices, getPaymentLink, type Service } from "@/lib/services";
import studio from "@/assets/creator-studio.jpg";

const icons = [Youtube, Lightbulb, Mic, CalendarDays, FileText, MessageSquare];

export function CreatorHero({ category = false }: { category?: boolean }) {
  return (
    <section className="creator-hero relative isolate overflow-hidden">
      <img src={studio} alt="صانع محتوى في استوديو مجهّز بكاميرا وميكروفون في دبي" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-left" />
      <div className="creator-hero-shade absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-64 sm:px-6 sm:py-24">
        <div className="max-w-lg">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-accent"><span className="h-2 w-2 rounded-full bg-accent" /> من الإمارات، لكل مبدع عربي</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">{category ? "أنجزها للمبدعين" : "أنجزها AI"}</h1>
          <p className="mt-3 text-2xl font-bold leading-relaxed sm:text-3xl">أنت تصنع المحتوى.<br /><span className="text-accent">ونحن نجهّز الكلمات.</span></p>
          <p className="mt-4 max-w-md text-base leading-8 text-muted-foreground">عناوين، نصوص وأفكار وخطط نشر لليوتيوبرز وصنّاع المحتوى والمشاريع الصغيرة. خدمات مكتوبة تبدأ من 19 درهماً.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal px-6 py-3 text-base font-bold"><Link to="/order" search={{ service: "youtube-publish" }}>جهّز فيديوك — 19 AED <ArrowLeft /></Link></Button>
            <Button asChild variant="outline" size="lg" className="h-auto min-h-12 px-6 py-3"><Link to={category ? "/services" : "/creators"}>{category ? "كل الخدمات" : "اكتشف خدمات المبدعين"}</Link></Button>
          </div>
          <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><FileText className="h-4 w-4 shrink-0" /> مخرجات كتابية فقط · لا تشمل مونتاج أو تصدير فيديو</p>
        </div>
      </div>
    </section>
  );
}

export function CreatorTrust() {
  return <div className="border-y border-border bg-card"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-5 py-6 md:grid-cols-4">{[
    { icon: FileText, text: "مخرجات واضحة" }, { icon: Wallet, text: "أسعار بالدرهم" }, { icon: ShieldCheck, text: "لا نطلب بيانات بطاقتك" }, { icon: MessageSquare, text: "عربي وإنجليزي" },
  ].map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-3 text-sm font-semibold"><Icon className="h-5 w-5 shrink-0 text-accent" />{text}</div>)}</div></div>;
}

export function CreatorCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[index] ?? FileText;
  const ready = Boolean(getPaymentLink(service));
  return <article data-service={service.id} className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50">
    <div className="flex items-center justify-between gap-3"><div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-accent"><Icon className="h-5 w-5" /></div><span className="text-2xl font-extrabold">{service.price} <span className="text-xs font-medium text-muted-foreground">AED</span></span></div>
    <h3 className="mt-5 text-xl font-bold leading-7">{service.title}</h3>
    <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.desc}</p>
    <ul className="my-5 space-y-2">{service.points.map(point => <li key={point} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{point}</li>)}</ul>
    <div className="mt-auto border-t border-border pt-4"><Button asChild variant={index === 0 ? "default" : "outline"} className="h-11 w-full"><Link to="/order" search={{ service: service.id }}>{ready ? "اطلب الخدمة" : "أرسل طلب اهتمام"}<ArrowLeft /></Link></Button>{!ready && <p className="mt-2 text-center text-xs leading-5 text-muted-foreground">الدفع الإلكتروني لهذه الباقة غير مفعّل بعد</p>}</div>
  </article>;
}

export function CreatorCatalog() {
  return <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20" aria-labelledby="creator-catalog-title">
    <div className="flex flex-wrap items-end justify-between gap-5"><div className="max-w-2xl"><span className="text-sm font-bold text-accent">يوتيوب · تيك توك · بودكاست · أعمال صغيرة</span><h2 id="creator-catalog-title" className="mt-3 text-3xl font-extrabold sm:text-4xl">أنجزها للمبدعين</h2><p className="mt-4 leading-8 text-muted-foreground">من فكرة إلى نص جاهز للنشر. اختر ما تحتاجه، وأرسل لنا تفاصيل محتواك.</p></div><span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><Clapperboard className="h-5 w-5" /> كتابة وتخطيط، بدون مونتاج</span></div>
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{creatorServices.map((service, index) => <CreatorCard key={service.id} service={service} index={index} />)}</div>
  </section>;
}

export function CreatorExamples() {
  return <section className="bg-secondary/60 py-14 sm:py-20"><div className="mx-auto max-w-6xl px-5"><span className="text-sm font-bold text-accent">نظرة على المخرجات</span><h2 className="mt-3 text-3xl font-extrabold">كلمات أوضح. أفكار مرتّبة.</h2><p className="mt-4 leading-8 text-muted-foreground">أمثلة توضيحية وليست أعمال عملاء أو نتائج مضمونة.</p><div className="mt-8 grid gap-5 lg:grid-cols-3">
    <article className="rounded-lg border border-border bg-card p-6"><span className="text-xs font-bold text-accent">مثال · تجهيز يوتيوب</span><h3 className="mt-4 text-lg font-bold">موضوع: بداية البودكاست</h3><p className="mt-4 text-sm leading-7">العنوان: «ابدأ بودكاستك: ماذا تحتاج فعلاً؟»</p><p className="mt-3 text-sm leading-7 text-muted-foreground">التعليق المثبّت: ما الموضوع الذي تحب أن نناقشه في الحلقة القادمة؟ شاركنا اقتراحك.</p></article>
    <article className="rounded-lg border border-border bg-card p-6"><span className="text-xs font-bold text-accent">مثال · فكرة مقطع قصير</span><h3 className="mt-4 text-lg font-bold">Hook يفتح الحوار</h3><p className="mt-4 text-sm leading-7">«هل تحتاج كاميرا غالية لتبدأ؟ جرّب هذه الفكرة أولاً.»</p><p className="mt-3 text-sm leading-7 text-muted-foreground">مفهوم صورة مصغّرة: هاتف وميكروفون على مكتب بسيط، مع عبارة «ابدأ بما عندك». مفهوم مكتوب، لا تصميم أو إنتاج فيديو.</p></article>
    <article className="rounded-lg border border-border bg-card p-6"><span className="text-xs font-bold text-accent">مثال · جدول أسبوعي</span><h3 className="mt-4 text-lg font-bold">كل يوم له فكرة</h3><ul className="mt-4 space-y-3 text-sm"><li className="flex justify-between border-b border-border pb-3"><span>الأحد</span><span className="text-muted-foreground">نصيحة من تخصصك</span></li><li className="flex justify-between border-b border-border pb-3"><span>الثلاثاء</span><span className="text-muted-foreground">سؤال وجواب</span></li><li className="flex justify-between"><span>الخميس</span><span className="text-muted-foreground">قصة خلف الكواليس</span></li></ul></article>
  </div></div></section>;
}

export const creatorFaqs = [
  { q: "هل تشمل الخدمات مونتاج أو إنتاج فيديو؟", a: "لا. نسلّم نصوصاً وعناوين وأوصافاً وأفكاراً وخططاً ومفاهيم مكتوبة للصورة المصغّرة فقط. لا نقصّ الفيديو ولا نعدّله أو نرندره أو نصدّره، ولا ننشره نيابة عنك." },
  { q: "ماذا أرسل لتحويل فيديو إلى أفكار؟", a: "أرسل التفريغ النصي أو نص الفيديو وحدد الجمهور والمنصة. لا نعتمد على رابط فيديو وحده، ولا تتضمن الخدمة تفريغ الصوت أو تحرير المقاطع." },
  { q: "متى أستلم خدمات المبدعين؟", a: "نؤكد موعد التسليم بعد مراجعة كامل النصوص والتفاصيل وحجم الطلب، وقبل بدء التنفيذ. لا نعد بموعد ثابت للباقات الجديدة قبل مراجعتها." },
  { q: "هل كل الباقات جاهزة للدفع؟", a: "الدفع عبر Ziina متاح للخدمات الجديدة بسعر 19 و29 AED. باقات 49 و59 و79 AED متاحة لإرسال طلب اهتمام فقط حتى تفعيل رابطها الصحيح، ولا يتم تحصيل مبلغ أو تحويلك إلى فئة سعر أخرى." },
  { q: "هل تضيفون إحصاءات للـMedia Kit؟", a: "نستخدم المعلومات والإحصاءات التي تزودنا بها فقط. التسليم نص من صفحة واحدة وهيكل جاهز للتنسيق، وليس تصميماً جرافيكياً، ولا نختلق متابعين أو نتائج." },
];

export function CreatorFaq() {
  return <section className="mx-auto max-w-3xl px-5 py-14 sm:py-20"><span className="text-sm font-bold text-accent">قبل أن تطلب</span><h2 className="mt-3 text-3xl font-extrabold">تفاصيل تهمّ المبدع</h2><div className="mt-7 divide-y divide-border border-y border-border">{creatorFaqs.map(item => <details key={item.q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">{item.q}<span className="text-xl text-accent group-open:rotate-45" aria-hidden>+</span></summary><p className="mt-3 text-sm leading-8 text-muted-foreground">{item.a}</p></details>)}</div></section>;
}