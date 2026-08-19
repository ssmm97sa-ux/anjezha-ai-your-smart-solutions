import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "الأسئلة الشائعة | أنجزها AI" },
      {
        name: "description",
        content:
          "إجابات عن مدة التسليم، طرق الدفع بالدرهم الإماراتي، التعديلات المجانية، وسرية المستندات في أنجزها AI.",
      },
      { property: "og:title", content: "الأسئلة الشائعة | أنجزها AI" },
      {
        property: "og:description",
        content: "كل ما تحتاج معرفته قبل طلب خدمتك من أنجزها AI.",
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "كم يستغرق تنفيذ الطلب؟",
    a: "أغلب الطلبات تُسلم خلال ٦ إلى ٢٤ ساعة حسب نوع الخدمة وحجم العمل. الطلبات المستعجلة يمكن تسليمها في نفس اليوم عند التنسيق معنا عبر الواتساب.",
  },
  {
    q: "كيف يتم الدفع؟",
    a: "الأسعار بالدرهم الإماراتي (AED)، والدفع الإلكتروني قيد التفعيل حالياً. حتى ذلك الحين نتواصل معك بعد إرسال الطلب لتأكيد السعر وطريقة الدفع.",
  },
  {
    q: "هل يمكنني طلب تعديل بعد التسليم؟",
    a: "نعم، كل طلب يشمل جولة تعديل مجانية واحدة خلال ٤٨ ساعة من التسليم، طالما أن التعديل ضمن نطاق الطلب الأصلي.",
  },
  {
    q: "هل مستنداتي تبقى سرية؟",
    a: "بالتأكيد. لا نشارك ملفاتك أو بياناتك مع أي طرف ثالث، ويتم حذف الملفات من أنظمتنا خلال ٣٠ يوماً من اكتمال الطلب.",
  },
  {
    q: "هل تعملون بالعربية والإنجليزية؟",
    a: "نعم، جميع خدماتنا متوفرة باللغتين، بما في ذلك الترجمة في الاتجاهين عربي ⇄ إنجليزي.",
  },
  {
    q: "هل السعر ثابت؟",
    a: "الأسعار المعروضة هي أسعار البداية. إذا كان طلبك أكبر من المعتاد نُعلمك بالسعر النهائي قبل بدء التنفيذ، ولا نبدأ إلا بعد موافقتك.",
  },
];

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <span className="text-sm font-semibold text-accent">الأسئلة الشائعة</span>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">أسئلة يسألها عملاؤنا كثيراً</h1>

      <div className="mt-10 space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-border bg-card p-5 [&_summary]:cursor-pointer"
          >
            <summary className="flex list-none items-center justify-between gap-4 font-semibold">
              {f.q}
              <span className="text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-8 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
