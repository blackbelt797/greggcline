import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M56 56h400v400H56z"
      style={{
        fill: "none",
      }}
    />
    <path
      d="M161.014 464.013c193.208 0 298.885-160.071 298.885-298.885 0-4.546 0-9.072-.307-13.578A213.7 213.7 0 0 0 512 97.176a209.7 209.7 0 0 1-60.334 16.527 105.43 105.43 0 0 0 46.182-58.102 210.6 210.6 0 0 1-66.703 25.498 105.18 105.18 0 0 0-76.593-33.112c-57.682 0-105.145 47.464-105.145 105.144 0 8.002.914 15.979 2.722 23.773-84.418-4.231-163.18-44.161-216.494-109.752-27.724 47.726-13.379 109.576 32.522 140.226A104.26 104.26 0 0 1 20.48 194.23v1.331c.014 49.814 35.447 93.111 84.275 102.974a104.9 104.9 0 0 1-47.431 1.802c13.727 42.685 53.311 72.108 98.14 72.95a210.83 210.83 0 0 1-130.458 45.056A214 214 0 0 1 0 416.827a297.4 297.4 0 0 0 161.014 47.104"
      style={{
        fill: "#1da1f2",
        fillRule: "nonzero",
      }}
    />
  </svg>
);
export default SvgTwitter;
