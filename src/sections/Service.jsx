import { services } from "../constants";
import { ServiceCard } from "../components";

const Service = () => {
  return (
    <section id="service" className="max-container max-sm:mt-12">
      <div className="flex flex-col text-center">
        <h2 className="font-palanquin text-center text-4xl font-bold">
          Our <span className="text-green-500"> Services </span>
        </h2>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          - AY Farms was established to create a sustainable and profitable
          agricultural sector. Founded by a group of visionary farmers, we have
          grown to become a leader in large-scale crop farming and agricultural
          support services.
        </p>
      </div>

      {/* <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-25">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div> */}
    </section>
  );
};

export default Service;
