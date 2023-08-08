import PropTypes from "prop-types"
import { forwardRef } from "react"
// icons
import { Icon } from "@iconify/react"
// @mui
import { Box } from "@mui/material"

// ----------------------------------------------------------------------

interface IconifyProps {
  icon: string
  width?: number | string
  sx?: object
  [key: string]: any // これは他の任意のpropsを受け入れるための定義です。
}

const Iconify = forwardRef<HTMLDivElement, IconifyProps>(({ icon, width = 20, sx, ...other }, ref) => (
  <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
))

Iconify.propTypes = {
  sx: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default Iconify
