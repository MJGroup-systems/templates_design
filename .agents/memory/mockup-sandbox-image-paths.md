---
name: Mockup sandbox image paths
description: Why hardcoded absolute image paths break in mockup-sandbox components, and the correct pattern.
---

The mockup-sandbox artifact's vite dev server runs with a non-root BASE_PATH (e.g. `/__mockup`), configured via `vite.config.ts`'s `base`. Static assets in `public/` are served under that same base path when accessed through the proxy.

Any component that hardcodes an absolute image path like `src="/images/foo.jpg"` or `src="/foo.jpg"` (without the base prefix) will 404 in the browser, because the request bypasses the artifact's path prefix and hits the shared proxy root instead.

**Why:** Discovered when parallel subagents building 10 different mockup components each used inconsistent image path conventions (`/generated/...`, `/images/...`, `/attached_assets/generated_images/...`, bare filenames) — most were broken under the proxy, and some referenced images that were never copied into this artifact's `public/` folder at all (found instead in the workspace-root `attached_assets/generated_images/`).

**How to apply:** When building/reviewing mockup-sandbox components, always prefix image src paths with the artifact's base path explicitly (`/__mockup/images/...`) or compose it from `import.meta.env.BASE_URL`. Verify referenced files actually exist under `artifacts/mockup-sandbox/public/` before trusting a subagent's report that images were generated correctly — check with a screenshot + browser console, not just the subagent's claim.
