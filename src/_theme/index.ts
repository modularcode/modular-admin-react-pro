import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900],
    },
    primary: {
      main: indigo[700],
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', 'sans-serif'].join(','),
  },
})

console.log(theme)

export default theme
