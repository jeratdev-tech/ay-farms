const ServiceCard = ({ label, subtext, subtext1, subtext2 }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <ul className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        <li>{subtext}</li>
        <li>{subtext1}</li>
        <li>{subtext2}</li>
      </ul>
      {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray"></p> */}
    </div>
  );
};

export default ServiceCard;
