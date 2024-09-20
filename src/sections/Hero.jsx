import { useState } from "react";

import { shoes, statistics } from "../constants";
import { ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container mb-28 pt-[-20]"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x">
        <h1 className="mt-10 font-palanquin xl:bg-white text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">
            Welcome to AY Farms - Where
          </span>
          <br />
          <span className="text-green-600 inline-block mt-3">
            Innovation
          </span>{" "}
          Meets Agriculture
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          At AY Farms, we pride ourselves on offering a diverse range of
          high-quality services designed to meet the needs of our community and
          clients.
        </p>

        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex mt-10 md:rounded-full lg:rounded-full xl:rounded-full justify-center items-center  xl:min-h-screen max-xl:py-80 bg-primary bg-hero bg-cover bg-center">
        {/* <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={410}
          height={302}
          className="object-contain relative z-10"
        /> */}

        <div className="flex sm:gap-6 gap-4 absolute bottom-[3%]  sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
