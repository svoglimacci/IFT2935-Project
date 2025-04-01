import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Shell from './components/Shell/Shell';
import ThemeProvider from './providers/ThemeProvider';
import './main.module.css';
import Home from './components/Home/Home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Shell>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Shell>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
