import Image from "next/image";
import SolvLogo from "../public/solv-logo.svg";
import UnizonLogo from "../public/unizon-logo.svg";
import zCloakLogo from "../public/zCloak-logo.svg";
import SFTLabsLogo from "../public/SFTLabs.svg";
import GFILogo from "../public/GFILogo.svg";
import cofounderlinkedin from "@/public/cofounder-linkedin.svg";

export default function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 mt-20">
            <h2 className="h2">Partner With</h2>
          </div>

          {/* Items */}
          <div className="max-w-md md:max-w-4xl mx-auto flex justify-center gap-3 md:gap-12">
            {/* Item */}
            <a
              href="https://globalfintechinstitute.org/"
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
            >
              <Image
                className="md:max-w-none mx-auto rounded"
                src={GFILogo}
                width={215}
                height={53}
                alt="SFTLabsLogo"
              />
            </a>
            {/* Item */}
            <a
              href="https://sftlabs.io/"
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
            >
              <Image
                className="md:max-w-none mx-auto rounded"
                src={SFTLabsLogo}
                width={145}
                height={53}
                alt="SFTLabsLogo"
              />
            </a>

            {/* Item */}
            <a
              href="https://solv.finance/"
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
            >
              <Image
                className="md:max-w-none mx-auto rounded"
                src={SolvLogo}
                width={145}
                height={457}
                alt="SolvLogo"
              />
            </a>

            {/* Item */}
            <a
              href="https://unizon.au/"
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
            >
              <Image
                className="md:max-w-none mx-auto rounded"
                src={UnizonLogo}
                width={145}
                height={457}
                alt="UnizonLogo"
              />
            </a>

            {/* Item */}
            <a
              href="https://zcloak.network/"
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
            >
              <Image
                className="md:max-w-none mx-auto rounded"
                src={zCloakLogo}
                width={270}
                height={457}
                alt="zCloakLogo"
              />
            </a>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mx-auto mt-44 mb-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="flex flex-col justify-center items-center text-center py-16 px-4 mx-auto">
                <div className="absolute top-0 -mt-12 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-[#723fc3]"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img
                    className="relative rounded-full"
                    src={'/images/TestimonialImage.jpg'}
                    width={96}
                    height={96}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium my-6">
                  " Ample's mission is empowering digital economy with
                  innovative tokenisation solutions. "
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Haisheng Zhang
                </cite>
                <div className="text-gray-600">
                  <span>Co-Founder of Ample Fintech</span>
                </div>
                <div className="mt-2">
                  <a
                    href="https://www.linkedin.com/in/haisheng-zhang/"
                    className="bg-[#1377B8] hover:bg-grey-200 text-white rounded-full shadow fill-current h-8 w-8 flex justify-center items-center"
                  >
                    <Image
                      src={cofounderlinkedin}
                      alt=""
                      height={16}
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
