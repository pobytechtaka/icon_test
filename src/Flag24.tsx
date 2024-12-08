import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Flag24 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path fill="currentColor" d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z" />
  </svg>
);
const ForwardRef = forwardRef(Flag24);
export default ForwardRef;
