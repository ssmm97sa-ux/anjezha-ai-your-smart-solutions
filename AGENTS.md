<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep legacy and creator catalogs separately exported, with a combined catalog for order selection, so adding a category does not replace existing services.
- Resolve payment URLs only through the explicit per-service map; services without a configured URL accept an email inquiry without charging or redirecting to a different tier.
- Share creator catalog, scope, examples and FAQ sections between the homepage and creator category route to keep deliverables consistent.
