import React from "react";

export default function Projects(props) {
  return (
    <>
      <section className="shadow-md p-5" id="projects">
        <div className="">
          <div className="flex font-bold text-2xl p-5 justify-center text-blue-950">
            <h1>Projects and Publications</h1>
          </div>
          <div className="">
            <ul className="w-full px-5">
              <li className="p-4 my-5 rounded flex  justify-center font-bold bg-blue-500 text-white hover:text-blue-950 hover:scale-103 cursor-pointer">{props.project1}</li>
              <li className="p-4 my-5 rounded flex  justify-center font-bold bg-blue-500 text-white hover:text-blue-950 hover:scale-103 cursor-pointer">{props.project2}</li>
              <li className="p-4 my-5 rounded flex  justify-center font-bold bg-blue-500 text-white hover:text-blue-950 hover:scale-103 cursor-pointer">{props.project3}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
