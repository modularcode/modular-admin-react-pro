import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Built with '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI
        </Link>
        {' | Modularized by '}
        <Link color="inherit" href="https://modularcode.io/">
          ModularCode.io
        </Link>
      </Typography>
    </footer>
  )
}

export default Footer
