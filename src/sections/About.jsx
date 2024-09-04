import { chart } from "../assets/images";

const About = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Cultivating Natures Bounty with
          <span className="text-green-600"> Integrity </span>
          and
          <span className="text-green-600"> Innovation </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          AY Farms was established to create a sustainable and profitable
          agricultural sector. Founded by a group of visionary farmers, we have
          grown to become a leader in large-scale crop farming and agricultural
          support services. Our team is dedicated to innovation and excellence
          in every aspect of our operations.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={chart}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain border"
        />
      </div>
    </section>
  );
};

export default About;
