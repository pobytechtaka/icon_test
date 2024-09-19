import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Pin24 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.75 15.75 3.75 3.75M9.53 2.78l5.845 5.845s2.601-1.3 5.381.942a.75.75 0 0 1 .061 1.116L10.702 20.798a.748.748 0 0 1-1.129-.078c-.787-1.046-2.023-3.195-.948-5.345L2.781 9.53a.75.75 0 0 1 0-1.06L8.47 2.78a.75.75 0 0 1 1.06 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Pin24);
export default ForwardRef;
