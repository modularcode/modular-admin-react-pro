import React, { useEffect, useRef } from 'react' //useState
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Chart } from 'chart.js'

import mainHistoryService from './ordersHistoryService'

// ref: https://www.robinwieruch.de/react-hooks-fetch-data/
const MainHistory = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // const canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef()
  const classes = useStyles()
  // const [chartConfiguration, setChartConfiguration] = useState({})

  useEffect(() => {
    if (canvasRef.current === null) {
      return
    }

    async function requestChartData(canvasRefNode: HTMLCanvasElement) {
      if (!canvasRef) {
        return
      }

      const chartConfigurationRes = await mainHistoryService.getChartConfiguration()

      // setChartConfiguration(chartConfigurationRes)
      new Chart(canvasRefNode, chartConfigurationRes)
    }
    requestChartData(canvasRef.current)
  }, [canvasRef])

  // const canvasRef = useCallback(node => {
  //   if (node !== null) {
  //     console.log(node)
  //   }
  // }, [])

  // const [chartConfiguration, setChartConfiguration] = useState({})

  // useEffect(() => {
  //   async function requestChartData() {
  //     console.log('requestChartData')

  //     const chartConfiguration = await mainHistoryService.getChartConfiguration()
  //     setChartConfiguration(chartConfiguration)

  //     console.log(canvasRef.current)
  //   }
  //   requestChartData()
  // }, [])

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
