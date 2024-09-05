import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Scissors24 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={30}
    fill="none"
    ref={ref}
    {...props}
  >
    <g filter="url(#prefix__a)">
      <path
        fill="currentColor"
        d="M11.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S4 3.79 4 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L12 12l-2.36 2.36C9.14 14.13 8.59 14 8 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L14 14l7 7h3v-1zM8 8a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 8m0 12a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 20m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5M21 3l-6 6 2 2 7-7V3z"
      />
    </g>
    <defs>
      <filter
        id="prefix__a"
        width={32}
        height={32}
        x={-2}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_464_98" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_464_98"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(Scissors24);
export default ForwardRef;
