import React from "react"
import PropTypes from "prop-types"

export default function Icon({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 595.28"
      className="icon-pittica"
      width={width}
      height={height}
    >
      <path
        d="M341.19 209.11l-19 33h-84.86l42.44 73.77-19 33.09-80.5-139.86zm28.18 33h77.84l-105.1 183-38.92-67.65-19.3 33.54 58.22 101.2 163-283.06H388.62zM311.65 336l-60.07 104.43-163-283.32h120.21l19.24 33h-81.56l105.11 183.24 40.78-70.89zm44.73-145.89l-40.6 70.58 19 33.09 78.63-136.67H256.18l19 33zm-92.8 56h38.6l42.29 73.51 42.29-73.51h38.6l-80.89 140.6zm15.53-41l-39.7-69h210.12l-39.7 69H448l58.69-102H182.3l58.68 102z"
        fill={color}
      />
    </svg>
  )
}

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

Icon.defaultProps = {
  color: "#cc151a",
  width: 595,
  height: 595,
}
