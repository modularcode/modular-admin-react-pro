import React, { useEffect, useRef, useContext } from 'react' //useState
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Chart } from 'chart.js'

import overviewContext from '../overviewContext'
import mainHistoryService from './ordersHistoryService'

// ref: https://www.robinwieruch.de/react-hooks-fetch-data/
const MainHistory = () => {
  const { filter } = useContext(overviewContext)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const classes = useStyles()

  useEffect(() => {
    if (canvasRef.current === null) {
      return
    }

    async function renderChart(canvasRefNode: HTMLCanvasElement) {
      if (!canvasRef || !filter) {
        return
      }

      // console.log('filter', filter)

      const chartConfigurationRes = await mainHistoryService.getChartConfiguration({
        filter,
      })

      new Chart(canvasRefNode, chartConfigurationRes)
    }

    renderChart(canvasRef.current)
  }, [canvasRef, filter])

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
