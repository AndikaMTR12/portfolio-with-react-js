import React from "react";

const AboutMe = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-blue-700 py-10">
        ABOUT ME
      </h1>
      <div className="md:grid md:grid-cols-2">
        <div className="flex justify-center items-center">
          <img
            src="gambar 2.png"
            alt="about-me"
            className="w-60 md:w-80 hover:scale-105 md:hover:scale-125 duration-700"
          />
        </div>
        <div className="md:flex md:justify-center md:items-center text-justify px-2">
          <p className="md:text-2xl p-4">
            Lulusan Halu Oleo jurusan Matematika Program Studi Ilmu Komputer.
            Memiliki kemampuan yang sangat baik dalam menggunkan laravel dalam
            membuat suatu sistem informasi. Sedang mencari pekerjaan untuk
            menjadi seorang web developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
