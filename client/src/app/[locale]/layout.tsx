// ** React Import
import { LayoutTypes } from '@/@core/types/app-routes/type';
import { ReactNode } from 'react';

// ** Config of Mui Offical
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

// ** Config of Tss-React
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
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
        {/* Config of Mui Offical */}
        {/* <AppRouterCacheProvider>{children}</AppRouterCacheProvider> */}

        {/* Config of Tss-react */}
        <NextAppDirEmotionCacheProvider options={{ key: 'tss-css' }}>{children}</NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
