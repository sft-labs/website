"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";

export default function AboutUs() {
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
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-[950px] mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              Ample FinTech targets next-generation financial infrastructure,
              focusing on{" "}
              <span className="text-[#9453FF] font-bold">tokenisation</span>{" "}
              solutions for{" "}
              <span className="text-[#9453FF] font-bold">
                trusted credentials
              </span>
              ,{" "}
              <span className="text-[#9453FF] font-bold">
                privacy and programmable payments
              </span>
              , and{" "}
              <span className="text-[#9453FF] font-bold">
                supply chain finance
              </span>{" "}
              in cross-border trade and inclusive finance. Our solutions
              streamline processes, reduce transaction costs, and enhance
              efficiency, all while committing to{" "}
              <span className="text-[#9453FF] font-bold">
                regulatory compliance
              </span>
              .
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-sm mb-24 mx-auto grid gap-3 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                width="80"
                height="80"
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

              <h4 className="text-[18px] font-bold leading-snug tracking-tight mt-4 mb-1">
                Programmable Payment
              </h4>
              {/* <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                width="80"
                height="80"
                viewBox="0 0 135 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="67.5" cy="67.5" r="67.5" fill="#9453FF" />
                <path
                  d="M63.3949 73.1945C63.4944 74.3417 64.04 75.4041 64.9145 76.1533C65.789 76.9024 66.9226 77.2785 68.0714 77.2007C71.8439 77.2007 72.748 75.0339 72.748 73.1945C72.748 71.355 71.1891 69.4065 68.0714 69.4065C64.9537 69.4065 63.3949 68.175 63.3949 65.6652C63.424 65.0879 63.5695 64.5223 63.8228 64.0027C64.0761 63.483 64.4319 63.0199 64.8687 62.6413C65.3056 62.2627 65.8145 61.9763 66.3649 61.7995C66.9153 61.6226 67.4958 61.559 68.0714 61.6122C69.2211 61.5627 70.3462 61.9551 71.2158 62.7087C72.0854 63.4624 72.6336 64.5202 72.748 65.6652M68.0714 79.5343V77.5078M68.0714 59.2693V61.606"
                  stroke="#F7EEFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M69.9732 47.1101C70.6194 47.1101 71.1974 47.5123 71.415 48.1146L72.9667 52.416C73.5228 52.5544 73.9997 52.6929 74.4042 52.838C74.8459 52.9962 75.4152 53.2358 76.1185 53.5633L79.7319 51.6511C80.0268 51.4948 80.3645 51.4384 80.6942 51.4903C81.0239 51.5422 81.3279 51.6997 81.5605 51.939L84.7387 55.2249C85.1607 55.6623 85.2794 56.3019 85.042 56.8602L83.3474 60.8319C83.6288 61.3484 83.853 61.7902 84.0244 62.1595C84.209 62.5617 84.4376 63.1156 84.7101 63.8299L88.6598 65.5224C89.2532 65.7751 89.6202 66.3686 89.5807 67.0038L89.2906 71.5645C89.2707 71.8608 89.1644 72.1448 88.9846 72.3812C88.8049 72.6175 88.5597 72.796 88.2795 72.8943L84.5387 74.224C84.431 74.7406 84.3189 75.1824 84.2002 75.556C84.0088 76.1331 83.7902 76.7008 83.5452 77.2572L85.4244 81.4113C85.5571 81.7032 85.5928 82.0299 85.5263 82.3435C85.4599 82.6572 85.2948 82.9413 85.0552 83.1543L81.4814 86.3458C81.2461 86.555 80.9524 86.6874 80.6397 86.7251C80.327 86.7628 80.0102 86.7041 79.7319 86.5568L76.0482 84.605C75.4719 84.9101 74.8773 85.1795 74.2679 85.4116L72.659 86.0139L71.2304 89.9702C71.1245 90.2599 70.9336 90.5109 70.6825 90.6901C70.4315 90.8694 70.1321 90.9686 69.8237 90.9746L65.6477 91.0691C65.3311 91.0775 65.0198 90.9874 64.7564 90.8115C64.4931 90.6356 64.2908 90.3823 64.1773 90.0867L62.4937 85.6314C61.9193 85.4351 61.3506 85.2225 60.7882 84.994C60.3282 84.7949 59.8751 84.5801 59.4299 84.35L55.2538 86.1347C54.9787 86.2521 54.6753 86.287 54.3807 86.2351C54.0861 86.1832 53.8129 86.0468 53.5944 85.8424L50.5042 82.9433C50.2741 82.7284 50.1174 82.4466 50.0563 82.1378C49.9951 81.8289 50.0327 81.5087 50.1635 81.2223L51.9592 77.31C51.7204 76.8466 51.499 76.3744 51.2954 75.8945C51.0578 75.307 50.8379 74.7126 50.636 74.1119L46.7018 72.9141C46.382 72.8174 46.1031 72.6179 45.9083 72.3464C45.7136 72.0749 45.6139 71.7468 45.6248 71.4129L45.7787 67.1906C45.7896 66.9151 45.8757 66.6479 46.0275 66.4177C46.1794 66.1876 46.3913 66.0034 46.6403 65.885L50.7679 63.9025C50.9591 63.2013 51.1262 62.6562 51.2734 62.2584C51.4808 61.727 51.7111 61.2049 51.9636 60.6935L50.1745 56.913C50.0387 56.6259 49.9975 56.3031 50.0567 55.9911C50.116 55.6791 50.2726 55.3939 50.5042 55.1766L53.59 52.2621C53.8064 52.0581 54.077 51.9209 54.3695 51.8671C54.6619 51.8133 54.9637 51.8451 55.2385 51.9588L59.4101 53.682C59.8716 53.3743 60.2892 53.1259 60.6673 52.9259C61.1178 52.6863 61.7201 52.4357 62.4783 52.1654L63.929 48.119C64.0362 47.8228 64.2322 47.567 64.4903 47.3865C64.7483 47.2059 65.0558 47.1094 65.3708 47.1101H69.9732ZM68.8962 50.1367H66.45L65.1202 53.86C65.042 54.0771 64.9155 54.2736 64.7503 54.4347C64.5851 54.5958 64.3854 54.7172 64.1663 54.7898C63.208 55.1085 62.5157 55.3832 62.1113 55.5964C61.6827 55.8228 61.1354 56.1679 60.4849 56.6294C60.2719 56.7789 60.0247 56.8721 59.7661 56.9006C59.5075 56.929 59.246 56.8917 59.0057 56.7921L54.9835 55.1326L53.4164 56.6141L55.0494 60.0648C55.1472 60.2702 55.1968 60.4951 55.1945 60.7225C55.1923 60.9498 55.1381 61.1737 55.0362 61.377C54.5967 62.2584 54.3 62.909 54.1505 63.309C53.9213 63.9749 53.7233 64.6512 53.5571 65.3355C53.5018 65.5497 53.4004 65.7492 53.26 65.9201C53.1195 66.091 52.9433 66.229 52.7438 66.3246L48.8096 68.2126L48.7305 70.3666L52.2911 71.448C52.7636 71.5909 53.1373 71.9536 53.2933 72.4195C53.645 73.4745 53.9263 74.2526 54.1285 74.7406C54.3964 75.3598 54.6927 75.9663 55.0165 76.5583C55.126 76.7619 55.1868 76.9882 55.194 77.2193C55.2013 77.4505 55.1548 77.6801 55.0582 77.8902L53.4076 81.4905L54.9703 82.9587L58.887 81.2839C59.0979 81.1937 59.3263 81.1517 59.5556 81.1608C59.7848 81.1699 60.0092 81.23 60.2123 81.3366C61.0145 81.7586 61.6124 82.051 61.9904 82.2114C62.375 82.3719 63.1113 82.64 64.1795 83.0049C64.3916 83.0773 64.585 83.1956 64.7461 83.3513C64.9072 83.5071 65.0319 83.6965 65.1114 83.906L66.6675 88.0184L68.7028 87.9744L70.015 84.339C70.09 84.1316 70.2093 83.9429 70.3645 83.7862C70.5197 83.6294 70.7072 83.5083 70.9139 83.4313L73.1931 82.5785C73.769 82.3653 74.4679 82.029 75.2833 81.5674C75.509 81.4406 75.7629 81.3726 76.0218 81.3695C76.2806 81.3664 76.5361 81.4284 76.7647 81.5498L80.2308 83.3851L82.1803 81.6465L80.4748 77.8814C80.3872 77.6882 80.3417 77.4785 80.3413 77.2662C80.3409 77.054 80.3857 76.8442 80.4726 76.6506C80.8726 75.756 81.1429 75.0812 81.2792 74.6504C81.4133 74.2284 81.5517 73.6196 81.6858 72.8371C81.7319 72.5714 81.8481 72.3227 82.0223 72.1167C82.1966 71.9108 82.4226 71.7551 82.6771 71.6656L86.2992 70.3798L86.4575 67.8742L82.8969 66.3488C82.7073 66.2681 82.5361 66.1497 82.3937 66.0009C82.2512 65.852 82.1405 65.6757 82.0683 65.4828C81.8143 64.7822 81.5372 64.0902 81.2374 63.4079C80.9536 62.8139 80.6456 62.2317 80.3143 61.6628C80.1995 61.4617 80.1329 61.2369 80.1195 61.0058C80.1062 60.7747 80.1465 60.5437 80.2374 60.3308L81.8309 56.5943L80.1517 54.8579L76.8812 56.5899C76.6677 56.7031 76.4306 56.7647 76.189 56.7697C75.9473 56.7746 75.7079 56.7228 75.4899 56.6185C74.7957 56.2733 74.0858 55.9608 73.3624 55.6821C72.7455 55.475 72.1164 55.3061 71.4788 55.1766C71.2257 55.1229 70.9905 55.0058 70.7952 54.8363C70.5999 54.6667 70.4509 54.4503 70.3622 54.2073L68.8962 50.1367Z"
                  fill="#ECD9FF"
                />
                <path
                  d="M95.2501 45.552C95.9398 45.522 96.4746 44.9386 96.4446 44.2489L95.9557 33.0095C95.9257 32.3198 95.3422 31.785 94.6525 31.815C93.9628 31.845 93.428 32.4284 93.458 33.1181L93.8926 43.1087L83.9021 43.5433C83.2124 43.5733 82.6776 44.1567 82.7076 44.8464C82.7376 45.5361 83.321 46.0709 84.0107 46.0409L95.2501 45.552ZM35.6021 84.1765C28.9521 61.0175 37.0063 45.1855 49.7925 38.1503C62.6756 31.0617 80.6873 32.7 94.3511 45.2246L96.0404 43.3817C81.6444 30.1859 62.4773 28.3173 48.5873 35.9599C34.6002 43.6559 26.2868 60.7933 33.1992 84.8665L35.6021 84.1765Z"
                  fill="#ECD9FF"
                />
                <path
                  d="M38.7688 91.1993C38.6972 90.5127 39.1959 89.898 39.8825 89.8264L51.0719 88.6601C51.7585 88.5885 52.3731 89.0871 52.4447 89.7737C52.5163 90.4604 52.0177 91.075 51.3311 91.1466L41.3849 92.1834L42.4217 102.129C42.4933 102.816 41.9947 103.431 41.3081 103.502C40.6214 103.574 40.0068 103.075 39.9352 102.389L38.7688 91.1993ZM40.7996 90.0989C59.5122 105.279 77.2333 104.06 88.7096 95.0442C100.273 85.9605 105.811 68.743 99.6288 51.2683L101.986 50.4345C108.499 68.8456 102.721 87.2165 90.254 97.0102C77.6998 106.872 58.6758 107.819 39.2246 92.0405L40.7996 90.0989Z"
                  fill="#ECD9FF"
                />
              </svg>
              <h4 className="text-[18px] font-bold leading-snug tracking-tight mt-4 mb-1">
                Inclusive Finance
              </h4>
              {/* <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                width="80"
                height="80"
                viewBox="0 0 135 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="67.5" cy="67.5" r="67.5" fill="#9453FF" />
                <path
                  d="M97.529 80.9263V55.6887C97.5275 53.9812 97.1864 52.2909 96.5256 50.7164C95.8648 49.1419 94.8974 47.7145 93.6798 46.5174C91.2006 44.0789 87.8613 42.7141 84.3839 42.718H51.5009C48.0234 42.7141 44.6841 44.0789 42.2049 46.5174C40.9879 47.7148 40.0211 49.1423 39.3608 50.7168C38.7005 52.2913 38.36 53.9814 38.3589 55.6887V80.9263C38.3589 84.3675 39.7447 87.6655 42.2081 90.0977C44.6873 92.5361 48.0265 93.9009 51.504 93.897H84.387C87.8749 93.897 91.2164 92.5268 93.6829 90.0977C94.9004 88.9004 95.8677 87.473 96.5285 85.8985C97.1893 84.324 97.5273 82.6339 97.529 80.9263Z"
                  stroke="#ECD9FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M66.8011 80.6648C66.8011 78.1361 65.7921 75.7132 63.9921 73.9226C62.1886 72.13 59.749 71.1239 57.2062 71.1239C54.6634 71.1239 52.2239 72.13 50.4203 73.9226C49.5307 74.8056 48.8244 75.856 48.3423 77.0131C47.8602 78.1702 47.6118 79.4113 47.6113 80.6648M75.9413 58.7127H87.1338M75.9413 68.3076H80.7372M75.9413 77.9025H87.1338M57.2062 68.7436C58.9027 68.7436 60.5297 68.0697 61.7293 66.8701C62.9289 65.6705 63.6028 64.0435 63.6028 62.347C63.6028 60.6506 62.9289 59.0236 61.7293 57.824C60.5297 56.6244 58.9027 55.9504 57.2062 55.9504C55.5097 55.9504 53.8827 56.6244 52.6831 57.824C51.4836 59.0236 50.8096 60.6506 50.8096 62.347C50.8096 64.0435 51.4836 65.6705 52.6831 66.8701C53.8827 68.0697 55.5097 68.7436 57.2062 68.7436Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-[18px] font-bold leading-snug tracking-tight mt-4 mb-1">
                Trusted Credentials
              </h4>
              {/* <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                width="80"
                height="80"
                viewBox="0 0 135 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="67.5" cy="67.5" r="67.5" fill="#9453FF" />
                <circle
                  cx="67.5"
                  cy="67.5"
                  r="38.75"
                  stroke="#ECD9FF"
                  strokeWidth="3.5"
                />
                <circle
                  cx="68.0331"
                  cy="68.0327"
                  r="33.3882"
                  stroke="#ECD9FF"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M67.5001 60.0395H63.237V51.5132H71.7633V60.0395H67.5001ZM67.5001 60.0395V75.4934M67.5001 60.0395L54.7106 75.4934M67.5001 60.0395L80.8225 75.4934M67.5001 75.4934H63.237V84.0198H71.7633V75.4934H67.5001ZM54.7106 75.4934H46.1843V84.0198H54.7106V75.4934ZM80.8225 75.4934V84.0198H89.3488V75.4934H80.8225Z"
                  stroke="#F7EEFF"
                  strokeWidth="2.5"
                />
              </svg>

              <h4 className="text-[18px] font-bold leading-snug tracking-tight mt-4 mb-1">
                Supply Chain Finance
              </h4>
              {/* <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
