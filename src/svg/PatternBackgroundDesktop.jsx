import * as React from "react"

const PatternBackgroundDesktop = (props) => (
  <svg
    className="pattern-background"
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={960}
    fill="none"
    {...props}
  >
    <circle cx={-50.5} cy={75.5} r={416.5} stroke="currentColor" strokeWidth={144} />
    <circle
      cx={1388.5}
      cy={840.5}
      r={416.5}
      stroke="currentColor"
      strokeWidth={144}
    />
  </svg>
)

  



export default PatternBackgroundDesktop
