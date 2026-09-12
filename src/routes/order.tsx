import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { services, getService, getPaymentLink } from "@/lib/services";

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

function OrderPage() {
  const { service: initial } = Route.useSearch();
  const [serviceId, setServiceId] = useState(
    getService(initial)?.id ?? services[0]!.id,
  );
  const [fileName, setFileName] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  // keep the selected service in sync when arriving from another service card
  useEffect(() => {
    const fromUrl = getService(initial);
    if (fromUrl && fromUrl.id !== serviceId) setServiceId(fromUrl.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial]);

  const service = getService(serviceId) ?? services[0]!;
  const total = service.price;
  const paymentLink = getPaymentLink(service);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    try {
      await fetch("https://formsubmit.co/ss.mm.97@hotmail.com", {
        method: "POST",
        body: new FormData(form),
        mode: "no-cors",
      });
    } catch {
      // even if the email delivery request fails we still send the customer to pay
    }
    if (paymentLink) window.location.href = paymentLink;
  };


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
        onSubmit={handleSubmit}
        className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-start"
      >

        <input type="hidden" name="_next" value={paymentLink} />
        <input type="hidden" name="_captcha" value="false" />

        <input type="hidden" name="_service" value={service.title} />
        <input type="hidden" name="_price" value={`${total} AED`} />

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
                    {service.previousPrice ? (
                      <del className="text-muted-foreground">
                        {service.previousPrice} AED
                      </del>
                    ) : null}
                    {service.offerLabel ? (
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-accent">
                        {service.offerLabel}
                      </span>
                    ) : null}
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
                        {s.price} AED{s.previousPrice ? ` — بدلاً من ${s.previousPrice} AED` : ""}
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
                type="text"
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
                <span className="flex items-baseline gap-2">
                  <span>{service.price} AED</span>
                  {service.previousPrice ? (
                    <del className="text-xs text-navy-foreground/55">
                      {service.previousPrice} AED
                    </del>
                  ) : null}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-navy-foreground/70">مدة التسليم</span>
                <span>{service.delivery}</span>
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
              disabled={sending}
              className="mt-6 w-full rounded-2xl bg-ai-gradient px-6 py-4 font-bold text-primary-foreground ai-glow disabled:opacity-70"
            >
              {sending
                ? "جاري التحويل للدفع..."
                : service.id === "cv"
                  ? "اطلب سيرتك الآن – 19 AED"
                  : "الانتقال للدفع"}
            </button>
            <p className="mt-3 text-center text-xs text-navy-foreground/60">
              سيتم تحويلك إلى بوابة الدفع الآمنة (Ziina) لإتمام عملية الدفع.
            </p>
          </div>

          <div className="mt-4 rounded-3xl border border-border bg-card p-5">
            <h3 className="text-sm font-bold">طرق الدفع</h3>
            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-accent/40 bg-secondary/60 p-4">
              <span className="flex items-center gap-3">
                <span aria-hidden className="grid h-9 w-9 place-items-center rounded-xl bg-ai-gradient text-sm font-bold text-primary-foreground">
                  Z
                </span>
                <span>
                  <span className="block text-sm font-semibold">Ziina</span>
                  <span className="block text-xs text-muted-foreground">
                    الدفع الآمن بالدرهم الإماراتي
                  </span>
                </span>
              </span>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                مفعّل
              </span>
            </div>

            <ul className="mt-3 grid grid-cols-2 gap-2">
              {["PayPal", "Visa / Mastercard", "Apple Pay", "Google Pay"].map((m) => (
                <li key={m}>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    title="غير مفعّل حالياً"
                    className="w-full cursor-not-allowed rounded-xl border border-dashed border-border bg-secondary/40 p-3 text-right opacity-70"
                  >
                    <span className="block text-xs font-semibold">{m}</span>
                    <span className="mt-1 block text-[11px] text-muted-foreground">قريباً</span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              حالياً الدفع يتم عبر Ziina فقط. باقي الطرق قيد التفعيل وسنعلن عنها فور
              اكتمال التفعيل.
            </p>
          </div>

          <div className="mt-4 rounded-3xl border border-border bg-secondary/50 p-5">
            <div className="flex items-center gap-2">
              <span aria-hidden className="text-lg">🎁</span>
              <h3 className="text-sm font-bold">برنامج النقاط والاسترداد — قريباً</h3>
            </div>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              نعمل على برنامج يمنحك رصيداً من قيمة طلبك تستخدمه في طلبك القادم. لم يبدأ
              احتساب أي رصيد بعد، ولن يؤثر على سعر طلبك الحالي.
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
