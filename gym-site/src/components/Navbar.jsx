import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-800 px-5 md:px-10 py-5 flex items-center justify-between">
      
      {/* LOGO */}
      <h1 className="text-yellow-400 text-3xl md:text-5xl font-extrabold leading-tight">
        ELSIA <br /> GYM
      </h1>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex gap-10 text-white font-semibold text-lg">
        <a href="#home" className="hover:text-yellow-400 duration-300">Home</a>
        <a href="#programs" className="hover:text-yellow-400 duration-300">Programs</a>
        <a href="#pricing" className="hover:text-yellow-400 duration-300">Pricing</a>
        <a href="#trainers" className="hover:text-yellow-400 duration-300">Trainers</a>
        <a href="#reviews" className="hover:text-yellow-400 duration-300">Reviews</a>
        <a href="#contact" className="hover:text-yellow-400 duration-300">Contact</a>
      </div>

      {/* MOBILE NAV */}
      <div className="flex md:hidden flex-wrap gap-4 justify-end max-w-[220px] text-white font-semibold text-sm">
        <a href="#home" className="hover:text-yellow-400 duration-300">Home</a>
        <a href="#programs" className="hover:text-yellow-400 duration-300">Programs</a>
        <a href="#pricing" className="hover:text-yellow-400 duration-300">Pricing</a>
        <a href="#trainers" className="hover:text-yellow-400 duration-300">Trainers</a>
        <a href="#reviews" className="hover:text-yellow-400 duration-300">Reviews</a>
        <a href="#contact" className="hover:text-yellow-400 duration-300">Contact</a>
      </div>

    </nav>
  );
};

export default Navbar;