'use client';

// NATIVE
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Titillium_Web } from 'next/font/google';

// COMPONENTS
import { Menu } from '@/components/Menu';
import { MenuLoading } from '@/components/MenuLoading';

// ASSETS
import GlobalStyle from '@/assets/styles';

// LIBS
import { authenticateUser } from '@/lib/auth';

// ADPTERS
import { httpClientFactory } from '@/adapters';

// STORE
import { useStore, useStoreIsAuthenticated } from '@/lib/store';

// PROVIDERS
import { StyledComponentsProvider, TanstackProvider } from '@/providers';

// FONTS
const titillium_Web = Titillium_Web({
  weight: ['200', '300', '400', '600', '700', '900'],
  display: 'optional',
  preload: true,
  style: ['normal', 'italic'],
  subsets: ['latin-ext'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = httpClientFactory();
  const pathname = usePathname();
  const router = useRouter();

  const { setIsLoading } = useStore(state => state);
  const { isAuthenticated, setIsAuthenticated } = useStoreIsAuthenticated(
    state => state
  );

  useEffect(() => {
    setIsLoading(true);
    async function authenticate() {
      const authenticated = await authenticateUser({ client });
      setIsLoading(false);
      if (!authenticated) return router.push('/');
      setIsAuthenticated(true);
      if (pathname === '/') router.push('/dashboard');
    }
    authenticate();
  }, [pathname]);

  return (
    <html lang="pt-br">
      <body className={titillium_Web.className}>
        <TanstackProvider>
          <StyledComponentsProvider>
            {isAuthenticated && pathname !== '/' && <Menu />}
            {!isAuthenticated && pathname !== '/' && <MenuLoading />}
            {children}
            <GlobalStyle />
          </StyledComponentsProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
