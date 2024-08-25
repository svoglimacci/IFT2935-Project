import React from 'react';
import '@testing-library/jest-dom/vitest';
import ThemeProvider from '@/providers/ThemeProvider';

type TestWrapperComponentProps = {
  children: React.ReactNode;
};

export const TestWrapperComponent = ({
  children,
}: TestWrapperComponentProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
