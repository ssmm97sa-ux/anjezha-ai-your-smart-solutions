export type Service = {
  id: string;
  title: string;
  desc: string;
  price: number;
  previousPrice?: number;
  offerLabel?: string;
  delivery: string;
  icon: string;
  points: string[];
  category?: "creators";
  inputHint?: string;
};

export const services: Service[] = [
  {
    id: "cv",
    title: "كتابة سيرة ذاتية احترافية",
    desc: "سيرة ذاتية محسّنة المحتوى والصياغة، بتنسيق احترافي وملف PDF جاهز للتقديم.",
    price: 19,
    previousPrice: 49,
    offerLabel: "عرض أول 20 عميل",
    delivery: "خلال 24 ساعة",
    icon: "📄",
    points: [
      "تحسين المحتوى والصياغة",
      "تنسيق احترافي",
      "PDF جاهز للتقديم",
      "تعديل مجاني بعد الاستلام",
    ],
  },
  {
    id: "email",
    title: "كتابة إيميل أو خطاب رسمي",
    desc: "رسائل عمل ومخاطبات رسمية بصياغة مهنية ولبقة، للجهات الحكومية أو الشركات أو العملاء.",
    price: 19,
    delivery: "خلال 6 ساعات",
    icon: "✉️",
    points: ["نبرة رسمية أو ودّية حسب طلبك", "عربي أو إنجليزي", "صياغة مباشرة وواضحة"],
  },
  {
    id: "summary",
    title: "تلخيص المستندات",
    desc: "تلخيص العقود والتقارير والأبحاث في نقاط واضحة تختصر عليك وقت القراءة.",
    price: 19,
    delivery: "خلال 6 ساعات",
    icon: "🧾",
    points: ["ملخص تنفيذي بنقاط", "استخراج البنود المهمة", "PDF أو Word"],
  },
  {
    id: "rewrite",
    title: "إعادة صياغة عربي وإنجليزي",
    desc: "إعادة صياغة نصوصك بأسلوب أوضح وأقوى مع الحفاظ على المعنى وخلوّها من التكرار.",
    price: 15,
    delivery: "خلال 6 ساعات",
    icon: "🔁",
    points: ["تحسين الأسلوب واللغة", "تدقيق إملائي ونحوي", "نص أصلي وسلس"],
  },
  {
    id: "content",
    title: "كتابة محتوى",
    desc: "محتوى لمواقعكم وحساباتكم: منشورات، وصف منتجات، صفحات تعريفية، ورسائل تسويقية.",
    price: 29,
    delivery: "خلال 24 ساعة",
    icon: "✍️",
    points: ["محتوى مهيأ للبحث", "نبرة تناسب علامتك", "أفكار جاهزة للنشر"],
  },
  {
    id: "translation",
    title: "الترجمة",
    desc: "ترجمة عربي ⇄ إنجليزي دقيقة للمستندات والرسائل والمحتوى التجاري.",
    price: 19,
    delivery: "خلال 12 ساعة",
    icon: "🌐",
    points: ["ترجمة بشرية المراجعة", "حفاظ على التنسيق", "مصطلحات دقيقة"],
  },
];

