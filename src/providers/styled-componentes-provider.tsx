import { ReactNode } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import light from '@/assets/styles/theme/light';
import StyledComponentsRegistry from '@/lib/registry';
import isPropValid from '@emotion/is-prop-valid';

function StyledComponentsProvider({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </StyleSheetManager>
    </StyledComponentsRegistry>
  );
}

export { StyledComponentsProvider };
