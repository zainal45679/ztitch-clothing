import * as React from "react"
import { SVGProps } from "react"
const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
    fill="currentColor"
     d="M16 32C7.178 32 0 24.822 0 16S7.178 0 16 0s16 7.178 16 16-7.178 16-16 16Zm0-30C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2Zm7 15H11.414l2.293 2.293a.999.999 0 1 1-1.414 1.414l-4-4a.999.999 0 0 1-.216-1.089.999.999 0 0 1 .216-.325l4-4a.999.999 0 1 1 1.414 1.414L11.414 15H23a1 1 0 0 1 0 2Z" />
  </svg>
)
export default Arrow
