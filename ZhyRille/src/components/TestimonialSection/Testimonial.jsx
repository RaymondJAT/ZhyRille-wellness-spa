import React from "react";

const Testimonial = () => {
  return (
    <div className="container relative w-full min-h-72 ">
      <div className="contents-wrapper w-[70%] min-h-inherit my-7 mx-auto text-center">
        <section className="header">
          <h1 className="relative text-4xl uppercase font-bold text-center tracking-wide before:contents before:w-[200px] before:h-[2px] before:bg-yellow-500 before:rounded-lg before:absolute before:left[50%] before:translate-x-1/2 before:-bottom-2.5">
            Testimonial
          </h1>
        </section>

        <section className="testRow w-full min-h-inherit relative overflow-hidden">
          <div className="testItem w-full h-full absolute flex justify-center items-center flex-col">
            <h3 className="text-xl italic p-2">Name here</h3>
            <h4 className="italic">Lorem ipsum dolor</h4>
            <p className="text-sm tracking-wide p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              aperiam distinctio ea unde eligendi exercitationem nam animi ex
              quis aliquam!
            </p>
          </div>
        </section>

        <section className="indicators absolute bottom-8 left-[50%] translate-x-1/2 p-1 cursor-pointer">
          <div
            className="dot w-4 h-4 my-0 mx-1 border-3 border-solid border-gray-400 rounded-[50%] inline-block transition-colors duration-150 ease-in active bg-yellow-500"
            attr="0"
            onClick="switchText(this)"
          ></div>
          <div
            className="dot w-4 h-4 my-0 mx-1 border-3 border-solid border-gray-400 rounded-[50%] inline-block transition-colors duration-150 ease-in active bg-yellow-500"
            attr="1"
            onClick="switchText(this)"
          ></div>
          <div
            className="dot w-4 h-4 my-0 mx-1 border-3 border-solid border-gray-400 rounded-[50%] inline-block transition-colors duration-150 ease-in active bg-yellow-500"
            attr="2"
            onClick="switchText(this)"
          ></div>
          <div
            className="dot w-4 h-4 my-0 mx-1 border-3 border-solid border-gray-400 rounded-[50%] inline-block transition-colors duration-150 ease-in active bg-yellow-500"
            attr="3"
            onClick="switchText(this)"
          ></div>
          <div
            className="dot w-4 h-4 my-0 mx-1 border-3 border-solid border-gray-400 rounded-[50%] inline-block transition-colors duration-150 ease-in active bg-yellow-500"
            attr="4"
            onClick="switchText(this)"
          ></div>
        </section>
      </div>

      <script src=""></script>
    </div>
  );
};

export default Testimonial;
