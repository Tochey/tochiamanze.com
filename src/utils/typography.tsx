import Typography from "typography"
// @ts-ignore
import doelger from "typography-theme-doelger"


const typography = new Typography(doelger);

doelger.overrideThemeStyles = () => {
    return {
      "a.gatsby-resp-image-link": {
        boxShadow: `none`,
      },
    }
  }
  
export const { scale, rhythm, options } = typography
export default typography