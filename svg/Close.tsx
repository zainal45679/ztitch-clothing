import * as React from "react"
import { SVGProps } from "react"
const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M0 0h24v24H0z" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7 17 9.9-9.9M7 7l9.9 9.9"
    />
  </svg>
)
export default Close
