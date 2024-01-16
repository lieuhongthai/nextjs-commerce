'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import paletteMui from './palette';
import typographyMui from './typography';
import breakpointMui from './breakpoints';
import transitionMui from './transitions';
import zIndexMui from './zIndex';
import componentMui from './components';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import GlobalStyling from './globalStyles';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '@/@core/utils/create-emotion-cache';
import Shadows from './shadows';
import { ThemeComponentType } from '../types/theme-component/type';

const cache = createEmotionCache();

const ThemeComponent = (props: ThemeComponentType) => {
  // ** Props
  const { settings, children } = props;

  const theme = createTheme(
    {
      breakpoints: breakpointMui(),
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 64,
        },
      },
      components: componentMui(settings),
      palette: paletteMui(settings.mode === 'light' ? 'light' : 'dark'),
      shape: { borderRadius: 10 },
      spacing: (factor: number) => `${0.25 * factor}rem`,
      transitions: transitionMui(),
      typography: palette => typographyMui(palette),
      zIndex: zIndexMui(),
      shadows: Shadows(settings.mode),
    },
    {},
  );

  // ** Render
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={() => GlobalStyling(theme, settings)} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default ThemeComponent;
