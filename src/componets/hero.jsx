import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[400px] mx-20 text-white">
      <div className="md:grid md:grid-cols-2 w-full md:gap-4">
        <div>
          <h1 className="text-2xl md:text-[30px] font-bold mb-4">
            Hello, I'm <br /> Andika An <br /> Web Developer
          </h1>
          <p className="text-justify opacity-70 text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis
            totam unde labore mollitia asperiores expedita, quam odio
            exercitationem sunt.
          </p>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center hover:scale-125 duration-700">
          <img src="gambar 1.png" alt="hero" className="h-60" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
