"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import PBM from "../public/PBM.svg";
import UTC from "../public/UTC.svg";
import DESFT from "../public/DESFT.svg";
import Link from "next/link";

export default function CaseStudies() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-[-30px]"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600">
              Discover our innovative case studies in digital credentials,
              programmable payment, and tokenised supply chain finance.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Project DESFT
                    </div>
                    <div className="text-gray-600 text-sm">
                      Project DESFT is a new distributed ledger technology
                      solution, arising from the ongoing GIFE work, that is
                      driven by financial institutions and FinTechs from
                      Singapore and Ghana which has completed a live and novel
                      approach to combine CBDC from Ghana, stablecoin from
                      Singapore, universal trusted credentials and trade tokens
                      within a purpose bound money protocol for a live cross
                      border trade. The DESFT team views this innovative
                      approach will advance inclusive finance.
                    </div>
                    <div className="flex flex-row gap-3">
                      <Link
                        href="https://demo.amplefintech.com"
                        className="btn-sm text-gray-100 bg-[#9453FF] hover:bg-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Try Demo</span>
                        <svg
                          className="w-3 h-3 fill-current text-gray-100 shrink-0 ml-2 -mr-1"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="https://demo.amplefintech.com"
                        className="btn-sm text-gray-900 bg-[#9553ff00] hover:text-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Learn More</span>
                      </Link>
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Purpose Bound Money (PBM)
                    </div>
                    <div className="text-gray-600 text-sm">
                      PBM is a common purpose protocol designed to work with
                      different ledger technology and forms of money. It
                      provides a novel model to enhance transactional integrity,
                      streamline process, and ensure funds are utilised as
                      intended through conditional payment setups. Ample FinTech
                      implemented the PBM solution using ERC-3525 standard and
                      smart contracts for broader use cases, including Letters
                      of Credit.
                    </div>
                    <div className="flex flex-row gap-3">
                      <Link
                        href="https://demo.amplefintech.com"
                        className="btn-sm text-gray-100 bg-[#9453FF] hover:bg-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Try Demo</span>
                        <svg
                          className="w-3 h-3 fill-current text-gray-100 shrink-0 ml-2 -mr-1"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="/docs/desft-whitepaper.pdf"
                        target="_ample"
                        className="btn-sm text-gray-900 bg-[#9553ff00] hover:text-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Learn More</span>
                        {/* <svg
                        className="w-3 h-3 fill-current text-gray-900 shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg> */}
                      </Link>
                    </div>
                  </div>
                  {/* <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div> */}
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Universal Trusted Credentials (UTC) Solution
                    </div>
                    <div className="text-gray-600 text-sm">
                      The UTC solution enhances financial access for small
                      businesses by using authoritative data to develop a
                      trusted, digital profile of creditworthiness that derisks
                      financing. This approach makes financing more accessible
                      and affordable, particularly for MSMEs often hindered by
                      stringent collateral requirements and a lack of
                      standardised, verified data.
                    </div>
                    <Link
                      href="https://www.undp.org/sites/g/files/zskgke326/files/2023-11/white_paper_on_universal_trusted_credentials.pdf"
                      className="btn-sm text-gray-900 bg-[#9553ff00] hover:text-[#7943cf] mt-2"
                    >
                      <span className="text-sm">Learn More</span>
                      {/* <svg
                        className="w-3 h-3 fill-current text-gray-900 shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg> */}
                    </Link>
                  </div>
                  {/* <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div> */}
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative flex md:mt-24">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={DESFT}
                        width={600}
                        height={457}
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative flex md:mt-32">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={PBM}
                        width={600}
                        height={457}
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative flex">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={UTC}
                        width={540}
                        height={457}
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
