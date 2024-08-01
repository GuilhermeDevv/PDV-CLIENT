"use client";

import StyledComponentsRegistry from "@/lib/registry";

import GlobalStyle from "@/assets/styles";
import { ThemeProvider } from "styled-components";
import { Menu } from "@/components/Menu";
import light from "@/assets/styles/theme/light";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={light}>
            <Menu />
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
