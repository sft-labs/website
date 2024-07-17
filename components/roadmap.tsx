import React from "react";

const events = [
  {
    date: "2023 June",
    title: "Project Launched",
    description:
      "Project launched and supported by Monetary Authority of Singapore (MAS) and Bank of Ghana (BOG)",
  },
  {
    date: "2023 November",
    title: "Phase I",
    description:
      "Project DESFT Phase I accomplished; the advanced Trusted Digital Credential Network was showcased at the Singapore FinTech Festival (SFF 2023)",
  },
  {
    date: "2024 MAY",
    title: "Phase II",
    description:
      "Project DESFT Phase II accomplished;  the first cross-border trade pilot between Singapore stablecoin and Ghana’s central bank digital currency succeeded",
  },
  {
    date: "",
    title: "Move to Next Stage",
    description:
      "Project DESFT will explore the interoperability of multiple digital currencies within a single transaction, as well as the supply chain finance automation",
  },
];

const Roadmap = () => {
  return (
    <div className="relative py-20">
      <div
        className="absolute inset-0 bg-gray-100 mt-20"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="relative m-8">
        <div className="max-w-[950px] mx-auto text-center pb-10 md:pb-12">
          <h1 className="h2 mb-4 mt-20">Project DESFT</h1>
          <p className="text-lg text-gray-600">
            Project DESFT (Digital Economy Semi-Fungible Token) is a central
            bank pilot initiative backed by the Monetary Authority of Singapore
            (MAS) and the Bank of Ghana (BOG).Its goal is to empower small and
            medium-sized enterprises (SMEs) to engage more effectively in
            international trade and cross-border payments. This is achieved
            through a trusted credential system and programmable payment
            technology, fostering inclusive finance. The solution is designed
            and developed by Ample FinTech.
          </p>
        </div>
        {/* Central Line */}
        <div className="absolute w-0.5 bg-black left-1/2 top-[470px] sm:top-[350px] md:top-[270px] bottom-0"></div>

        {/* Events */}
        {events.map((event, index) => (
          <div
            key={index}
            className="flex justify-between items-center relative mb-8 mx-3 md:mx-44"
            style={{ clear: "both" }}
          >
            <div className="w-1/2">
              {index % 2 === 0 && (
                <div className="text-right pr-10">
                  <span className="text-sm text-gray-500">{event.date}</span>
                  <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
                  <p
                    className="text-gray-600"
                    style={{
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              )}
            </div>
            <div
              className="w-4 h-4 bg-black rounded-full"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: "50%",
                zIndex: 10,
              }}
            >
              {/* Dot */}
            </div>
            <div className="w-1/2">
              {index % 2 !== 0 && (
                <div className="text-left pl-10">
                  <span className="text-sm text-gray-500">{event.date}</span>
                  <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
                  <p
                    className="text-gray-600"
                    style={{
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
