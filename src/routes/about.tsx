import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | أنجزها AI" },
      {
        name: "description",
        content:
          "أنجزها AI فريق إماراتي يقدم خدمات كتابة وترجمة وتلخيص بالذكاء الاصطناعي مع مراجعة بشرية وسرية تامة.",
      },
      { property: "og:title", content: "من نحن | أنجزها AI" },
      {
        property: "og:description",
        content: "فريق من دبي يجمع بين الذكاء الاصطناعي والمراجعة البشرية لإنجاز أعمالك الكتابية.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "سرعة حقيقية", d: "أغلب الطلبات تُسلم خلال ٦ إلى ٢٤ ساعة، وبعضها في نفس الساعة." },
  { t: "لغة سليمة", d: "كل عمل يمر على مراجعة بشرية للتأكد من دقة اللغة والمصطلحات." },
  { t: "سرية تامة", d: "مستنداتك تبقى خاصة، ولا تُشارك مع أي طرف ثالث إطلاقاً." },
  { t: "أسعار واضحة", d: "سعر معلن بالدرهم الإماراتي بدون رسوم مخفية أو مفاجآت." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <span className="text-sm font-semibold text-accent">من نحن</span>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
        نساعد العرب على إنجاز أعمالهم الكتابية بذكاء
      </h1>
      <p className="mt-6 leading-9 text-muted-foreground">
        بدأت «أنجزها AI» في دبي من ملاحظة بسيطة: كثير من الناس يضيّعون ساعات في كتابة
        سيرة ذاتية، أو صياغة إيميل رسمي، أو تلخيص عقد طويل. نحن نستخدم أحدث نماذج الذكاء
        الاصطناعي، ثم يراجع فريقنا كل مخرجات العمل يدوياً قبل التسليم، لتحصل على نتيجة
        احترافية جاهزة للاستخدام مباشرة.
      </p>
      <p className="mt-4 leading-9 text-muted-foreground">
        نخدم الأفراد والباحثين عن عمل، وأصحاب المشاريع الصغيرة، والشركات في الإمارات ودول
        الخليج وكل العالم العربي، باللغتين العربية والإنجليزية.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {values.map((v) => (
          <div key={v.t} className="surface-card rounded-3xl p-6">
            <h2 className="text-lg font-bold">{v.t}</h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
