"use client"

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[700px] md:h-[650px]">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 mt-10">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-4xl md:text-[60px] font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Shaping the next-Gen of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9453FF] to-[#39046b]">
                Financial Infrastructure{" "}
              </span>
              with Tokenisation
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                We foresee the unprecedented transformation of the human
                monetary system. As the innovation leader in Tokenisation and
                FinTech, we are dedicated to driving the inclusiveness and
                development of next-generation global financial systems.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <Link
                  href="https://forms.gle/fBfZchQnS7tjPncQ7"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  target="_blank"
                  className="px-5 py-3 btn-sm text-gray-100 bg-[#9453FF] hover:bg-[#7943cf] mt-2"
                >
                  <span className="text-lg">Book Demo</span>
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
                {/* <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/">Learn More</a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}
        </div>
      </div>
    </section>
  );
}