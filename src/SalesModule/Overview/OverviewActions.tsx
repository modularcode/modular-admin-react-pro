import React, { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import IconMore from '@material-ui/icons/MoreVert'
import IconFilter from '@material-ui/icons/Tune'
import IconDropDown from '@material-ui/icons/ArrowDropDown'
import IconNew from '@material-ui/icons/Add'

import { Theme } from '../../_theme'
import salesDashboardContext from './overviewContext'

const MainActions: React.FC<any> = () => {
  const classes = useStyles()
  const { filter, setFilter } = useContext(salesDashboardContext)

  const dateFilterLabel = filter
    ? `${filter.dateFrom.format('ll')} - ${filter.dateTo.format('ll')}`
    : 'Date Filter'

  return (
    <div>
      <Tooltip title="Date Range">
        <Button>
          {dateFilterLabel} <IconDropDown />
        </Button>
      </Tooltip>
      <Tooltip title="Create new">
        <Button color="secondary">
          <IconNew className={classes.iconNew} />
          New
        </Button>
      </Tooltip>
      <Tooltip title="Filter">
        <Button color="secondary">
          <IconFilter />
        </Button>
      </Tooltip>
      <Tooltip title="More actions">
        <Button color="secondary">
          <IconMore />
        </Button>
      </Tooltip>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  iconNew: {
    marginRight: 5,
  },
}))

export default MainActions
