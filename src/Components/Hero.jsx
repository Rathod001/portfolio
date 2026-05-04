import React from "react";

export default function Hero() {
  return (
    <section className="shadow-md" id='hero'>
        <div className="block md:flex p-10 " >
          <div className="md:w-3/4">
            <h1>
              Hi &nbsp;I ' am <br />
              <span className="text-2xl md:text-3xl font-bold text-blue-500">
                Mahender Rathod
              </span>
            </h1>
            <h3 className="font-bold">
              Certified Ethical Hacker | Fullstack Developer
            </h3>
            <br />
            <p className="flex">
              A Fullstack Developer with a strong foundation in Cybersecurity
              and Ethical Hacking. Focused on building secure, user friendly,
              and high-performance web applications.
            </p>

            <br />

            <p className="flex">
              A Fullstack Developer with a strong foundation in Cybersecurity
              and Ethical Hacking. Focused on building secure, user friendly,
              and high-performance web applications.
            </p>

                <br />

             <p className="flex">
              A Fullstack Developer with a strong foundation in Cybersecurity
              and Ethical Hacking. Focused on building secure, user friendly,
              and high-performance web applications.
            </p>

          </div>
          <div className="w-full md:w-1/4 p-2">
            <img className="md:h-full md:w-full" src='/Assets/img.png' alt="" />
          </div>
      </div>

      <div>

        <div className="flex justify-center p-5 gap-10">
            <a href='/Assets/Meghavath_Mahender_Rathod.pdf' download>
                <button className="bg-blue-500 rounded text-white p-2 hover:text-blue-950 font-bold">Download Resume</button>
            </a>
            <a href="#contact">
                <button className="bg-blue-500 rounded text-white p-2 hover:text-blue-950 font-bold">Contact Me</button>
            </a>
        </div>
      </div>
    </section>
  );
}
