import React from "react";
import meatHero from "../assets/meat-hero-crop.jpg";

const Home = () => {
  return (
    // <div
    //   style={{
    //     backgroundImage:
    //       "url('https://images.pexels.com/photos/11267145/pexels-photo-11267145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    //   }}
    //   className="bg-cover bg-no-repeat bg-center w-full h-full"
    // >
     <div>
      <h1 className="text-center pt-10 font-bold text-9xl">
        Nutrition Boot Camp
      </h1>
      <img src={meatHero} />
      <p className="px-40 text-2xl"> This is a Nutrition Bootcamp website. Information about the program and the registered dietian will appear here. Links to pages with more information and resources will be inserted somewhere beneath this hero.</p>
    </div>
  );
};

export default Home;
