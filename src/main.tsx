import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import './index.css';
import App from './App.tsx';
import ReactGA from 'react-ga4';
const gaId = import.meta.env.VITE_GA_ID;
ReactGA.initialize(gaId);
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
