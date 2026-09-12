import { Link } from "@tanstack/react-router";
import { getService } from "@/lib/services";

export function CvPromo() {
  const cv = getService("cv");
  if (!cv) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <div className="surface-card relative overflow-hidden rounded-3xl border border-accent/20">
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-ai-gradient" />

        <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              <span aria-hidden className="h-2 w-2 rounded-full bg-glow" />
              {cv.offerLabel}
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-4xl">
              CV احترافي بـ{" "}
              <span className="text-ai-gradient">{cv.price} درهم</span> بدل{" "}
              <del className="text-muted-foreground line-through decoration-2">
                {cv.previousPrice} درهم
              </del>
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
              نحسن المحتوى والصياغة، ننسقها بشكل احترافي، ونسلمك PDF جاهز
              للتقديم مع تعديل مجاني.
            </p>

            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {cv.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm">
                  <span
                    aria-hidden
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs text-accent"
                  >
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-secondary/60 p-6 text-center">
            <span className="text-sm text-muted-foreground">السعر بعد الخصم</span>
            <div className="mt-2 flex items-baseline justify-center gap-3">
              <span className="text-4xl font-bold text-ai-gradient">
                {cv.price}{" "}
                <span className="text-lg font-semibold">AED</span>
              </span>
              <del className="text-lg text-muted-foreground line-through decoration-2">
                {cv.previousPrice} AED
              </del>
            </div>

            <Link
              to="/order"
              search={{ service: cv.id }}
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-ai-gradient px-6 py-4 text-base font-bold text-primary-foreground ai-glow transition-transform hover:-translate-y-0.5"
            >
              اطلب سيرتك الآن – 19 AED
            </Link>

            <p className="mt-3 text-xs text-muted-foreground">
              الدفع الآمن عبر Ziina — بدون رسوم مخفية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
