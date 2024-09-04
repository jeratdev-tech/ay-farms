import { Outlet } from "react-router-dom";
import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  Service,
  Milestones,
  Gallery,
  About,
  Contact,
  Faq,
} from "./sections";
import ServicesList from "./sections/ServicesList";

const Layout = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding">
        <Service />
      </section>
      <section className="">
        <ServicesList />
      </section>
      <section className="padding">
        <Gallery />
      </section>
      <section className="padding-x py-10">
        <Milestones />
      </section>
      <section className="bg-green-200 padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Faq />
      </section>
      <section className="padding">
        <Contact />
      </section>
      <section className="bg-green-700 padding-x padding-t pb-8">
        <Footer />
      </section>
      <Outlet /> {/* This will render the specific page based on the route */}
    </main>
  );
};

export default Layout;
