import { LayoutTypes } from "@/@core/types/app-routes/type";
import { getDictionary } from "@/get-dictionary";

export default async function Index({ params: { locale } }: LayoutTypes) {
  const dict = await getDictionary(locale); // en
  return <h1>{dict["eCommerce"]}</h1>;
}
