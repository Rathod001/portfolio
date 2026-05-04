import React from "react";

export default function Projects(props) {
  return (
    <section className="shadow-md py-5" id="skills">
      <div className=" w-full flex text-2xl font-bold justify-center py-5 text-blue-950 ">
        <h1>Skills</h1>
      </div>
      <div className=" block md:flex w-full px-10 ">
        <div className="w-full md:w-1/2">
          <h2 className="p-2 flex justify-center text-xl font-bold text-blue-950 md:p-0">
            Cybersecurity Skills
          </h2>
          <ul className="">
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              {props.skill1}
            </li>
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              {props.skill2}
            </li>
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              {props.skill3}
            </li>
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              {props.skill4}
            </li>
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              {props.skill5}
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 ">
          <h2 className="p-2 flex justify-center font-bold text-xl text-blue-950 md:p-0" >Developer Skills</h2>
           <ul className="items-center">
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              Frontend: HTML, CSS, Java Script, ReactJs
            </li>
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              Backend: NodeJs, MangoDB, ExpressJs
            </li>
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              Programming: Python
            </li>
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              {props.skill4}
            </li>
            <li className="flex justify-center bg-blue-500 p-2 text-white rounded m-1 hover:font-bold hover:text-blue-950 cursor-pointer">
              {props.skill5}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
