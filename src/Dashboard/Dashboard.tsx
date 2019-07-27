import React from 'react'
import clsx from 'clsx'
import { Route, RouteComponentProps } from 'react-router-dom'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

// import PropTypes from 'prop-types'

import Header from './_common/Header/Header'
import Sidebar from './_common/Sidebar/Sidebar'
import Footer from './_common/Footer/Footer'
import Main from './Main/Main'

export interface DashboardProps extends RouteComponentProps {}

const drawerWidth = 240
// const drawerWidthCollapsed =

export default function Dashboard({ match }: DashboardProps) {
  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const isMobile = !isDesktop

  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = React.useState(false)
  const [isSidebarCollapsedDesktop, setIsSidebarCollapsedDesktop] = React.useState(false)

  function handleSidebarMobileToggle() {
    setIsSidebarOpenMobile(!isSidebarOpenMobile)
  }

  function handleSidebarToggle() {
    // Open/close on mobile
    if (isMobile) {
      setIsSidebarOpenMobile(!isSidebarOpenMobile)
    }
    // Collapse/uncollapse on desktop
    else {
      setIsSidebarCollapsedDesktop(!isSidebarCollapsedDesktop)
    }
  }

  return (
    <div className={classes.dashboardContainer}>
      <div
        className={clsx(
          classes.headerContainer,
          isDesktop && classes.headerContainerDesktop,
          isDesktop && isSidebarCollapsedDesktop && classes.headerContainerDesktopDrawerCollapsed,
        )}
      >
        <Header onToggle={handleSidebarToggle} />
      </div>
      <div
        className={clsx(
          classes.sidebarContainer,
          isDesktop && classes.sidebarContainerDesktop,
          isDesktop && isSidebarCollapsedDesktop && classes.sidebarContainerDesktopDrawerCollapsed,
        )}
      >
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={isSidebarOpenMobile}
            onClose={handleSidebarMobileToggle}
            classes={{
              paper: clsx(classes.drawer, classes.drawerMobile),
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Sidebar
              isDesktop={isDesktop}
              isMobile={isMobile}
              isSidebarCollapsedDesktop={isSidebarCollapsedDesktop}
              isSidebarOpenMobile={isSidebarOpenMobile}
            />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: clsx(
                classes.drawer,
                classes.drawerDesktop,
                isSidebarCollapsedDesktop && classes.drawerDesktopCollapsed,
              ),
            }}
            variant="permanent"
          >
            <Sidebar
              isDesktop={isDesktop}
              isMobile={isMobile}
              isSidebarCollapsedDesktop={isSidebarCollapsedDesktop}
              isSidebarOpenMobile={isSidebarOpenMobile}
            />
          </Drawer>
        </Hidden>
      </div>
      <main className={classes.content}>
        <div className={classes.headerSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Route path={`${match.url}/`} component={Main} />
        </Container>
        <Footer />
      </main>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    display: 'flex',
  },
  headerContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  headerContainerDesktop: {
    left: 'auto',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  headerContainerDesktopDrawerCollapsed: {
    width: `calc(100% - ${theme.spacing(7)}px)`,
  },
  sidebarContainer: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
  },
  sidebarContainerDesktop: {},
  sidebarContainerDesktopDrawerCollapsed: {
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
    },
  },
  drawer: {},
  drawerMobile: {
    width: drawerWidth,
  },
  drawerDesktop: {
    width: '100%',
    position: 'absolute',
  },
  drawerDesktopCollapsed: {
    overflowX: 'hidden',
    // transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    // width: theme.spacing(7),
  },
  // drawerPaper: {
  //   position: 'relative',
  //   whiteSpace: 'nowrap',
  //   width: drawerWidth,
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerPaperClose: {
  //   overflowX: 'hidden',
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   width: theme.spacing(7),
  //   [theme.breakpoints.up('sm')]: {
  //     width: theme.spacing(9),
  //   },
  // },
  headerSpacer: theme.mixins.toolbar,
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

// interface DashboardProps extends RouteComponentProps {}

// const Dashboard = ({ match }: DashboardProps) => {
//   return (
//     <div className={styles.Dashboard}>
//       <Route path={`${match.url}/`} component={Main} />
//     </div>
//   )
// }

// export default Dashboard
