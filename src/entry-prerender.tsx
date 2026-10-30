// Einstieg für das Prerendering beim Build (scripts/prerender.mjs). Wird nur serverseitig gebaut
// (vite build --ssr) und landet nicht im Browser-Bundle.
import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import App from './App.tsx';

export { buildHeadTags } from './components/SEOHead';
export { indexablePaths, parseRoute } from './lib/routes';

/** Rendert die App für den Pfad in window.location.pathname (setzt scripts/prerender.mjs). */
export async function render(): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
