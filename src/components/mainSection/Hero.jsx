import React from "react";
const Hero = () => {
  return (
    <div class="md:p-20 p-4 relative 	bg-gradient-to-r from-gray-600 to-gray-900 ">
      <div className="flex justify-between container mx-auto"> 
        <div className=" ">
          <div
            class=" md:px-6 md:max-w-2xl px-2 "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="500"
            data-aos-offset="0"
          >
            <h2 class="text-4xl font-bold mb-2 text-white">
              Data driven Risk Prediction
            </h2>
            <h3 class="text-2xl mb-8 text-gray-200">
              <p className="text-3xl">
                Bioheaven is revolutionising the data driven risk prediction for
                diseases.
              </p>
              <p>
                We build the AI-powered Genomics Diagnostics tools to provide
                early diagnosis or risk predictions of diseases, providing
                timely intervention and the opportunity to prevent the disease.
              </p>
            </h3>
            <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
              Any Button
            </button>
          </div>
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="500"
            data-aos-offset="0">
          <img src={process.env.PUBLIC_URL + './assets/bioheaven.png'} alt="bioheaven360" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
