import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import './styles/animations.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

// Set the favicon programmatically
const favicon = '/favicon.ico'; // Path to favicon in public folder
const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

if (link) {
  link.href = favicon;
} else {
  // Create a new link element if not already present
  const newLink = document.createElement('link');
  newLink.rel = 'icon';
  newLink.href = favicon;
  document.head.appendChild(newLink);
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
