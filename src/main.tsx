import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App, { preloadRoute } from './App.tsx';
import './index.css';

// Zuerst den Code der aktuellen Seite laden: Bis dahin bleibt das vorgerenderte HTML stehen,
// danach ersetzt React es ohne Platzhalter und ohne Layoutsprung.
preloadRoute(window.location.pathname).finally(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
