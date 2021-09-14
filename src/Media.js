import { createMedia } from "@artsy/fresnel"
const QueryBreakpoints = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
  interactions: {
    portrait: "not all and (orientation: portrait)",
  },
})
// Generate CSS to be injected into the head
export const mediaStyles = QueryBreakpoints.createMediaStyle()
export const { Media, MediaContextProvider } = QueryBreakpoints