# Our Little Universe

A local-first React, TypeScript and React Three Fiber point-and-click adventure. No third-party art, audio, models, or music are included; all stylized scene art is original low-poly geometry and CSS.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run test
npm run build
```

### Windows PowerShell clean verification

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
npm run lint
npm run test
npm run build
```

## Personalize

Edit `src/config/personalization.ts`. This is the only location for nickname, letters, quiz questions, rewards, wheel rule, playlist copy/URL, star messages, dialogue, feature flags, optional paths, and final letter. Empty relationship-specific fields intentionally remain editable rather than claiming invented memories.

Use a full `https://open.spotify.com/...` URL for `playlistUrl`; otherwise the gift keeps its in-world under-construction state.

## Storage and reset

Adventure data is stored in localStorage under `little-universe-26`, validated and versioned by `src/state/persistence.ts`. Reset Adventure clears adventure progress safely. Settings should be retained independently when expanded.

## Deployment

Use Vercel/Netlify's Vite preset: build command `npm run build`, publish directory `dist`.
