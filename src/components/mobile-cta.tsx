import { Link, useRouterState } from "@tanstack/react-router";

export function MobileCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname.startsWith("/order")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-lg md:hidden">
      <Link
        to="/order"
        className="flex items-center justify-center gap-2 rounded-2xl bg-ai-gradient px-6 py-3.5 text-sm font-bold text-primary-foreground"
      >
        اطلب خدمتك الآن — تبدأ من 15 AED
      </Link>
    </div>
  );
}
