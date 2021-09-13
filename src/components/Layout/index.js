import * as React from "react"
import PropTypes from "prop-types"
import * as Styles from "./style"

const Layout = ({ children }) => {
  return (
    <Styles.Container>
        {children}
    </Styles.Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
