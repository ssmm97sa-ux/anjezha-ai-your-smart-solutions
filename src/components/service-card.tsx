import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="surface-card flex h-full flex-col rounded-3xl p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-2xl">
          {service.icon}
        </span>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
          {service.delivery}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.desc}</p>

      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {service.points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 text-accent">◆</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
        <div>
          <span className="block text-xs text-muted-foreground">تبدأ من</span>
          <span className="text-xl font-bold">
            {service.price} <span className="text-sm text-muted-foreground">AED</span>
          </span>
        </div>
        <Link
          to="/order"
          search={{ service: service.id }}
          className="rounded-xl bg-navy-gradient px-4 py-2.5 text-sm font-semibold text-navy-foreground transition-transform hover:-translate-y-0.5"
        >
          اطلب الخدمة
        </Link>
      </div>
    </article>
  );
}
