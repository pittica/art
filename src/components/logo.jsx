import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

export default function Logo({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 140"
      className="logo-pittica"
      width={width}
      height={height}
    >
      <path
        className="logo-pittica-logo"
        fill={color}
        d="M164.4,4.5h35c10.6,0,18.1,3.4,22.7,10.3c4.5,6.8,6.8,16.8,6.8,29.9s-2,23-6,29.7c-3.9,6.7-11.2,10-21.6,10 h-10.7v52.4h-26.1V4.5H164.4z M191.9,60.6c3.2,0,5.5-0.6,7-1.8c1.5-1.1,2.5-2.8,2.9-5.1c0.5-2.3,0.7-5.4,0.7-9.5 c0-5.5-0.6-9.6-1.8-12c-1.2-2.5-3.7-3.7-7.3-3.7h-2.9v32L191.9,60.6L191.9,60.6z M238.7,136.8V4.5h25.5v132.3L238.7,136.8 L238.7,136.8z M289.9,136.8V29.9h-15.7V4.5h57.9v25.4h-15.7v106.9L289.9,136.8L289.9,136.8z M357.5,136.8V29.9h-15.7V4.5h57.9v25.4 H384v106.9L357.5,136.8L357.5,136.8z M409.6,136.8V4.5h25.5v132.3L409.6,136.8L409.6,136.8z M454.3,129c-5.8-6.1-8.7-14.3-8.7-24.9 V43.1c0-13.1,2.6-23,7.9-29.7c5.2-6.7,13.4-10,24.6-10c9.7,0,17.6,2.7,23.6,8s8.9,13,8.9,23.1v22.8h-26.4V37.8 c0-3.8-0.5-6.4-1.4-7.9c-0.9-1.5-2.5-2.1-4.7-2.1c-2.4,0-3.9,0.8-4.9,2.5c-0.9,1.7-1.4,4.1-1.4,7.2v66.2c0,3.5,0.6,6,1.6,7.7 c1,1.6,2.6,2.4,4.6,2.4c4.1,0,6.2-3.4,6.2-10V79.9H511v24.9c0,22.1-11.2,33.3-33.4,33.3C467.9,138.1,460.1,135,454.3,129z M518,136.8L530.7,4.5h44.9l12.6,132.3h-25.1l-1.8-21.4h-16l-1.6,21.4H518z M547.3,94.4h12l-5.9-67.3h-1.2L547.3,94.4z"
      />
      <path
        className={classNames("logo-pittica-icon", "logo-pittica-icon-1")}
        fill={color}
        d="M93.2,40.8l-6.4,11.3h-29l14.6,25.1l-6.5,11.3L38.3,40.7h54.8V40.8z M102.9,51.9h26.5l-17.9,31.3l-17.9,31.1 l-13.3-23l-6.5,11.4l19.9,34.5l55.6-96.6h-39.7L102.9,51.9z"
      />
      <path
        className={classNames("logo-pittica-icon", "logo-pittica-icon-2")}
        fill={color}
        d="M83.2,84l-20.5,35.7L7,22.9h41l6.5,11.3H26.7l17.9,31.4l17.9,31.1l13.9-24.2L83.2,84z M98.4,34.2L84.5,58.4 l6.5,11.3l26.9-46.6H64.2l6.4,11.3h27.8V34.2z"
      />
      <path
        className={classNames("logo-pittica-icon", "logo-pittica-icon-3")}
        fill={color}
        d="M66.8,53.3H80l14.4,25.1l14.4-25.1H122l-27.6,48L66.8,53.3z M72.1,39.3L58.5,15.7h35.9h35.9l-13.5,23.6h13 l20.1-34.9H39l20.1,34.9H72.1z"
      />
    </svg>
  )
}

Logo.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

Logo.defaultProps = {
  width: 316,
  height: 69,
}
