import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | أنجزها AI" },
      {
        name: "description",
        content: "تواصل مع فريق أنجزها AI عبر الواتساب أو البريد الإلكتروني للاستفسار عن الخدمات والأسعار.",
      },
      { property: "og:title", content: "تواصل معنا | أنجزها AI" },
      {
        property: "og:description",
        content: "فريقنا في دبي جاهز للرد على استفساراتك يومياً من ٩ صباحاً حتى ٩ مساءً.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <span className="text-sm font-semibold text-accent">تواصل معنا</span>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">نسعد بخدمتك</h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { t: "واتساب", v: "‎+971 50 000 0000", d: "أسرع طريقة للرد" },
            { t: "البريد الإلكتروني", v: "hello@anjezha.ai", d: "للاستفسارات والطلبات" },
            { t: "الموقع", v: "دبي، الإمارات العربية المتحدة", d: "نخدم كل العالم العربي" },
            { t: "أوقات العمل", v: "٩ صباحاً — ٩ مساءً", d: "من السبت إلى الخميس" },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-5">
              <span className="text-xs text-muted-foreground">{c.t}</span>
              <p className="mt-1 font-semibold">{c.v}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
          <Link
            to="/order"
            className="block rounded-2xl bg-navy-gradient p-5 text-center font-semibold text-navy-foreground"
          >
            أو أرسل طلبك مباشرة
          </Link>
        </div>

        <form
          className="surface-card rounded-3xl p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium">الاسم</span>
              <input required className="field-input" placeholder="اسمك الكامل" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">البريد الإلكتروني</span>
              <input required type="email" dir="ltr" className="field-input" placeholder="name@email.com" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-medium">رسالتك</span>
            <textarea required rows={6} className="field-input" placeholder="اكتب استفسارك هنا..." />
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-2xl bg-ai-gradient px-6 py-3.5 font-bold text-primary-foreground"
          >
            إرسال الرسالة
          </button>
          {sent && (
            <p className="mt-4 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
              شكراً لتواصلك! سنرد عليك خلال ساعات العمل.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
