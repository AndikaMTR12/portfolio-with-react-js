import React from "react";

const Subscribe = () => {
  return (
    <div className="">
      <div className="md:grid md:grid-cols-2 bg-blue-700 h-[250px] md:h-[300px]">
        <div className="flex justify-center items-center sm:pb-10">
          <h1 className="text-white">
            Subscribe <br />
            <span className="text-2xl">
              Subcribe To Get Latest <br />
              Update From Us
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="gambar 1.png"
            alt=""
            className="w-[200px] md:w-[300px] hover:scale-105 duration-700"
          />
        </div>
      </div>
      <footer className="text-center">
        <p>© Copyright Andika 2023 | All Rights Reserved |</p>
      </footer>
    </div>
  );
};

export default Subscribe;
