export default function OurSolution() {
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
            <h2 className="h2 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600">
              Discover our advanced financial solutions, designed for seamless
              digital transactions, secure credential management, and robust
              blockchain infrastructure.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <svg
                width="60"
                height="60"
                viewBox="0 0 135 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="67.5" cy="67.5" r="67.5" fill="#9453FF" />
                <path
                  d="M65.9375 92.5H40.9375C39.6943 92.5 38.502 92.0061 37.6229 91.1271C36.7439 90.248 36.25 89.0557 36.25 87.8125V47.1875C36.25 45.9443 36.7439 44.752 37.6229 43.8729C38.502 42.9939 39.6943 42.5 40.9375 42.5H94.0625C95.3057 42.5 96.498 42.9939 97.3771 43.8729C98.2561 44.752 98.75 45.9443 98.75 47.1875V70.4406L98.75 78.1342"
                  stroke="#ECD9FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.25 47.1875C36.25 45.9443 36.7439 44.752 37.6229 43.8729C38.502 42.9939 39.6943 42.5 40.9375 42.5H94.0625C95.3057 42.5 96.498 42.9939 97.3771 43.8729C98.2561 44.752 98.75 45.9443 98.75 47.1875V61.25H36.25V47.1875Z"
                  stroke="#ECD9FF"
                  strokeWidth="4"
                />
                <path
                  d="M77.5747 82.6118L71.418 88.6986L77.5747 95.1118M92.1269 82.6118L98.2836 88.1389L92.1269 95.1118"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.5 51.875C42.5 50.1491 43.8991 48.75 45.625 48.75C47.3509 48.75 48.75 50.1491 48.75 51.875C48.75 53.6009 47.3509 55 45.625 55C43.8991 55 42.5 53.6009 42.5 51.875Z"
                  fill="#ECD9FF"
                />
                <path
                  d="M51.875 51.875C51.875 50.1491 53.2741 48.75 55 48.75C56.7259 48.75 58.125 50.1491 58.125 51.875C58.125 53.6009 56.7259 55 55 55C53.2741 55 51.875 53.6009 51.875 51.875Z"
                  fill="#ECD9FF"
                />
                <path
                  d="M82.1384 91.073C82.1989 91.7701 82.5304 92.4156 83.0618 92.8708C83.5931 93.3261 84.2819 93.5546 84.98 93.5073C87.2722 93.5073 87.8216 92.1907 87.8216 91.073C87.8216 89.9554 86.8744 88.7714 84.98 88.7714C83.0856 88.7714 82.1384 88.0231 82.1384 86.4981C82.1561 86.1473 82.2445 85.8037 82.3984 85.4879C82.5523 85.1722 82.7685 84.8908 83.034 84.6607C83.2994 84.4307 83.6086 84.2567 83.9431 84.1492C84.2775 84.0418 84.6302 84.0031 84.98 84.0354C85.6786 84.0054 86.3621 84.2437 86.8905 84.7017C87.4189 85.1596 87.752 85.8024 87.8216 86.4981M84.98 94.9252V93.6939M84.98 82.6118V84.0316"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2 mb-1">
                Programmable Payment
              </h4>
              <p className="text-gray-600 text-center">
                Our solutions transform digital payments using the Purpose Bound
                Money (PBM) protocol and ERC-3525, automating secure
                transactions and enhancing escrow for broader adoption. Features
                like transferability and advanced contract logic streamline
                international trade, especially benefiting MSMEs.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                width="60"
                height="60"
                viewBox="0 0 135 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="67.5" cy="67.5" r="67.5" fill="#9453FF" />
                <path
                  d="M65.0751 36.8975L39.8713 47.2812V72.875C39.8713 86.59 68.0001 99.6875 68.0001 99.6875C68.0001 99.6875 96.1288 86.59 96.1288 72.875V47.2812L70.9251 36.8975C69.9983 36.5113 69.0041 36.3125 68.0001 36.3125C66.996 36.3125 66.0019 36.5113 65.0751 36.8975Z"
                  stroke="#ECD9FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M80.4312 60.2976H55.5849C54.6426 60.2976 53.8787 61.0615 53.8787 62.0039V80.3664C53.8787 81.3087 54.6426 82.0726 55.5849 82.0726H80.4312C81.3735 82.0726 82.1374 81.3087 82.1374 80.3664V62.0039C82.1374 61.0615 81.3735 60.2976 80.4312 60.2976Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M58.6562 60.2976V56.3813C58.6562 53.9032 59.6407 51.5266 61.393 49.7743C63.1453 48.022 65.5219 47.0376 68 47.0376C70.4781 47.0376 72.8547 48.022 74.607 49.7743C76.3593 51.5266 77.3438 53.9032 77.3438 56.3813V60.2976"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M68 74.8088C70.0013 74.8088 71.6237 73.1864 71.6237 71.185C71.6237 69.1837 70.0013 67.5613 68 67.5613C65.9986 67.5613 64.3762 69.1837 64.3762 71.185C64.3762 73.1864 65.9986 74.8088 68 74.8088Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2 mb-1">
                Compliance and Privacy Payment
              </h4>
              <p className="text-gray-600 text-center">
                Our ZKP-based zkCoprocessor solution offers private, efficient
                payment processing with digital invoices and receipts,
                maintaining compliance. Utilising STARK technology for fast
                proof generation and featuring secure zkWallet storage, it
                supports discreet transactions across EVM and UTXO models.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                width="60"
                height="60"
                viewBox="0 0 135 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="67.5" cy="67.5" r="67.5" fill="#9453FF" />
                <path
                  d="M101.872 82.8272V53.8782C101.87 51.9195 101.479 49.9807 100.721 48.1746C99.9626 46.3686 98.853 44.7313 97.4563 43.3581C94.6125 40.561 90.7822 38.9955 86.7933 39H49.0746C45.0858 38.9955 41.2554 40.561 38.4116 43.3581C37.0156 44.7316 35.9066 46.369 35.1493 48.175C34.3919 49.9811 34.0012 51.9197 34 53.8782V82.8272C34 86.7744 35.5896 90.5574 38.4152 93.3473C41.259 96.1443 45.0894 97.7098 49.0782 97.7053H86.7969C90.7978 97.7053 94.6307 96.1336 97.4599 93.3473C98.8564 91.9739 99.9659 90.3366 100.724 88.5306C101.482 86.7245 101.87 84.7858 101.872 82.8272Z"
                  stroke="#ECD9FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M66.6249 82.5271C66.6249 79.6265 65.4675 76.8473 63.4027 74.7933C61.334 72.7371 58.5357 71.583 55.6189 71.583C52.7022 71.583 49.9039 72.7371 47.8351 74.7933C46.8146 75.8062 46.0045 77.011 45.4515 78.3383C44.8985 79.6656 44.6136 81.0892 44.613 82.5271M77.1092 57.3468H89.9477M77.1092 68.3527H82.6104M77.1092 79.3586H89.9477M55.6189 68.8528C57.5649 68.8528 59.4312 68.0797 60.8072 66.7037C62.1832 65.3277 62.9562 63.4615 62.9562 61.5155C62.9562 59.5695 62.1832 57.7033 60.8072 56.3273C59.4312 54.9513 57.5649 54.1782 55.6189 54.1782C53.673 54.1782 51.8067 54.9513 50.4307 56.3273C49.0547 57.7033 48.2817 59.5695 48.2817 61.5155C48.2817 63.4615 49.0547 65.3277 50.4307 66.7037C51.8067 68.0797 53.673 68.8528 55.6189 68.8528Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2 mb-1">
                Trusted Credential Management
              </h4>
              <p className="text-gray-600 text-center">
                Our platform utilises Universal Trusted Credential (UTC), ERC-3525, and W3C DID/VC for
                efficient digital identity management and tokenisation. Enhanced
                with zk-STARKs for security, it features a dual-bus structure
                that boosts privacy, supports selective disclosure, and improves
                operational efficiency.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                width="60"
                height="60"
                viewBox="0 0 135 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="67.5" cy="67.5" r="67.5" fill="#9453FF" />
                <path
                  d="M94 77.7501V53.3751L73.6875 41.9497M62.3125 41.9497L42 53.3751V77.7501M46.875 85.3681L68 97.2501L81 89.9376L89.125 85.3681M68 56.6251L72.875 59.4688L77.75 62.3126V73.6876L72.875 76.5313L68 79.3751L63.125 76.5313L58.25 73.6876V62.3126L63.125 59.4688L68 56.6251ZM68 56.6251V45.2501M77.75 72.8751L89.125 79.3751M58.25 72.8751L46.875 79.3751"
                  stroke="#ECD9FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M68 45.25C70.6924 45.25 72.875 43.0674 72.875 40.375C72.875 37.6826 70.6924 35.5 68 35.5C65.3076 35.5 63.125 37.6826 63.125 40.375C63.125 43.0674 65.3076 45.25 68 45.25Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 87.5C44.6924 87.5 46.875 85.3174 46.875 82.625C46.875 79.9326 44.6924 77.75 42 77.75C39.3076 77.75 37.125 79.9326 37.125 82.625C37.125 85.3174 39.3076 87.5 42 87.5Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M94 87.5C96.6924 87.5 98.875 85.3174 98.875 82.625C98.875 79.9326 96.6924 77.75 94 77.75C91.3076 77.75 89.125 79.9326 89.125 82.625C89.125 85.3174 91.3076 87.5 94 87.5Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2 mb-1">
                Supply Chain Finance
              </h4>
              <p className="text-gray-600 text-center">
                Our solution leverages the ERC-3525 standard in smart contracts
                to enhance the tokenization and structuring of financial
                instruments like invoices. It supports operations like splitting
                and combining, improving risk management and liquidity, and
                making supply chain finance more accessible for MSMEs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
