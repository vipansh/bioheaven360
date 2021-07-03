import React from "react";
import TitleBar from "../TitleBar";

const Profile = () => {
  const kits = [
    {
      title: "MOLECULAR TESTING KITS",
      about: "about",
      link: "",
    },
    {
      title: "RTPCR; PCR; Sequencing Assay",
      about: "about",
      link: "",
    },
    {
      title: "HISTOPATHOLOGY",
      about: "about",
      link: "",
    },
    {
      title: "CONSUMABLE –GLASS/ PLASTICS",
      about: "about",
      link: "",
    },
    {
      title: "OTHER CHEMICALS, REAGENTS AND MEDIA ",
      about: "about",
      link: "",
    },
  ];

  const reserch = [
    {
      title: "VAJRA- THE OSTEO AI (DBT FUNDED)",
      about: "about",
      link: "",
    },
    {
      title: "GENETIC MARKERS ",
      about: "about",
      link: "",
    },
    {
      title: "VACCINE (PATENTED)",
      about: "about",
      link: "",
    },
    {
      title: "EYE DEVICE ",
      about: "about",
      link: "",
    },
  ];

  const [openTab, setOpenTab] = React.useState(1);
  return (
    <section className="container mx-auto rounded bg-gray-300">
      <div className="flex flex-wrap p-4 ">
        <TitleBar title="CORPORATE PROFILE- HEALTH "></TitleBar>
        <div className="w-full">
          <div className="flex justify-between">
            <span
              className={
                openTab === 1
                  ? "py-3 px-3 sm:px-6 sm:py-6 text-center border-2-r border-2-l border-gray-200 flex flex-row flex-1  items-center justify-center  cursor-pointer  bg-gray-200 border-l-2 border-r-2 border-t-2 border-gray-300 rounded-t gray text-gray-800"
                  : "py-3 px-3 sm:px-6 sm:py-6 text-center border-2-r border-2-l border-gray-200 flex flex-row flex-1  items-center justify-center  cursor-pointer  text-gray-600"
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              MANUFACTURING KITS AND DEVICES
            </span>
            <span
              className={
                openTab === 2
                  ? "py-3 px-3 sm:px-6 sm:py-6 text-center border-2-r border-2-l  flex flex-row flex-1  items-center justify-center  cursor-pointer  bg-gray-200 border-l-2 border-r-2 border-b-2 border-gray-300 rounded-t gray text-gray-800"
                  : "py-3 px-3 sm:px-6 sm:py-6 text-center border-2-r border-2-l border-gray-200 flex flex-row flex-1  items-center justify-center  cursor-pointer  text-gray-600"
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              INNOVATION AND RESEARCH
            </span>
          </div>

          <div className="relative min-w-0 break-words py-3 px-3 sm:px-6 sm:py-6 text-center border-2-r border-2-l flex flex-row flex-1  items-center justify-center  cursor-pointer  bg-gray-200 border-l-2 border-r-2 border-b-2 border-gray-300 rounded-t gray text-gray-800w-full mb-6 -mt-1 shadow-lg rounded">
            <div className="px-4 py-5 flex  rounded-md">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-1">
                    {kits.map((data, index) => {
                      return (
                        <div
                          key={index}
                          class=" my-2 border-2 border-gray-200 border-opacity-60 bg-white rounded-md p-4  "
                        >
                          <div class="text-lg sm:text-xl text-gray-900 font-medium title-font ">
                            {data.title}
                            <a
                              href="/"
                              class="text-indigo-500  items-center mx-2 flex justify-center "
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
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-1">
                {reserch.map((data, index) => {
                      return (
                        <div
                          key={index}
                          class=" my-2 border-2 border-gray-200 border-opacity-60 bg-white rounded-md p-4  "
                        >
                          <div class="text-lg sm:text-xl text-gray-900 font-medium title-font ">
                            {data.title}
                            <a
                              href="/"
                              class="text-indigo-500  items-center mx-2 flex justify-center "
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
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
