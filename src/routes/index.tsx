import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/service-card";
import { TrustBar } from "@/components/trust-bar";
import { CvPromo } from "@/components/cv-promo";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أنجزها AI | خدمات كتابة وترجمة بالذكاء الاصطناعي في الإمارات" },
      {
        name: "description",
        content:
          "سيرة ذاتية، إيميلات رسمية، تلخيص مستندات، إعادة صياغة، كتابة محتوى وترجمة — أسعار واضحة تبدأ من 15 درهم وتسليم خلال ٦ إلى ٢٤ ساعة.",
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
  { n: "٣", t: "ادفع بأمان", d: "ادفع بالدرهم الإماراتي عبر بوابة Ziina الآمنة." },
  { n: "٤", t: "استلم العمل", d: "نسلمك العمل جاهزاً على بريدك في الوقت المحدد." },
];

const why = [
  {
    icon: "🎯",
    t: "مكتوب لسوق الإمارات",
    d: "صياغة تناسب جهات العمل والجهات الرسمية في الإمارات والخليج، عربي أو إنجليزي.",
  },
  {
    icon: "🧠",
    t: "ذكاء اصطناعي + مراجعة بشرية",
    d: "نستخدم أحدث النماذج ثم نراجع النص يدوياً حتى يخرج بلغة سليمة وخالية من الحشو.",
  },
  {
    icon: "📱",
    t: "طلب من الجوال في دقيقتين",
    d: "نموذج قصير وواضح، بدون تسجيل حساب وبدون خطوات معقدة.",
  },
  {
    icon: "🔁",
    t: "تعديل مجاني",
    d: "جولة تعديل واحدة مجاناً خلال ٤٨ ساعة ضمن نطاق الطلب الأصلي.",
  },
];

const faqPreview = [
  {
    q: "كم يستغرق تنفيذ الطلب؟",
    a: "أغلب الطلبات تُسلّم خلال ٦ إلى ٢٤ ساعة حسب نوع الخدمة وحجم العمل.",
  },
  {
    q: "كيف أدفع؟",
    a: "الدفع بالدرهم الإماراتي عبر بوابة Ziina الآمنة مباشرة بعد إرسال تفاصيل طلبك.",
  },
  {
    q: "هل ملفاتي تبقى سرية؟",
    a: "نعم. لا نشارك ملفاتك مع أي طرف ثالث، وتُحذف من أنظمتنا خلال ٣٠ يوماً من التسليم.",
  },
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
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-1.5 text-xs">
              <span aria-hidden className="h-2 w-2 rounded-full bg-glow" />
              من دبي — نخدم الإمارات وكل العالم العربي
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.25] sm:text-6xl">
              أنجزها <span className="text-ai-gradient">بالذكاء الاصطناعي</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-navy-foreground/75 sm:text-lg">
              خدمات رقمية سريعة واحترافية تساعدك تنجز شغلك بسهولة — سيرة ذاتية، خطابات
              رسمية، تلخيص، إعادة صياغة، محتوى وترجمة.
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
                تصفح الخدمات والأسعار
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {["خدمات سريعة وسهلة", "أسعار واضحة", "دعم باللغة العربية"].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 px-5 py-3"
                >
                  <span aria-hidden className="h-2 w-2 rounded-full bg-glow" />
                  <span className="text-sm font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy-foreground/10 bg-navy-foreground/5 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-sm text-navy-foreground/70">أسعار البداية بالدرهم الإماراتي</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/order"
                    search={{ service: s.id }}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-navy-foreground/10 px-4 py-3 text-sm transition-colors hover:bg-navy-foreground/10"
                  >
                    <span className="flex items-center gap-3">
                      <span aria-hidden className="text-lg">{s.icon}</span>
                      <span className="font-semibold">{s.title}</span>
                    </span>
                    <span className="flex shrink-0 items-baseline gap-2">
                      <span className="font-bold text-ai-gradient">{s.price} AED</span>
                      {s.previousPrice ? (
                        <del className="text-xs text-navy-foreground/55">
                          {s.previousPrice} AED
                        </del>
                      ) : null}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center text-xs text-navy-foreground/60">
              الدفع الآمن عبر Ziina — بدون رسوم مخفية
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent">خدماتنا</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            كل ما تحتاجه للكتابة والمستندات في مكان واحد
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            اختر الخدمة، أرسل تفاصيلك، وادفع بالدرهم الإماراتي. السعر يظهر لك بوضوح قبل
            أي خطوة دفع.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <span className="text-sm font-semibold text-accent">لماذا أنجزها</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">لماذا يختارنا العملاء؟</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {why.map((w) => (
              <div key={w.t} className="surface-card flex gap-4 rounded-3xl p-6">
                <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-xl">
                  {w.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{w.t}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <span className="text-sm font-semibold text-accent">خطوات بسيطة</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">كيف تعمل الخدمة؟</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-card p-7 shadow-[var(--shadow-card)]">
              <span aria-hidden className="grid h-11 w-11 place-items-center rounded-2xl bg-ai-gradient text-lg font-bold text-primary-foreground">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold sm:text-4xl">أسئلة سريعة قبل الطلب</h2>
          <div className="mt-8 space-y-4">
            {faqPreview.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span aria-hidden className="text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-8 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <Link
            to="/faq"
            className="mt-6 inline-flex text-sm font-semibold text-accent underline underline-offset-4"
          >
            كل الأسئلة الشائعة
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 pb-28 sm:py-20 md:pb-20">
        <div className="rounded-[2rem] bg-navy-gradient px-6 py-14 text-center text-navy-foreground sm:px-14">
          <h2 className="text-3xl font-bold sm:text-4xl">جاهز تنجز طلبك اليوم؟</h2>
          <p className="mx-auto mt-4 max-w-lg leading-8 text-navy-foreground/70">
            أرسل تفاصيل طلبك الآن واستلم عملك في الوقت المحدد — الدفع بالدرهم الإماراتي.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/order"
              className="inline-flex rounded-2xl bg-ai-gradient px-8 py-4 font-bold text-primary-foreground ai-glow"
            >
              ابدأ الآن
            </Link>
            <Link
              to="/suggestions"
              className="inline-flex rounded-2xl border border-navy-foreground/20 px-8 py-4 font-semibold transition-colors hover:bg-navy-foreground/10"
            >
              ساعدنا نطوّر أنجزها
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
