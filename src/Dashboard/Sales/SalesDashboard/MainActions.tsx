import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Tooltip from '@material-ui/core/Tooltip'
import IconMore from '@material-ui/icons/MoreVert'
import IconFilter from '@material-ui/icons/Tune'
import IconDropDown from '@material-ui/icons/ArrowDropDown'
import IconShare from '@material-ui/icons/Share'
import IconNew from '@material-ui/icons/Add'

import { Theme } from '../../../_theme'

const MainActions: React.FC<any> = () => {
  const classes = useStyles()

  return (
    <div>
      <Tooltip title="Date Range">
        <Button>
          5 Aug 2019 - 12 Aug 2019 <IconDropDown />
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
