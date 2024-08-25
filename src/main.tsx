import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Shell from './components/Shell/Shell';
import { ThemeProvider } from './providers/ThemeProvider';
import './main.module.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Shell>
        <h1>Hello, world!</h1>
      </Shell>
    </ThemeProvider>
  </StrictMode>,
);
