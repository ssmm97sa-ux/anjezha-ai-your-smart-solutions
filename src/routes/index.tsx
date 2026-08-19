import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/service-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أنجزها AI | خدمات ذكاء اصطناعي احترافية في الإمارات" },
      {
        name: "description",
        content:
          "سيرة ذاتية، إيميلات رسمية، تلخيص مستندات، إعادة صياغة، كتابة محتوى وترجمة — بأسعار تبدأ من 15 درهم وتسليم سريع.",
      },
      { property: "og:title", content: "أنجزها AI | خدمات ذكاء اصطناعي احترافية" },
      {
        property: "og:description",
        content: "خدمات رقمية سريعة واحترافية تساعدك تنجز شغلك بسهولة. الأسعار بالدرهم الإماراتي.",
      },
    ],
  }),
  component: Home,
});

const steps = [
  { n: "١", t: "اختر الخدمة", d: "حدد الخدمة التي تحتاجها من القائمة وشوف السعر مباشرة." },
  { n: "٢", t: "أرسل تفاصيلك", d: "اكتب طلبك وارفع أي ملف داعم في أقل من دقيقتين." },
  { n: "٣", t: "استلم العمل", d: "نسلمك العمل جاهزاً على الإيميل أو الواتساب في الوقت المحدد." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient text-navy-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-ai-gradient opacity-30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-[-10%] h-96 w-96 rounded-full bg-ai-gradient opacity-20 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-1.5 text-xs">
            <span className="h-2 w-2 rounded-full bg-glow" />
            من دبي — نخدم الإمارات وكل العالم العربي
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.25] sm:text-6xl">
            أنجزها <span className="text-ai-gradient">بالذكاء الاصطناعي</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-navy-foreground/75 sm:text-lg">
            خدمات رقمية سريعة واحترافية تساعدك تنجز شغلك بسهولة
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/order"
              className="rounded-2xl bg-ai-gradient px-8 py-4 text-base font-bold text-primary-foreground ai-glow transition-transform hover:-translate-y-0.5"
            >
              ابدأ الآن
            </Link>
            <Link
              to="/services"
              className="rounded-2xl border border-navy-foreground/20 px-8 py-4 text-base font-semibold transition-colors hover:bg-navy-foreground/10"
            >
              تصفح الخدمات
            </Link>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["+٢٤٠٠", "طلب منجز"],
              ["٦ ساعات", "أسرع تسليم"],
              ["١٥ AED", "تبدأ الأسعار"],
              ["٪٩٨", "رضا العملاء"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-2xl font-bold">{v}</dt>
                <dd className="mt-1 text-xs text-navy-foreground/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent">خدماتنا</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            كل ما تحتاجه للكتابة والمستندات في مكان واحد
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            نستخدم أحدث نماذج الذكاء الاصطناعي مع مراجعة بشرية لضمان لغة سليمة ونتيجة
            جاهزة للاستخدام مباشرة.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold sm:text-4xl">كيف تعمل الخدمة؟</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-3xl bg-card p-7 shadow-[var(--shadow-card)]">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ai-gradient text-lg font-bold text-primary-foreground">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-[2rem] bg-navy-gradient px-6 py-14 text-center text-navy-foreground sm:px-14">
          <h2 className="text-3xl font-bold sm:text-4xl">جاهز تنجز طلبك اليوم؟</h2>
          <p className="mx-auto mt-4 max-w-lg leading-8 text-navy-foreground/70">
            أرسل تفاصيل طلبك الآن واستلم عملك خلال ساعات — الدفع بالدرهم الإماراتي.
          </p>
          <Link
            to="/order"
            className="mt-8 inline-flex rounded-2xl bg-ai-gradient px-8 py-4 font-bold text-primary-foreground ai-glow"
          >
            ابدأ الآن
          </Link>
        </div>
      </section>
    </>
  );
}
