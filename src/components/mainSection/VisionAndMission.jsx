import React from "react";
import TitleBar from "../TitleBar";

const VisionAndMission = () => {
  return (
    <section class="text-gray-600 body-font bg-gray-50 border-t-2" 
  >
      <div class=" px-5 py-24  flex flex-col container mx-auto"
       >
        <div class="m-4 mx-auto">
          <TitleBar title="Vision & Mission">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </TitleBar>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  CEO
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base">
                 Few word from CEO
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="text-base">
                  The company is working with the Mission of applying principles
                  of biotechnology individually and/or with other technologies
                  (a step ahead of biotechnology conceptualized alone) in
                  Health, Environment, Agriculture.
                </p>
              <p class="leading-relaxed text-lg mb-4">
                We are committed to provide products and services that SOCIETY
                require, BUYERS prefer and PARTNERS are proud of! We strive to
                grow business with honesty and integrity and have the Vision to
                harmonize the developmental needs of the society by creating and
                providing unique, sustainable and environment friendly
                solutions. We turn human needs into careful solutions.
              </p>
              <a href="/" class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
