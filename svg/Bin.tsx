import * as React from "react"
import { SVGProps } from "react"
const Bin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#1C1C1C" strokeLinecap="round" strokeWidth={1.7}>
      <path d="M5.737 6.544v12.442c0 .759.616 1.374 1.375 1.374h9.777c.76 0 1.375-.615 1.375-1.374V6.544m-15.355 0h18.182M8 6V4.414C8 3.634 8.633 3 9.414 3h5.172C15.366 3 16 3.633 16 4.414V6" />
    </g>
  </svg>
)
export default Bin
