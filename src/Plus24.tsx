import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Plus24 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
  </svg>
);
const ForwardRef = forwardRef(Plus24);
export default ForwardRef;
