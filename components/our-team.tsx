export default function OurTeam() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/3 md:mt-24 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet the Innovators Driving Our Financial Solutions
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h5 className="text-lg font-bold leading-snug tracking-tight mt-2 mb-1">
                Xiao Zhang
              </h5>
              <p className="text-gray-600 text-sm text-center">
                Co-founder, CTO
              </p>
              <p className="text-gray-600 text-sm text-center mt-5">
                He holds a PhD, contributed to two EU research projects,
                published over 20 papers, and has 7 patents and 2 PCTs in in
                zero-knowledge proof (ZKP) and blockchain. His focus is on
                privacy-preserving digital identity and ZKP technology.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h5 className="text-lg font-bold leading-snug tracking-tight mt-2 mb-1">
                Zhexin Wan
              </h5>
              <p className="text-gray-600 text-sm text-center">
                Head of Research
              </p>
              <p className="text-gray-600 text-sm text-center mt-5">
                He is a Web3 content creator, focusing on Tokenization of
                Real-World Assets, DeFi and Blockchain Technology. He
                contributes to innovative solutions in the digital
                transformation of traditional industry.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h5 className="text-lg font-bold leading-snug tracking-tight mt-2 mb-1">
                Victor Feng
              </h5>
              <p className="text-gray-600 text-sm text-center">
                Chief Engineer
              </p>
              <p className="text-gray-600 text-sm text-center mt-5">
                He is a certified blockchain architect and Ethereum developer
                with 15+ years experience, leading projects in banking, telecom,
                media and other industries.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h5 className="text-lg font-bold leading-snug tracking-tight mt-2 mb-1">
                Haisheng Zhang
              </h5>
              <p className="text-gray-600 text-sm text-center">
                Chief Product Officer
              </p>
              <p className="text-gray-600 text-sm text-center mt-5">
                He specialises in enterprise blockchain and fintech, directing
                product vision, innovation, and delivery with strong leadership
                and efficient project execution.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h5 className="text-lg font-bold leading-snug tracking-tight mt-2 mb-1">
                Yan Meng
              </h5>
              <p className="text-gray-600 text-sm text-center">
                Incubation Advisor
              </p>
              <p className="text-gray-600 text-sm text-center mt-5">
                He originated and designed the ERC-3525 SFT standard and is a
                prominent blockchain expert, evangelist, and consultant known
                for pioneering work in tokenomics and digital asset research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
