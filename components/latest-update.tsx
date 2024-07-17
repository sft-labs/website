"use client";
import React from "react";

const posts = [
  {
    date: "12 Jun 2024",
    title:
      "BOG Announces Successful Completion Of Cross-Border Trade Using Digital Credentials",
    description:
      "BoG in collaboration with MAS has successfully completed the first POC under Project DESFT which demonstrated the use of digital credentials for international trade and cross-border payment.",
    url: "https://www.bog.gov.gh/wp-content/uploads/2024/06/PRESS-RELEASE-BANK-OF-GHANA-ANNOUNCES-SUCCESSFUL-COMPLETION-OF-CROSS-BORDER-TRADE-USING-DIGITAL-CREDENTIALS-120624.pdf",
  },
  {
    date: "17 May 2024",
    title:
      "Ghana Completes First POC in Project DESFT, Paving Way for Digital Cross-Border Trade",
    description:
      "BOG, in partnership with MAS, successfully completed the first POC for Project DESFT, which aimed to enhance digital cross-border trade using the 'eCedi' and a Singaporean stablecoin. Announced by Kwame Oppong at the 3i Summit, this milestone marks a significant advancement in establishing a secure, digital trade environment between Ghana and Singapore, potentially transforming Ghana's payment ecosystem and supporting MSMEs in international transactions.",
    url: "https://www.africa.com/ghana-completes-first-proof-of-concept-in-project-desft-paving-way-for-digital-cross-border-trade/",
  },
];

const LatestUpdated = () => {
  return (
    <section className="relative">
      {/* <div className="absolute left-0 right-0 m-auto mt-[-80px] w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}
      <div className="bg-white mx-10 md:mx-16 lg:mx-40 xl:mx-68 2xl:mx-72 flex flex-col justify-center mt-32">
        <h1 className="h2 mb-4 flex justify-center">Latest News</h1>
        {posts.map((post, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="text-gray-500 text-sm">{post.date}</div>
            <a
              target="_blank"
              href={post.url}
              className="text-xl font-semibold mt-2 hover:text-[#9453FF]"
            >
              {post.title}
            </a>
            <p className="text-gray-700 mt-2 w-full overflow-hidden line-clamp-2">
              {post.description}
            </p>
            <hr className="border-t border-gray-300 my-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestUpdated;
