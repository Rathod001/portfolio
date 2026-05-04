import React from "react";

export default function Certifications() {
  return (
    <section className="shadow-md py-5" id="certifications">

      <h1 className="text-center text-blue-950 font-bold p-5 text-2xl">
        Certifications
      </h1>

      <div className="w-full md:flex justify-center">

        {/* CEH */}
        <div className="w-full md:w-1/3 text-center">
          <h2 className="font-bold">Certified Ethical Hacker [CEH]</h2>
          <h4>by EC-Council</h4>

          <a
            href="/Assets/Meghavath_Mahender_Rathod.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 rounded text-white p-2 my-4 hover:bg-blue-600">
              View Certificate
            </button>
          </a>
        </div>

        {/* CEH Practical */}
        <div className="w-full md:w-1/3 text-center">
          <h2 className="font-bold">CEH Practical</h2>
          <h4>by EC-Council</h4>

          <a
            href="/Assets/CEHP.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 rounded text-white p-2 my-4 hover:bg-blue-600">
              View Certificate
            </button>
          </a>
        </div>

        {/* Fullstack */}
        <div className="w-full md:w-1/3 text-center">
          <h2 className="font-bold">Fullstack Development</h2>
          <h4>by Udemy</h4>

          <a
            href="/Assets/fullstack.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 rounded text-white p-2 my-4 hover:bg-blue-600">
              View Certificate
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}