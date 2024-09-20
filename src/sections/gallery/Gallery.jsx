import { product } from "../../assets/images";
import { Link } from "react-router-dom";

// import GalleryPage from "../gallery/GalleryPage";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex flex-1 flex-col my-14">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-green-600">Gallery</span>
        </h2>
        <p className="mt-9 info-text">
          <span className="font-bold">New technologies</span> are transforming
          agriculture, with advances such as the New Holland T4 Electric Utility
          Tractor, which features autonomous driving and advanced safety
          features. Additionally, AGCO’s AFS Connect system allows for precise
          tillage prescriptions to improve soil health and optimize farming
          operations. Innovations like these are pushing the boundaries of
          efficiency and sustainability in farming
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <button className="py-4 px-8 bg-green-700 text-white rounded cursor-pointer font-bold text-lg">
            <Link to="/gallerypage">Gallery</Link>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={product}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full rounded-lg"
        />
      </div>
    </section>
  );
};

export default Gallery;
