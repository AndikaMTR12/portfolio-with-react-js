import React from "react";
import { FaLaravel, FaReact } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      icon: <FaLaravel className="w-full h-8 md:h-10" />,
      title: "Laravel",
      desk: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio vel et reprehenderit cumque. Deleniti iure veniam maiores vitae quod soluta?",
    },
    {
      icon: <FaReact className="w-full h-8 md:h-10" />,
      title: "React JS",
      desk: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio vel et reprehenderit cumque. Deleniti iure veniam maiores vitae quod soluta?",
    },
    {
      icon: <FaReact className="w-full h-8 md:h-10" />,
      title: "React Native",
      desk: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio vel et reprehenderit cumque. Deleniti iure veniam maiores vitae quod soluta?",
    },
  ];
  return (
    <div className="text-center">
      <h1 className="text-center font-bold text-2xl text-blue-700 py-5">
        SERVICES
      </h1>
      <h1 className="text-2xl md:text-4xl font-bold">
        Expertise Service! Let's Check It Out
      </h1>
      <p className="md:mx-5 lg:mx-10 md:mx-40 mb-10 text-sm md:text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        culpa facere. Aspernatur harum dolor nemo doloremque iste laborum quis
        saepe provident temporibus ipsa quam molestiae quibusdam laudantium quae
        fuga, doloribus eaque, dicta corporis inventore? Quaerat velit possimus
        voluptatem quas, ex maiores, obcaecati deleniti a corrupti, sit iusto
        deserunt suscipit ab.
      </p>
      <div className="md:grid md:grid-cols-3 md:gap-4 lg:mx-20  px-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex justify-center items-center py-10 md:w-full lg:h-64 my-5 md:m-0 lg:m-10 bg-gray-200 rounded-xl hover:bg-blue-700 hover:text-white hover:scale-105 cursor-pointer duration-700"
          >
            <span>
              {service.icon}
              <h1 className="font-bold text-xl md:text-2xl">{service.title}</h1>
              <p className="mx-20 text-sm md:text-xl">{service.desk}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
