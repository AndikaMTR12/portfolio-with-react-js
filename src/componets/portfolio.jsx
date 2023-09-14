import React from "react";

const Portfolio = () => {
  const images = [
    { gambar: "gambar 3.png" },
    { gambar: "gambar 4.png" },
    { gambar: "gambar 5.jpg" },
    { gambar: "gambar 6.jpg" },
    { gambar: "gambar 7.jpg" },
    { gambar: "gambar 8.jpg" },
  ];
  return (
    <div className="text-center">
      <h1 className="font-bold md:text-2xl text-blue-700">Portfolio</h1>
      <h1 className="text-2xl md:text-4xl font-bold">
        Digital Product Showcases
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 md:mx-20 gap-2 md:gap-4 py-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center hover:scale-105 duration-700 bg-gray-200 h-[220px]"
          >
            <img
              src={image.gambar}
              alt={image.gambar}
              className="w-full h-full p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
