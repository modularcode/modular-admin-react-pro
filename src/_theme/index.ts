import { Theme as MuiTheme, createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'

export interface Theme extends MuiTheme {
  sidebar: {
    width: number
    widthCollapsed: number
    background: string
    color: string
  }
  header: {
    background: string
  }
}

const coreTheme = createMuiTheme({
  palette: {
    secondary: {
      main: indigo[600],
    },
    primary: {
      main: blue[600], //'#619f30',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.8rem',
    },
    h3: {
      fontSize: '1.6rem',
    },
    h4: {
      fontSize: '1.4rem',
    },
    h5: {
      fontSize: '1.2rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
})

const theme = {
  ...coreTheme,
  header: {
    background: '#fff',
  },
  sidebar: {
    width: 240,
    widthCollapsed: coreTheme.spacing(7),
    background: '#535454;',
    color: '#fff',
  },
  sidebarWidth: 240,
  sidebarWidthCollapsed: coreTheme.spacing(7),
}

export default theme
