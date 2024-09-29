'use client';

import React, { useEffect, useState } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/assets/styles';

import { ThemeProvider } from 'styled-components';
import { Menu } from '@/components/Menu';
import light from '@/assets/styles/theme/light';
import { usePathname, useRouter } from 'next/navigation';
import { authenticateUser } from '@/lib/auth';
import { httpClientFactory } from '@/adapters';
import { create } from 'zustand';
import { useStore, useStoreIsAuthenticated } from '@/lib/store';

interface StoreState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const setIsLoading = useStore(state => state.setIsLoading);
  const { isAuthenticated, setIsAuthenticated } = useStoreIsAuthenticated(
    state => state
  );

  useEffect(() => {
    setIsLoading(true);
    async function authenticate() {
      const client = httpClientFactory();
      const authenticated = await authenticateUser({ client });
      if (!authenticated) {
        setIsLoading(false);
        router.push('/');
      } else {
        setIsAuthenticated(true);
        setIsLoading(false);
        if (pathname === '/') {
          router.push('/dashboard');
        }
      }
    }

    authenticate();
  }, [pathname]);

  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={light}>
            {isAuthenticated && pathname !== '/' && <Menu />}
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
