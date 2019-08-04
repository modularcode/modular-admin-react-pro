import React from 'react'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Tooltip from '@material-ui/core/Tooltip'
import IconMore from '@material-ui/icons/MoreVert'
import IconFilter from '@material-ui/icons/Tune'
import IconDropDown from '@material-ui/icons/ArrowDropDown'
import IconShare from '@material-ui/icons/Share'

const MainActions: React.FC<any> = () => {
  return (
    <div>
      <IconDropDown /> 5 Aug 2019 - 12 Aug 2019
      <ButtonGroup
        size="small"
        aria-label="Page Actions"
        variant="outlined"
        color="secondary"
      >
        {/* <Button variant="contained" href="#contained-buttons">
  </Button> */}
        <Tooltip title="Filter">
          <Button color="secondary" href="#contained-buttons">
            <IconFilter />
          </Button>
        </Tooltip>
        <Tooltip title="More actions">
          <Button color="secondary">
            <IconMore />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}

export default MainActions
