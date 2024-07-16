"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import PBM from "../public/PBM.svg";
import UTC from "../public/UTC.svg";
import SupplyChain from "../public/supplychain.svg";
import PrivactPayment from "../public/PrivacyPayment.svg";

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
      {/* <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-[-50px]"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-[950px] mx-auto text-center pb-12 md:pb-16">
            {/* <h1 className="h2 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600">
              Explore our successful collaborations with MAS and BOG in
              promoting inclusive finance. We enhance global protocols like PBM
              and UTC using blockchain, smart contracts, ERC-3525, and W3C
              VC/DID technologies to optimise and advance financial solutions.
            </p> */}
            <h1 className="h2 mb-4">Our Solutions</h1>
            <p className="text-lg text-gray-600">
              Discover our advanced financial solutions, specifically designed
              for MSMEs in developing countries, featuring trusted credential
              management for inclusive financial access, privacy and
              programmable payment solutions for affordability, and tokenised
              supply chain finance for faster liquidity.
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
                      : "bg-[#f0f0f0] border border-[#e1e1e1]"
                  }`}
                  href="#0"
                  onMouseEnter={() => setTab(1)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                    Programmable Payment
                    </div>
                    <div className="text-gray-600 text-sm">
                    Our solutions revolutionise programmable digital currencies and payments with the Purpose Bound Money (PBM) protocol and ERC-3525 standard, automating secure transactions and enhancing escrow for broader adoption, ensuring funds are utilised as intended through conditional payment setups. Its programmability allows businesses and individuals to create programmable payment logic on their own without relying on professional third parties. Ample FinTech implemented the PBM3525 technology for broader use cases, including Letters of Credit.
                    </div>
                    {/* <div className="flex flex-row gap-3">
                      <Link
                        href="https://forms.gle/fBfZchQnS7tjPncQ7"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        target="_blank"
                        className="btn-sm text-gray-100 bg-[#9453FF] hover:bg-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Book Demo</span>
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
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        target="_blank"
                        className="btn-sm text-gray-900 bg-[#9553ff00] hover:text-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Learn More</span>
                      </Link>
                    </div> */}
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-[#f0f0f0] border border-[#e1e1e1]"
                  }`}
                  href="#0"
                  onMouseEnter={() => setTab(2)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                    Tokenised invoice
                    </div>
                    <div className="text-gray-600 text-sm">
                    Our solution utilizes the ERC-3525 standard to help both parties in a trade generate tokenized invoices after reaching an agreement. This process creates tokens representing accounts receivable and payable, embodying their respective rights. These tokens are programmable, allowing for splitting, combining, and structuring, as well as enabling automatic cash flow distribution. This programmability meets various needs, from suppliers seeking financing liquidity to investors looking for diverse risk assets.

                    </div>
                    {/* <div className="flex flex-row gap-3">
                      <Link
                        href="https://forms.gle/fBfZchQnS7tjPncQ7"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        target="_blank"
                        className="btn-sm text-gray-100 bg-[#9453FF] hover:bg-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Book Demo</span>
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
                        href="https://www.mas.gov.sg/-/media/mas-media-library/development/fintech/pbm/pbm-technical-whitepaper.pdf"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        target="_blank"
                        className="btn-sm text-gray-900 bg-[#9553ff00] hover:text-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Learn More</span>
                        <svg
                        className="w-3 h-3 fill-current text-gray-900 shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                      </Link>
                    </div> */}
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
                      : "bg-[#f0f0f0] border border-[#e1e1e1]"
                  }`}
                  href="#0"
                  onMouseEnter={() => setTab(3)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                    Tokenised Trusted Credentials Management Platform
                    </div>
                    <div className="text-gray-600 text-sm">
                    Our solution leverages the Universal Trusted Credential (UTC) and W3C VC/DID to create a trusted digital credential platform for managing and tokenising creditworthiness profiles. This platform ensures accessible, enhances affordable, and derisks financing for MSMEs by utilising standardised and verified data.

                    </div>
                    {/* <Link
                      href="https://www.undp.org/sites/g/files/zskgke326/files/2023-11/white_paper_on_universal_trusted_credentials.pdf"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      target="_blank"
                      className="btn-sm text-gray-900 bg-[#9553ff00] hover:text-[#7943cf] mt-2"
                    >
                      <span className="text-sm">Learn More</span>
                      <svg
                        className="w-3 h-3 fill-current text-gray-900 shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </Link> */}
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
                    tab !== 4
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-[#f0f0f0] border border-[#e1e1e1]"
                  }`}
                  href="#0"
                  onMouseEnter={() => setTab(4)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Compliance and Privacy Payment
                    </div>
                    <div className="text-gray-600 text-sm">
                      Our ZKP-based solution offers private payments, leveraging
                      the latest STARK technology for fast proof generation,
                      reducing costs and maximising efficiency. With secure
                      zkWallet storage and digital invoices and receipts, the
                      solution ensures regulatory compliance from the start.
                    </div>
                    {/* <div className="flex flex-row gap-3">
                      <Link
                        href="https://forms.gle/fBfZchQnS7tjPncQ7"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        target="_blank"
                        className="btn-sm text-gray-100 bg-[#9453FF] hover:bg-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Book Demo</span>
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
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        target="_blank"
                        className="btn-sm text-gray-900 bg-[#9553ff00] hover:text-[#7943cf] mt-2"
                      >
                        <span className="text-sm">Learn More</span>
                      </Link>
                    </div> */}
                  </div>
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
                    <div className="relative flex md:mt-10">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={PBM}
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
                    <div className="relative flex md:mt-20">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={SupplyChain}
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
                    <div className="relative flex md:mt-32">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={UTC}
                        width={520}
                        height={457}
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 4}
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
                    <div className="relative flex md:mt-44">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={PrivactPayment}
                        width={470}
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
