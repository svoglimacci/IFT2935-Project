import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/Button/Button';
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
            <Route
              path="/1"
              element={
                <div>
                  <Button>Button Primary</Button>
                </div>
              }
            />
            <Route
              path="/2"
              element={
                <div>
                  <Button variant="secondary">Button Secondary</Button>
                </div>
              }
            />
            <Route
              path="/3"
              element={
                <div>
                  <Button variant="text">Button Link</Button>
                </div>
              }
            />
          </Routes>
        </Shell>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
