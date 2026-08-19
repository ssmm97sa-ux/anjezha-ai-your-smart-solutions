import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-gradient text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ai-gradient text-lg font-bold">
              أ
            </span>
            <span className="text-lg font-bold">أنجزها AI</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-navy-foreground/70">
            خدمات رقمية مدعومة بالذكاء الاصطناعي ومراجعة بشرية، من دبي إلى كل
            العالم العربي.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">الخدمات</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li>
              <Link to="/services">السيرة الذاتية</Link>
            </li>
            <li>
              <Link to="/services">الإيميلات والخطابات</Link>
            </li>
            <li>
              <Link to="/services">التلخيص وإعادة الصياغة</Link>
            </li>
            <li>
              <Link to="/services">الترجمة وكتابة المحتوى</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">الشركة</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li>
              <Link to="/about">من نحن</Link>
            </li>
            <li>
              <Link to="/faq">الأسئلة الشائعة</Link>
            </li>
            <li>
              <Link to="/contact">تواصل معنا</Link>
            </li>
            <li>
              <Link to="/order">اطلب الآن</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">قانوني</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li>
              <Link to="/privacy">سياسة الخصوصية</Link>
            </li>
            <li>
              <Link to="/terms">الشروط والأحكام</Link>
            </li>
          </ul>
          <p className="mt-6 text-sm text-navy-foreground/70">
            الأسعار بالدرهم الإماراتي (AED)
          </p>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} أنجزها AI — دبي، الإمارات العربية المتحدة.
          جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
