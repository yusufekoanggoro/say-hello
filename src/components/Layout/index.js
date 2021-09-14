import * as React from "react"
import PropTypes from "prop-types"
import * as Styles from "./style"
import { Media } from "../../Media"

const Layout = ({ children }) => {
  return (
    <>
      <Media lessThan="sm">
        <Styles.Container>
          {children}
        </Styles.Container>
      </Media>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
