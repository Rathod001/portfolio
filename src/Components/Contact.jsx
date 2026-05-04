import React from "react";

export default function Contact() {
  return (
    <section className="shadow-md py-5 " id="contact">
        <div className="flex justify-center text-2xl font-bold py-5 text-blue-950">
          <h1>Contact</h1>
        </div>
          <div className="md:flex justify-around w-full">
              <div className=" md:w-1/2 text-xl px-10">
                <h2>
                  I'm open to
                  <br />
                  <span className="text-2xl font-bold text-blue-500">
                    Cybersecurity
                  </span>
                  &nbsp; and <br />
                  <span className="text-2xl font-bold text-blue-500">
                    Fullstack Developer
                  </span>
                  &nbsp; opportunities.
                </h2>
                <br />
                <h2> Feel free to </h2>
                <h2>
                  contact for interships, <br />
                  full-time roles, projects and collabarations.
                </h2>
              </div>
            <div className="block mx-10 md:flex text-blue-500 md:mx-0 my-10">
                <ul className="contact-list">
                  <li className="hover:text-blue-950">
                    <i className="fa-regular fa-envelope"></i>
                    <a
                      href="mailto:yourmail@gmail.com?subject=Contact%20Request&body=Hello%20Mahender,%0AI%20want%20to%20connect%20with%20you."
                      className="mx-5"
                    >
                      Send Mail
                    </a>
                  </li>
                  <li className="py-2 cursor-pointer hover:text-blue-950">
                    <i className="fa-brands fa-square-linkedin"></i>
                    <a href="https://www.linkedin.com/in/mahender-rathod-822021239" className="mx-5">
                      {/* https://www.linkedin.com/in/mahender-rathod-822021239 */}
                      LinkedIn
                    </a>
                  </li>
                  <li className="cursor-pointer hover:text-blue-950">
                    <i className="fa-brands fa-github"></i>
                    <a href="https://github.com/Rathod001/" className="mx-5">
                      {/* https://github.com/Rathod001/ */}
                      Github
                    </a>
                  </li>
                  <li className="py-2 cursor-pointer hover:text-blue-950">
                    <i className="fa-solid fa-location-dot"></i>
                      <a href="https://maps.app.goo.gl/8DZfxq6tWVyNErRF6" className="mx-5">Hyderabad, Telangana</a>
                  </li>
                </ul>
              </div>
            </div>
    </section>
  );
}
