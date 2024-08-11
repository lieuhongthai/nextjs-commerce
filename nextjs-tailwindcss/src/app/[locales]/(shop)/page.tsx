import Image from "next/image";
import Logo from "../../../../public/logo-3.svg";
import Carousel from "@/@core/components/carousel";
import Card from "@/@core/components/card";
import Banner from "@/@core/components/banner";
export default function Home() {
  const list = Array.from({ length: 1 }, (_, i) => i + 1);
  return (
    <div className="bg-base-100">
      {/* <div className="bg-base-200 p-5">
        <Carousel slides={[1, 2, 3, 4]} />
      </div> */}

      {/* grid grid-cols-4 col-span-3 gap-4 */}
      {/* <div className="container m-auto ">
        {list.map((index) => (
          <Card key={index} />
        ))}
      </div> */}

      <Banner />
    </div>
  );
}
