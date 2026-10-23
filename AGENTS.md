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

- Use Lovable Assets JSON pointers for uploaded site media; keep the favicon as a downscaled raster in public so browser icon requests resolve directly.
- Keep decorative page backgrounds in CSS and inline SVG, separate from supplied logos and future screenshot assets, so visual styling does not depend on game artwork.
