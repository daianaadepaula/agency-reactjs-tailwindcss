import React from "react";

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "./src/assets/membership.svg",
    },
    {
      id: 1,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "./src/assets/association.svg",
    },
    {
      id: 1,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "./src/assets/group-club.svg",
    },
  ];

  return (
    <section
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto"
      id="service"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients.
        </p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="./src/assets/company1.svg" alt="Logo das empresas" />
          <img src="./src/assets/company2.svg" alt="Logo das empresas" />
          <img src="./src/assets/company3.svg" alt="Logo das empresas" />
          <img src="./src/assets/company4.svg" alt="Logo das empresas" />
          <img src="./src/assets/company5.svg" alt="Logo das empresas" />
          <img src="./src/assets/company6.svg" alt="Logo das empresas" />
          <img src="./src/assets/company7.svg" alt="Logo das empresas" />
        </div>
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            key={service.id}
          >
            <div>
              <div className="bg-[#d9dbe9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img className="-ml-5" src={service.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
