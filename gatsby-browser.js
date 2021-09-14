/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css"
import * as React from "react"
import { MediaContextProvider } from "./src/Media"

export const wrapRootElement = ({ element }) => (
    <MediaContextProvider>{element}</MediaContextProvider>
)