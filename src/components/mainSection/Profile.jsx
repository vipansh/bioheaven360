import React from "react";
import TitleBar from "../TitleBar";

const Profile = () => {
  const kits = [
    {
      title: "MOLECULAR TESTING KITS",
      about: "about",
      divnk: "",
    },
    {
      title: "RTPCR; PCR; Sequencing Assay",
      about: "about",
      divnk: "",
    },
    {
      title: "HISTOPATHOLOGY",
      about: "about",
      divnk: "",
    },
    {
      title: "CONSUMABLE –GLASS/ PLASTICS",
      about: "about",
      divnk: "",
    },
    {
      title: "OTHER CHEMICALS, REAGENTS AND MEDIA ",
      about: "about",
      divnk: "",
    },
  ];

  const reserch = [
    {
      title: "VAJRA- THE OSTEO AI (DBT FUNDED)",
      about: "about",
      divnk: "",
    },
    {
      title: "GENETIC MARKERS ",
      about: "about",
      divnk: "",
    },
    {
      title: "VACCINE (PATENTED)",
      about: "about",
      divnk: "",
    },
    {
      title: "EYE DEVICE ",
      about: "about",
      divnk: "",
    },
  ];

  const [openTab, setOpenTab] = React.useState(1);
  return (
    <section className="container mx-auto rounded bg-white pt-8 md:pt-0">
      <div className="lg:mt-12 lg:p-12">
        <div class="md:w-1/2 mx-auto">
          <h2 className="text-center font-semibold md:text-4xl text-2xl text-gray-800 my-2">
            Products
          </h2>
          <p className="text-center font-medium md:text-2xl text-xs text-gray-700">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <div class="md:w-1/2 grid grid-cols-3 gap-4 mx-auto items-center my-4">
          <div
            onClick={() => setOpenTab(1)}
            class={`text-lg text-center cursor-pointer  ${
              openTab === 1
                ? "text-gray-800 p-2 border-b-4 border-blue-500 font-semibold rounded"
                : "text-gray-600 p-2 "
            }`}
          >
            Simple Bookmarking
          </div>
          <div
            onClick={() => setOpenTab(2)}
            class={`text-lg text-center cursor-pointer  ${
              openTab === 2
                ? "text-gray-800 p-2 border-b-4 border-blue-500 font-semibold rounded"
                : "text-gray-600 p-2 "
            }`}
          >
            Speedy Searching
          </div>
          <div
            onClick={() => setOpenTab(3)}
            class={`text-lg text-center cursor-pointer  ${
              openTab === 3
                ? "text-gray-800 p-2 border-b-4 border-blue-500 font-semibold rounded"
                : "text-gray-600 p-2 "
            }`}
          >
            Easy Sharing
          </div>
        </div>
        <div class=" md:w-3/4 grid grid-cols-3 gap-4 mx-auto  my-4 shadow border ">
          <div class="hidden md:block">
            <img
              class=" h-96 rounded w-full object-cover object-center  "
              src="https://dummyimage.com/720x400"
              alt="content"
            />
          </div>
          <div className="col-span-3 md:col-span-2  overflow-x-auto    h-96 p-4  ">
            {openTab === 1 &&
              kits.map((data) => {
                return (
                  <div className="shadow border my-2  p-3 rounded">
                    <div class="bg-white  ">
                      <div class="m-2">
                        <p class="text-lg font-bold tracking-wide text-gray-800 mb-2">
                          {data.title}
                        </p>
                        <p class="text-sm text-gray-600 font-hairline">
                          {data.about} Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                          <a
                            href="/"
                            class="text-indigo-500  items-center mx-2 inline-flex justify-end "
                          >
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
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            {openTab === 2 &&
              reserch.map((data) => {
                return (
                  <div className="shadow border my-2  p-3 rounded">
                    <div class="bg-white  ">
                      <div class="m-2">
                        <p class="text-lg font-bold tracking-wide text-gray-800 mb-2">
                          {data.title}
                        </p>
                        <p class="text-sm text-gray-600 font-hairline">
                          {data.about} Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                          <a
                            href="/"
                            class="text-indigo-500  items-center mx-2 inline-flex justify-end "
                          >
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
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
