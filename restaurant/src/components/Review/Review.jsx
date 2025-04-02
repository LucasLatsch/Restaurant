import React from "react";
import { REVIEW } from "../../constants";
import xaviour from "../../assets/xaviour.jpeg";
import customer1 from "../../assets/customer1.jpeg";
import customer2 from "../../assets/customer2.jpeg";
import customer3 from "../../assets/customer3.jpeg";
import customer4 from "../../assets/customer4.jpeg";

const Review = () => {
  return (
    <section id="review" className="container mx-auto mb8 mt-12">
      <div className="flex flex-col">
        <p className="mv-10 text-3xl font-light leading-normal tracking-tighter p-4 lg:mx-40 lg:mt-40 lg:text-[3.5rem]">
          {REVIEW.content}
        </p>
        <div className="flex items-center justify-center gap-6">
          <img
            src={xaviour}
            width={80}
            height={80}
            alt={REVIEW.name}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <img
            key={index}
            src={customer}
            alt="customer"
            className="h-[300px] w-[200px] rouded-tl-3xl object-cover"
          ></img>
        ))}
      </div>
    </section>
  );
};

export default Review;
