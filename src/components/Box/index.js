import React from "react"
import * as Styles from "./style"

const Box = ({ children }) => {
    return(
        <Styles.Box>
            {children}
        </Styles.Box>
    )
}

export default Box;