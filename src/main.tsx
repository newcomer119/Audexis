import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import './styles/animations.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import favicon from './Audexis2.png'


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

// You can set it programmatically if needed
const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
if (link) {
    link.href = favicon;
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);