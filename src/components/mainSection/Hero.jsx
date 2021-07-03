import React from "react";
const Hero = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            src={process.env.PUBLIC_URL + "./assets/bioheaven.png"}
            alt="bioheaven360"
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Data driven Risk Prediction
          </h1>
          <h3 class="text-2xl mb-8 text-gray-800">
            <p className="text-3xl">
              Bioheaven is revolutionising the data driven risk prediction for
              diseases.
            </p>
            <p>
              We build the AI-powered Genomics Diagnostics tools to provide
              early diagnosis or risk predictions of diseases, providing timely
              intervention and the opportunity to prevent the disease.
            </p>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
