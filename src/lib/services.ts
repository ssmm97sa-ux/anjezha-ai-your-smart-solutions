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

export const getService = (id: string | undefined) =>
  services.find((s) => s.id === id);

export const ziinaLinksByService: Record<string, string> = {
  cv: "https://pay.ziina.com/anjezha.ai/9urLJeWDX?source=app",
  email: "https://pay.ziina.com/anjezha.ai/9urLJeWDX?source=app",
  summary: "https://pay.ziina.com/anjezha.ai/9urLJeWDX?source=app",
  rewrite: "https://pay.ziina.com/anjezha.ai/s9POcL8XS?source=app",
  content: "https://pay.ziina.com/anjezha.ai/nLPhhC8Fv?source=app",
  translation: "https://pay.ziina.com/anjezha.ai/9urLJeWDX?source=app",
};

export const getPaymentLink = (service: Service | undefined) => {
  if (!service) return "";
  return ziinaLinksByService[service.id] ?? "";
};
