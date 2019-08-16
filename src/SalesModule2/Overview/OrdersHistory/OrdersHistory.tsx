import React, { useEffect, useRef } from 'react' //useState
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Chart } from 'chart.js'

import mainHistoryService from './ordersHistoryService'

// ref: https://www.robinwieruch.de/react-hooks-fetch-data/
const MainHistory = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const classes = useStyles()

  useEffect(() => {
    if (canvasRef.current === null) {
      return
    }

    async function requestChartData(canvasRefNode: HTMLCanvasElement) {
      if (!canvasRef) {
        return
      }

      const chartConfigurationRes = await mainHistoryService.getChartConfiguration()

      new Chart(canvasRefNode, chartConfigurationRes)
    }
    requestChartData(canvasRef.current)
  }, [canvasRef])

  return (
    <Card>
      <CardContent className={classes.content}>
        Order History
        <canvas ref={canvasRef} className={classes.chart} />
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  content: {},
  chart: {
    width: '100%',
    height: '200px',
  },
}))

export default MainHistory
