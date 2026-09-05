const items = [
  { icon: "⚡", t: "تسليم سريع", d: "من ٦ إلى ٢٤ ساعة حسب الخدمة" },
  { icon: "🔒", t: "خصوصية تامة", d: "ملفاتك لا تُشارك مع أي طرف ثالث" },
  { icon: "💳", t: "أسعار واضحة", d: "السعر بالدرهم قبل الدفع، بدون رسوم مخفية" },
  { icon: "✍️", t: "مراجعة بشرية", d: "لغة سليمة وجاهزة للاستخدام مباشرة" },
];

export function TrustBar() {
  return (
    <section aria-label="ضماناتنا" className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.t} className="flex items-start gap-3">
            <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-card text-lg shadow-[var(--shadow-card)]">
              {i.icon}
            </span>
            <div>
              <p className="text-sm font-bold">{i.t}</p>
              <p className="mt-1 text-xs leading-6 text-muted-foreground">{i.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
