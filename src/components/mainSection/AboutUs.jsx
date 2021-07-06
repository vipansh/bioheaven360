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
    <section class=" text-white body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20  md:w-1/2 mx-auto">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0 ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 ">
              Our Team
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed   ">
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
        <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-1">
          {team.map((data) => {
            return (
              <div class="p-2  w-full  text-gray-800">
                <div class="h-full flex items-center bg-gray-100 border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class=" title-font font-medium">
                      {data.name}
                    </h2>
                    <p class="">{data.position}</p>
                  </div>
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
