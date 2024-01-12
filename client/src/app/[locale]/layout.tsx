import { ReactNode } from "react";

// Can be imported from a shared config
const locales = ["en", "fr"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  console.log(12005, "LocaleLayout: ", locale);

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
