import React from "react";

const AboutUs = () => {
  const team = [
    {
      id: "01",
      name: "Dr. Shailendra Vyas ",
      position: "Founder Director",
      imageUrl: "",
    },
    {
      id: "02",
      name: "Mrs. Suman vyas",
      position: "Founder Director",
      imageUrl: "",
    },
    {
      id: "03",
      name: "Prof. SD Purohit",
      position: "Cofounder Director",
      imageUrl: "",
    },
    {
      id: "04",
      name: "Sanjay Nagi",
      position: "Cofounder Director",
      imageUrl: "",
    },
    {
      id: "05",
      name: "Dr. Manohar S Rao",
      position: "Cofounder Director",
      imageUrl: "",
    },
    {
      id: "06",
      name: "Dr. B. Das(THSTI, Fbd.)",
      position: "Scientist",
      imageUrl: "",
    },
    {
      id: "07",
      name: "Dr. Saurabh Raghuvanshi",
      position: "Assoc Prof, University of Delhi",
      imageUrl: "",
    },
    {
      id: "08",
      name: "Prof. Vijay Sharma",
      position: "Professor, AIIMS",
      imageUrl: "",
    },
  ];

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Out Team
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            <ul>
              <li> RESEARCH AND DEVELOPMENT ORGANIZATION</li>
              <li>
                VARIOUS AREAS OF BIOTECHNOLOGY WITH AN INTERDISCIPLINARY
                APPROACH
              </li>
              <li>MOLECULAR BIOLOGY AND GENOMICS TO BE THE CORE STRENGTH</li>
            </ul>
          </p>
        </div>
        <div class="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-1">
          {team.map((data) => {
            return (
              <div class="p-2 flex justify-center  " key={data.id} >
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="md:h-40 w-32 rounded md:w-full object-cover object-center mb-6 h-32"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <h2 class="md:text-lg text-sm text-gray-900 font-medium title-font ">
                    {data.name}
                  </h2>
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">
                    {data.position}
                  </h3>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
