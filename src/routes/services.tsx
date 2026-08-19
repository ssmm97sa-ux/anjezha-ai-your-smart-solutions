import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/service-card";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات والأسعار | أنجزها AI" },
      {
        name: "description",
        content:
          "أسعار خدمات أنجزها AI بالدرهم الإماراتي: سيرة ذاتية 49، محتوى 29، ترجمة وتلخيص وإيميلات 19، إعادة صياغة 15.",
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
    <div className="mx-auto max-w-6xl px-4 py-16">
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
    </div>
  );
}