export const creatorServices: Service[] = [
  {
    id: "youtube-publish", category: "creators", title: "تجهيز فيديو يوتيوب للنشر", price: 19, icon: "▶",
    desc: "نصوص نشر جاهزة لفيديوك، من العنوان إلى دعوة التفاعل — بدون مونتاج.",
    delivery: "يُؤكد الموعد بعد مراجعة التفاصيل",
    points: ["5 عناوين مقترحة", "وصف للفيديو", "تعليق مثبّت", "دعوة لاتخاذ إجراء CTA"],
    inputHint: "أرسل نص الفيديو أو ملخصه، موضوع القناة، جمهورك والهدف من الفيديو. يمكن وصف فكرة الصورة المصغّرة كتابياً؛ لا نعدّل الفيديو.",
  },
  {
    id: "video-ideas", category: "creators", title: "تحويل فيديو إلى أفكار محتوى", price: 29, icon: "💡",
    desc: "نحوّل التفريغ النصي الذي ترسله إلى أفكار لمقاطع قصيرة، وليس إلى فيديوهات مُنتجة.",
    delivery: "يُؤكد الموعد بعد مراجعة التفاصيل",
    points: ["حتى 10 أفكار لمقاطع قصيرة", "افتتاحيات جذابة Hooks", "نصوص مرافقة Captions", "بناءً على نصك أو تفريغك"],
    inputHint: "أرسل تفريغ الفيديو أو النص الأصلي، والمنصة المستهدفة. رابط فيديو وحده لا يكفي؛ لا نقصّ أو نصدّر مقاطع.",
  },
  {
    id: "creator-pack", category: "creators", title: "باقة صانع المحتوى", price: 49, icon: "🎙",
    desc: "أسبوع من الأفكار والنصوص المرتّبة لصانع المحتوى، لتتفرغ للتصوير والنشر.",
    delivery: "يُؤكد الموعد بعد مراجعة التفاصيل",
    points: ["10 أفكار منشورات أو ريلز", "Hooks ونصوص Captions", "هاشتاقات مناسبة", "جدول نشر لأسبوع"],
    inputHint: "أخبرنا بتخصصك، جمهورك، منصاتك، ونبرة المحتوى التي تفضلها، مع أمثلة من محتواك إن وجدت.",
  },
  {
    id: "content-plan-30", category: "creators", title: "خطة محتوى 30 يوم", price: 79, icon: "🗓",
    desc: "خطة شهر مكتوبة ومنظمة تناسب موضوعك وجمهورك، دون وعود بالمشاهدات أو النتائج.",
    delivery: "يُؤكد الموعد بعد مراجعة التفاصيل",
    points: ["30 فكرة محتوى", "نصوص مرافقة وافتتاحيات", "تقويم نشر مقترح", "تنويع مواضيع الشهر"],
    inputHint: "أرسل مجال نشاطك، أهداف الشهر، المنصات، الجمهور، والمناسبات أو المنتجات التي تريد التركيز عليها.",
  },
  {
    id: "media-kit", category: "creators", title: "ملف تعريفي للمؤثر Media Kit", price: 59, icon: "📑",
    desc: "ملف من صفحة واحدة: نص احترافي وهيكل جاهز للتصميم، بمعلوماتك الفعلية فقط.",
    delivery: "يُؤكد الموعد بعد مراجعة التفاصيل",
    points: ["نبذة احترافية عنك", "صفحة واحدة جاهزة للتنسيق", "إحصاءات تزودنا بها فقط", "مجالات التعاون وبيانات التواصل"],
    inputHint: "أرسل نبذتك، منصاتك، إحصاءاتك الفعلية وبيانات التواصل التي تريد نشرها. لا نختلق أعداد متابعين أو نتائج، ولا يشمل الطلب تصميم ملف جرافيكي.",
  },
  {
    id: "customer-replies", category: "creators", title: "ردود العملاء الجاهزة", price: 29, icon: "💬",
    desc: "ردود مكتوبة بصوت مشروعك للأسئلة المتكررة، قابلة للاستخدام في رسائلك اليومية.",
    delivery: "يُؤكد الموعد بعد مراجعة التفاصيل",
    points: ["20 رداً مخصصاً", "عربي / إنجليزي حسب طلبك", "صياغة تناسب نشاطك", "للأسعار والطلبات والاستفسارات"],
    inputHint: "أرسل وصف النشاط والأسئلة المتكررة والأسعار والسياسات الحقيقية، وحدد لغة الردود والنبرة المطلوبة.",
  },
];

export const allServices: Service[] = [...services, ...creatorServices];

export const getService = (id: string | undefined) =>
  allServices.find((s) => s.id === id);

export const ziinaLinksByService: Record<string, string> = {
  cv: "https://pay.ziina.com/anjezha.ai/9urLJeWDX?source=app",
  email: "https://pay.ziina.com/anjezha.ai/9urLJeWDX?source=app",
  summary: "https://pay.ziina.com/anjezha.ai/9urLJeWDX?source=app",
  rewrite: "https://pay.ziina.com/anjezha.ai/s9POcL8XS?source=app",
  content: "https://pay.ziina.com/anjezha.ai/nLPhhC8Fv?source=app",
  translation: "https://pay.ziina.com/anjezha.ai/9urLJeWDX?source=app",
  "youtube-publish": "https://pay.ziina.com/anjezha.ai/9urLJeWDX?source=app",
  "video-ideas": "https://pay.ziina.com/anjezha.ai/nLPhhC8Fv?source=app",
  "customer-replies": "https://pay.ziina.com/anjezha.ai/nLPhhC8Fv?source=app",
};

export const getPaymentLink = (service: Service | undefined) => {
  if (!service) return "";
  return ziinaLinksByService[service.id] ?? "";
};
