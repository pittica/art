import React from "react"
import PropTypes from "prop-types"

import Logo from "./logo"

export default function Credits({ color }) {
  return (
    <a href="https://pittica.com" title="Pittica" className="pittica-credits">
      created by <Logo color={color} width={105} height={23} />
    </a>
  )
}

Credits.propTypes = {
  color: PropTypes.string.isRequired,
}

Credits.defaultProps = {
  color: "#ffffff",
}
