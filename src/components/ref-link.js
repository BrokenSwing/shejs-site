import { Link } from "gatsby"
import React from "react"

const RefLink = ({ refTo }) => (
  <Link to={"resources/bibliography#src_" + refTo} className="ref">
    [{refTo}]
  </Link>
)

export default RefLink
