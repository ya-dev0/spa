import React from "react";

function Hero() {
  return (
    <header className="bg-none bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex flex-col justify-center items-center w-full gap-8">
      <h1 className="sm:text-6xl text-5xl text-white font-bold leading-tight text-center">
        Discover Delicious <span className="text-red-500">Keto Recipes</span>
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl">
        Explore our collection of easy-to-make keto recipes that will help you maintain a healthy lifestyle without sacrificing flavor.
      </p>
    </header>
  );
}

export default Hero;
