import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/suggestions")({
  head: () => ({
    meta: [
      { title: "ساعدنا نطوّر أنجزها | اقتراحات العملاء" },
      {
        name: "description",
        content:
          "شاركنا اقتراحك لتطوير خدمات أنجزها AI: خدمة جديدة، تحسين تجربة الاستخدام، أو ملاحظة على السعر والتسليم.",
      },
      { property: "og:title", content: "ساعدنا نطوّر أنجزها" },
      {
        property: "og:description",
        content: "اقتراحك يساعدنا نضيف خدمات أفضل وأسرع. الاسم ووسيلة التواصل اختياريان.",
      },
    ],
  }),
  component: SuggestionsPage,
});

const types = [
  "اقتراح خدمة جديدة",
  "تحسين تجربة الموقع",
  "ملاحظة على الأسعار",
  "ملاحظة على سرعة التسليم",
  "مشكلة تقنية",
  "أخرى",
];

const MAX = 1200;

function SuggestionsPage() {
  const [type, setType] = useState(types[0]!);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed.length < 5 || trimmed.length > MAX) {
      setError(true);
      return;
    }
    setError(false);
    setSending(true);
    try {
      await fetch("https://formsubmit.co/ss.mm.97@hotmail.com", {
        method: "POST",
        body: new FormData(e.currentTarget),
        mode: "no-cors",
      });
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <span className="text-sm font-semibold text-accent">صوتك يهمنا</span>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">ساعدنا نطوّر أنجزها</h1>
      <p className="mt-4 leading-8 text-muted-foreground">
        عندك فكرة لخدمة جديدة أو ملاحظة تخلي تجربتك أسهل؟ اكتبها هنا. الاسم ووسيلة التواصل
        اختياريان تماماً، ولا نطلب أي بيانات دفع أو مستندات في هذه الصفحة.
      </p>

      {done ? (
        <div
          role="status"
          className="surface-card mt-10 rounded-3xl p-8 text-center"
        >
          <span className="grid mx-auto h-14 w-14 place-items-center rounded-2xl bg-ai-gradient text-2xl text-primary-foreground">
            ✓
          </span>
          <h2 className="mt-5 text-xl font-bold">وصلنا اقتراحك، شكراً لك</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            نقرأ كل اقتراح بأنفسنا. إذا تركت وسيلة تواصل فقد نرجع لك لتوضيح التفاصيل.
          </p>
          <button
            type="button"
            onClick={() => {
              setDone(false);
              setText("");
            }}
            className="mt-6 rounded-2xl border border-border px-6 py-3 text-sm font-semibold"
          >
            إرسال اقتراح آخر
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="surface-card mt-10 rounded-3xl p-5 sm:p-7">
          <input type="hidden" name="_subject" value="اقتراح جديد من موقع أنجزها AI" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium">
                الاسم <span className="text-muted-foreground">(اختياري)</span>
              </span>
              <input
                name="name"
                maxLength={80}
                className="field-input"
                placeholder="اسمك أو اتركه فارغاً"
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">
                وسيلة تواصل <span className="text-muted-foreground">(اختياري)</span>
              </span>
              <input
                name="contact"
                maxLength={120}
                dir="ltr"
                className="field-input"
                placeholder="إيميل أو رقم واتساب"
              />
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="mb-3 text-sm font-medium">نوع الاقتراح</legend>
            <input type="hidden" name="type" value={type} />
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={t === type}
                  onClick={() => setType(t)}
                  className={`rounded-xl border px-4 py-2 text-sm transition-colors ${
                    t === type
                      ? "border-accent bg-secondary font-semibold"
                      : "border-border text-muted-foreground hover:border-accent/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium">اقتراحك</span>
            <textarea
              required
              name="suggestion"
              rows={6}
              maxLength={MAX}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="field-input"
              placeholder="اكتب فكرتك بوضوح... مثال: أتمنى إضافة خدمة تصميم بورتفوليو للباحثين عن عمل."
            />
            <span className="mt-2 block text-xs text-muted-foreground">
              {text.trim().length} / {MAX} حرف
            </span>
          </label>

          {error && (
            <p role="alert" className="mt-4 rounded-xl bg-secondary p-4 text-sm">
              تأكد من كتابة اقتراح واضح (٥ أحرف على الأقل) ثم أعد المحاولة.
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="mt-6 w-full rounded-2xl bg-ai-gradient px-6 py-4 font-bold text-primary-foreground ai-glow disabled:opacity-70"
          >
            {sending ? "جاري الإرسال..." : "إرسال الاقتراح"}
          </button>

          <p className="mt-3 text-center text-xs leading-6 text-muted-foreground">
            لا ترسل هنا أي بيانات بطاقة بنكية أو معلومات حساسة. الاقتراحات تُستخدم لتطوير
            الخدمة فقط.
          </p>
        </form>
      )}
    </div>
  );
}
