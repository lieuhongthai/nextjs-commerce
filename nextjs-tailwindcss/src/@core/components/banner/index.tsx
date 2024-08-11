import React from "react";
import Image from "next/image";
import BannerImage from "../../../../public/banner.png";
import BannerImage1 from "../../../../public/banner1.webp";

const Banner = () => {
  return (
    <div className="container m-auto">
      <div className="card bg-base-200 m-5 flex flex-row-reverse justify-between sm<:flex-col">
        <div className="col-span-6">
          <div className="relative w-96 h-96">
            <Image
              src={BannerImage1}
              alt="Baby Collection"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <article className="prose">
            <h1 className="">Baby Collection </h1>
            <p>
              Description: garlic bread with cheese to their children, with the
              food earning such an iconic status in our culture that kids will
              often dress up as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Banner;
