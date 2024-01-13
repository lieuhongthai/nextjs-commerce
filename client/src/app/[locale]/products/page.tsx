import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

interface Props {
  params: { locale: Locale };
}
export default async function Index({ params: { locale } }: Props) {
  const dict = await getDictionary(locale); // en
  return <h1>{dict.eCommerce}</h1>;
}
