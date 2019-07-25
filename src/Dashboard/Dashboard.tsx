import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

// import PropTypes from 'prop-types'

import Header from './_common/Header/Header'
import Sidebar from './_common/Sidebar/Sidebar'
import Footer from './_common/Footer/Footer'
import Main from './Main/Main'

// const drawerWidth = 240

export interface DashboardProps extends RouteComponentProps {}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))

/*
const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

   // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
*/

export default function Dashboard({ match }: DashboardProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Route path={`${match.url}/`} component={Main} />
        </Container>
        <Footer />
      </main>
    </div>
  )
}

// interface DashboardProps extends RouteComponentProps {}

// const Dashboard = ({ match }: DashboardProps) => {
//   return (
//     <div className={styles.Dashboard}>
//       <Route path={`${match.url}/`} component={Main} />
//     </div>
//   )
// }

// export default Dashboard
