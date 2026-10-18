import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function MobileCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname.startsWith("/order")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-lg md:hidden">
      <Button asChild className="h-auto w-full whitespace-normal rounded-lg px-5 py-3 font-bold"><Link
        to="/order"
        search={{ service: "youtube-publish" }}
      >
        جهّز فيديوك للنشر — 19 AED
      </Link></Button>
    </div>
  );
}
