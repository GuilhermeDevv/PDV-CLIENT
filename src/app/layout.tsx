"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { Title } from "@/components/Title";
import GlobalStyle from "@/assets/styles";
import { ThemeProvider } from "styled-components";
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
            <Title />
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
