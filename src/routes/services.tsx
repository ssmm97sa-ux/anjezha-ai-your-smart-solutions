import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/service-card";
import { CreatorCatalog } from "@/components/creator-sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "الخدمات والأسعار | أنجزها AI" },
      {
        name: "description",
        content:
          "خدمات المبدعين والكتابة والترجمة بالدرهم الإماراتي: نصوص يوتيوب 19 وخطط محتوى، وسيرة ذاتية 19 وإيميلات وترجمة وتلخيص 19 وإعادة صياغة 15.",
      },
      { property: "og:title", content: "الخدمات والأسعار | أنجزها AI" },
      {
        property: "og:description",
        content: "خدمات كتابة وترجمة وتلخيص بالذكاء الاصطناعي بأسعار واضحة بالدرهم الإماراتي.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <><CreatorCatalog /><div className="mx-auto max-w-6xl px-4 py-10">
      <span className="text-sm font-semibold text-accent">الأسعار بالدرهم الإماراتي</span>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">خدماتنا وأسعارها</h1>
      <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">
        الأسعار المعروضة هي أسعار البداية، وقد تختلف حسب حجم العمل وعدد الكلمات. سنؤكد لك
        السعر النهائي قبل التنفيذ.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div></>
  );
}
