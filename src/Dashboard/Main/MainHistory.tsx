import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { ResponsiveLine, LineSerieData } from '@nivo/line'

import mainHistoryData from './MainHistoryData'

interface MyResponsiveLineProps {
  data: LineSerieData[]
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine: React.FC<MyResponsiveLineProps> = ({
  data /* see data tab */,
}: MyResponsiveLineProps) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 30, right: 20, bottom: 10, left: 50 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
    // curve="cardinal"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    colors={{ scheme: 'set3' }}
    pointSize={5}
    pointColor={{ from: 'color', modifiers: [] }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'color', modifiers: [] }}
    pointLabel="y"
    pointLabelYOffset={-12}
    areaOpacity={0.05}
    enableSlices="x"
    enableCrosshair={false}
    useMesh={true}
    legends={[
      {
        anchor: 'top',
        direction: 'row',
        justify: false,
        translateX: 22,
        translateY: -1,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 84,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 13,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    motionStiffness={140}
    motionDamping={25}
  />
)

const MainHistory = () => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent className={classes.chart}>
        Order History
        <MyResponsiveLine data={mainHistoryData} />
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  chart: {
    width: '100%',
    paddingBottom: '50%',
    height: 400,
  },
}))

export default MainHistory
