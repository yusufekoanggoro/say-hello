/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"
import { MediaContextProvider } from "./src/Media"

export const wrapRootElement = ({ element }) => (
    <MediaContextProvider>{element}</MediaContextProvider>
)