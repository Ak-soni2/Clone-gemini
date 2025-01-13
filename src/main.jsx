import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ContextProvider from './context/Context.jsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );
} else {
  console.error('Root element not found');
}