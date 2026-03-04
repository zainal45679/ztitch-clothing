import * as React from "react"
import { SVGProps } from "react"
const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M5 17h14M5 12h14M5 7h14"
    />
  </svg>
)
export default Hamburger
