import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconCode from '@material-ui/icons/Code'
import IconFavorite from '@material-ui/icons/Favorite'
import IconStar from '@material-ui/icons/Star'

// const SupportLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
//   <Link innerRef={ref as any} {...props} />
// ))

const HeaderDemo = () => {
  const classes = useStyles()

  return (
    <div className={classes.demo}>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        className={classes.button}
        href="https://github.com/modularcode/material-admin-react"
      >
        <IconCode className={classes.demoIcon} />
        View on GitHub
      </Button>
      <Button
        component={Link}
        size="small"
        variant="outlined"
        color="primary"
        className={classes.button}
        to="/demo/supporters"
      >
        <IconFavorite className={classes.demoIcon} />
        Support Us
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        className={classes.button}
        href="https://github.com/modularcode/material-admin-react/stargazers"
      >
        <IconStar className={classes.demoIcon} />
        Rate Us
      </Button>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  demo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  demoIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

export default HeaderDemo
