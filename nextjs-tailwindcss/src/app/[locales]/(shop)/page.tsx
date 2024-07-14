import Image from "next/image";
import Logo from "../../../../public/logo-3.svg";
import Carousel from "@/@core/components/carousel";
export default function Home() {
  return (
    <div className="bg-base-100">
      <Carousel slides={[1, 2, 3, 4]} />
    </div>
  );
}
