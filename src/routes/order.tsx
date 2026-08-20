import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { services, getService } from "@/lib/services";

type OrderSearch = { service?: string | undefined };

export const Route = createFileRoute("/order")({
  validateSearch: (search: Record<string, unknown>): OrderSearch => ({
    service: typeof search["service"] === "string" ? search["service"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "اطلب خدمتك | أنجزها AI" },
      {
        name: "description",
        content:
          "أرسل تفاصيل طلبك في أقل من دقيقتين: اختر الخدمة، أرفق ملفك، وشاهد السعر بالدرهم الإماراتي قبل الدفع.",
      },
      { property: "og:title", content: "اطلب خدمتك | أنجزها AI" },
      {
        property: "og:description",
        content: "نموذج طلب سريع وسهل على الجوال مع سعر واضح بالدرهم الإماراتي.",
      },
    ],
  }),
  component: OrderPage,
});

const urgencyOptions = [
  { id: "normal", label: "عادي", extra: 0 },
  { id: "fast", label: "مستعجل", extra: 20 },
];

function OrderPage() {
  const { service: initial } = Route.useSearch();
  const [serviceId, setServiceId] = useState(
    getService(initial)?.id ?? services[0]!.id,
  );
  const [urgency, setUrgency] = useState("normal");
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const service = getService(serviceId)!;
  const extra = urgencyOptions.find((u) => u.id === urgency)?.extra ?? 0;
  const total = service.price + extra;

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <span className="grid mx-auto h-16 w-16 place-items-center rounded-2xl bg-ai-gradient text-3xl text-primary-foreground">
          ✓
        </span>
        <h1 className="mt-6 text-2xl font-bold">تم استلام طلبك</h1>
        <p className="mt-3 leading-8 text-muted-foreground">
          شكراً لك! سنراجع تفاصيل طلبك ونتواصل معك عبر الواتساب أو البريد الإلكتروني
          لتأكيد السعر النهائي ({total} AED) واستكمال خطوة الدفع.
        </p>
        <a href="https://pay.ziina.com/anjezha.ai/PuKbnsmDc?source=app" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-2xl bg-primary px-6 py-3 font-bold text-primary-foreground">
  ادفع الآن عبر Ziina
</a>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-2xl border border-border px-6 py-3 text-sm font-semibold"
        >
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="mb-8">
        <span className="text-sm font-semibold text-accent">نموذج الطلب</span>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">اطلب خدمتك الآن</h1>
        <p className="mt-3 max-w-2xl leading-8 text-muted-foreground">
          عبّئ التفاصيل التالية وسنبدأ العمل فور تأكيد الطلب. السعر يظهر مباشرة قبل
          الانتقال للدفع.
        </p>
      </div>

      <form
  action="https://formsubmit.co/ss.mm.97@hotmail.com"
  method="POST"
  encType="multipart/form-data"

        className="grid items-start gap-6 lg:grid-cols-[1.5fr_1fr]"
      >
        <div className="space-y-5">
          <section className="surface-card rounded-3xl p-5 sm:p-6">
            <h2 className="text-lg font-bold">الخدمة المختارة</h2>
            <div className="mt-4 rounded-2xl border border-accent/30 bg-secondary/60 p-4">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ai-gradient text-2xl text-primary-foreground">
                  {service.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{service.desc}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-semibold text-accent">
                      {service.price} AED
                    </span>
                    <span className="text-muted-foreground">{service.delivery}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <span className="mb-3 block text-sm font-medium">اختيار خدمة أخرى</span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {services.map((s) => {
                  const active = s.id === serviceId;
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setServiceId(s.id)}
                      className={`rounded-xl border p-3 text-right text-sm transition-colors ${
                        active
                          ? "border-accent bg-secondary font-semibold"
                          : "border-border hover:border-accent/40"
                      }`}
                    >
                      <span className="block text-lg leading-none">{s.icon}</span>
                      <span className="mt-1 block text-xs">{s.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {s.price} AED
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="surface-card rounded-3xl p-5 sm:p-6">
            <h2 className="text-lg font-bold">بياناتك</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">الاسم الكامل</span>
                <input
                  required name="name"
                  className="field-input"
                  placeholder="مثال: سلطان العوفي"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">البريد الإلكتروني</span>
                <input
                  required name="email"
                  type="email"
                  dir="ltr"
                  className="field-input"
                  placeholder="name@email.com"
                  autoComplete="email"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium">
                  رقم الواتساب / الجوال
                </span>
                <input
                  required name="phone"
                  type="tel"
                  dir="ltr"
                  className="field-input"
                  placeholder="+971 50 000 0000"
                  autoComplete="tel"
                />
              </label>
            </div>
          </section>

          <section className="surface-card rounded-3xl p-5 sm:p-6">
            <h2 className="text-lg font-bold">تفاصيل الطلب</h2>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium">
                اشرح لنا ما تحتاجه بالتفصيل
              </span>
              <textarea
              required
name="details"
                rows={6}
                className="field-input"
                placeholder="مثال: أحتاج سيرة ذاتية باللغة الإنجليزية لوظيفة محاسب في دبي، خبرتي ٥ سنوات..."
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium">إرفاق ملف (اختياري)</span>
              <div className="rounded-2xl border border-dashed border-border bg-secondary/50 p-5 text-center">
                <input
                  type="file" name="attachment"
                  className="mx-auto block w-full text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:text-primary-foreground"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                />
                <p className="mt-3 text-xs text-muted-foreground">
                  {fileName
                    ? `الملف المختار: ${fileName}`
                    : "PDF أو Word أو صورة — بحد أقصى ١٠ ميجابايت"}
                </p>
              </div>
            </label>

            <div className="mt-5">
              <span className="mb-2 block text-sm font-medium">سرعة التنفيذ</span>
              <div className="grid gap-3 sm:grid-cols-2">
                {urgencyOptions.map((u) => (
                  <button
                    type="button"
                    key={u.id}
                    onClick={() => setUrgency(u.id)}
                    className={`rounded-2xl border p-4 text-right text-sm transition-colors ${
                      urgency === u.id
                        ? "border-accent bg-secondary"
                        : "border-border hover:border-accent/40"
                    }`}
                  >
                    <span className="block font-semibold">{u.label}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {u.extra ? `+ ${u.extra} AED` : "ضمن السعر الأساسي"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-3xl bg-navy-gradient p-5 text-navy-foreground shadow-[var(--shadow-lift)] sm:p-6">
            <h2 className="text-lg font-bold">ملخص الطلب</h2>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-navy-foreground/70">الخدمة</span>
                <span className="text-end font-semibold">{service.title}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-navy-foreground/70">السعر الأساسي</span>
                <span>{service.price} AED</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-navy-foreground/70">رسوم الاستعجال</span>
                <span>{extra} AED</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-navy-foreground/70">مدة التسليم</span>
                <span>{urgency === "fast" ? "خلال ٦ ساعات" : service.delivery}</span>
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between border-t border-navy-foreground/15 pt-5">
              <span className="text-sm text-navy-foreground/70">الإجمالي</span>
              <span className="text-3xl font-bold">
                {total} <span className="text-base">AED</span>
              </span>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-ai-gradient px-6 py-4 font-bold text-primary-foreground ai-glow"
            >
              الانتقال للدفع
            </button>

            <p className="mt-3 text-center text-xs text-navy-foreground/60">
              بوابة الدفع الإلكتروني (Ziina) قيد التفعيل — سنؤكد طلبك وطريقة الدفع بعد
              الإرسال.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-card p-5 text-xs leading-6 text-muted-foreground">
            بإرسال الطلب فإنك توافق على{" "}
            <Link to="/terms" className="text-accent underline underline-offset-2">
              الشروط والأحكام
            </Link>{" "}
            و{" "}
            <Link to="/privacy" className="text-accent underline underline-offset-2">
              سياسة الخصوصية
            </Link>
            . جميع ملفاتك تبقى سرية ولا تُشارك مع أي طرف ثالث.
          </div>
        </aside>
      </form>
    </div>
  );
}
