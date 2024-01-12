import { getDictionary } from "@/get-dictionary";

export default async function Index() {
  const dict = await getDictionary("en"); // en
  return <h1>{dict.eCommerce}</h1>;
}
