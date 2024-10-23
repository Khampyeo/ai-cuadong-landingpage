const TrustedByCompanies = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div>
        <h2 className="text-primary text-3xl font-bold mb-6 text-center">
          Trusted by Companies
        </h2>
        <div className="flex gap-8 justify-center items-center flex-wrap">
          <img alt="" src={"/cmc.svg"} className="h-10" />
          <img alt="" src={"/info-logistics.svg"} className="h-8" />
          <img alt="" src={"/fpt.png"} className="h-20" />
          <img alt="" src={"/digitexx.png"} className="h-20" />
        </div>
      </div>
    </section>
  );
};

export default TrustedByCompanies;
