import React from "react";

const Footer = () => {
  return (
    <>
    <hr/>
      <div className="max-w-[1240] text-sm lg:text-xl py-4 mx-auto grid lg:grid-cols-3 gap-3 items-center">
        <div className="w-full mx-auto items-center text-center lg:flex lg:text-left">
          <h1 className="mx-4 px-5 lg:text-3xl font-semibold  text-[#a3e635] font-serif ">
            ToDo
          </h1>
          <p className="mx-4 px-5 italic text-[#a1a1aa] "> Make a simple ToDo</p>
        </div>
        <div className="lg:col-span-2 flex text-[#a1a1aa] justify-around">
          <div className="">
            <h3 className=" text-center"> Contact</h3>
            <p> 9999999999</p>
          </div>
          <div className="">
            <h3 className="text-center"> Email</h3>
            <p> todos.official@gmail.com</p>
          </div>
        </div>      
      </div>
      <hr/>
      <p className="text-center py-3 text-[#a1a1aa]"> @Copyright-All rights reserved</p>  
    </>
  );
};

export default Footer;
