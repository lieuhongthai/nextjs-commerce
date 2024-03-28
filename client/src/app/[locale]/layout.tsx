// ** React Import
import { ReactNode } from 'react';
import ThemeComponent from '@/@core/theme/ThemeComponent';
import { LayoutTypes } from '@/@core/types/app-routes/type';
import themeComponentConfig from '@/configs/themeComponentConfig';

// ** Config of Mui Offical
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

// ** Config of Tss-React
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
// ** Fake-DB Import

// Can be imported from a shared config
const locales = ['en', 'fr'];

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

type RootLayoutTypes = { children: ReactNode } & LayoutTypes;
export default function LocaleLayout({ children, params: { locale } }: RootLayoutTypes) {
  return (
    <html lang={locale}>
      <head></head>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: 'tss-css' }}>
          <AppRouterCacheProvider>
            <ThemeComponent settings={themeComponentConfig}>{children}</ThemeComponent>
          </AppRouterCacheProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
