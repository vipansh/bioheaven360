import React from "react";

const TitleBar = ({ title, children }) => {
  return (
    <div class="text-center mb-20"
    data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="500"
            data-aos-offset="0">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
        {title}
      </h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
        {children}
      </p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
  );
};

export default TitleBar;
