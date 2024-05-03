import React from "react";

import massage from "../../assets/oilbased.jpg";

const AboutModalcontent = () => {
  return (
    <div className="about w-full h-screen flex justify-center items-center relative bg-slate-950">
      <div className="content my-0 mx-auto flex flex-wrap items-center justify-around relative">
        <div className="text max-w-full w-[550px] my-0 mx-5 px-5 border-2 border-solid border-amber-50">
          <h5 className=" text-3xl uppercase tracking-wider mb-5 font-bold text-amber-50">
            5l solutions supply & <br />
            allied service corp.
          </h5>
          <p className="leading-7 text-justify text-sm tracking-wide text-amber-50">
            The Company was formed as a Corporation in September 29, 2015.
            Although still a young company at the present time, it has serviced
            a sizeable number of residences and stores during the first year of
            operations, with a workforce of twenty (20) skilled and professional
            personnel over 200 stores initially, located in the Luzon and
            Visayas Region of the Philippines. Now, our company has increased to
            more than 100 employees and over 2000 stores and companies
            nationwide. providing technical equipment and services in the field
            of Information Technology in offices, residences, companies and
            manufacturing organization across various industries. Subsequent to
            service engagement, the Company has the capability to design,
            install and repair electronic and electrical powered devices or
            equipment such as CCTV, cable, air conditioning, system, security
            system customized to Customer requirement.
          </p>
        </div>
        <img
          src={massage}
          alt="mr. bagapuro"
          className="max-w-full h-[490px] w-[500px] border-solid border-2 border-amber-50"
        />
      </div>
    </div>
  );
};

export default AboutModalcontent;
