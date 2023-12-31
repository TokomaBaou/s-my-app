import PropTypes from "prop-types"
import { ReactNode, useMemo } from "react"
// @mui
import { CssBaseline } from "@mui/material"
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles"
//
import palette from "./palette"
import shadows from "./shadows"
import typography from "./typography"
import GlobalStyles from "./globalStyles"
import customShadows from "./customShadows"
import componentsOverride from "./overrides"

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    [],
  )
// NOTE: 型アサーションを使用して、themeOptionsをany型に変換しています。　本来は、themeOptionsを型定義する必要があります。
  const theme = createTheme(themeOptions as any)
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
