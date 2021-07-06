import React from "react";
const Hero = () => {
  return (
    <section
      class="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden pt-48  md:py-24  flex
      items-center"
    >
      {/* <div class="h-full absolute top-0 left-0 z-0">
          <img
            src="images/cover-bg.jpeg"
            alt=""
            class="w-full h-full object-cover opacity-20"
          />
        </div> */}

      <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
        <div>
          <h1 class="text-white text-4xl md:text-2xl xl:text-3xl font-bold leading-tight">
            Bioheaven is revolutionising the data driven risk prediction for
            diseases.
          </h1>
          <p class="text-blue-100 text-sm md:text-xl leading-snug mt-4">
            We build the AI-powered Genomics Diagnostics tools to provide early
            diagnosis or risk predictions of diseases, providing timely
            intervention and the opportunity to prevent the disease.
          </p>

          {/* <a
            href="/"
            class="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold"
          >
            Book Appointment
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
