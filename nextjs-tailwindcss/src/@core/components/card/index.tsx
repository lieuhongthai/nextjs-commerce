import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

const Card = () => {
  const currentDate = dayjs().format("YYYY-MM-DD");
  return (
    <div className="card glass card-bordered card-compact w-full lg:card-side">
      <figure className="p-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Life hack</h2>
        <p>
          How to park your car at your garage? How to park your car at your
          garage?
        </p>
        <div className="card-actions flex-col">
          <div className="flex justify-between items-center w-full">
            <a className="link link-primary whitespace-nowrap overflow-hidden text-ellipsis">
              I&apos;m a simple link
            </a>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
              {currentDate}
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <a className="link link-primary whitespace-nowrap overflow-hidden text-ellipsis">
              I&apos;m a simple link
            </a>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
              {currentDate}
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <a className="link link-primary whitespace-nowrap overflow-hidden text-ellipsis">
              I&apos;m a simple link
            </a>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
              {currentDate}
            </span>
          </div>

          <button className="btn btn-primary btn-sm">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
