import { Chart } from 'chart.js'
import { random } from 'lodash'
import moment from 'moment'

// import ordersData from '../../_api/_data/ordersData'
import api from '../../_api'
import { SalesDahsboardContextFilter } from '../overviewContext'

export interface GetChartDataOptions {
  filter: SalesDahsboardContextFilter
}

export default {
  getRandomNumber(min = 0, max = 1): number {
    return random(min, max)
  },
  async getChartData({ filter }: GetChartDataOptions): Promise<Chart.ChartData> {
    interface ChartDataSet extends Chart.ChartDataSets {
      data: number[]
    }

    const orders = await api.orders.getSum({
      $select: [['func_sum', '']],
      $filter: {
        createdAt: {
          ge: filter.dateFrom,
          le: filter.dateTo,
        },
      },
      $groupBy: [['func_date_day', 'createdAt']],
    })

    console.log('orders', orders)

    // const timeFormat = 'MM/DD/YYYY'

    // const today = moment().startOf('day')
    // const oneMonthAgo = moment(today).subtract(15, 'days')

    const labels: string[] = []
    // const signups: ChartDataSet = {
    //   type: 'bar',
    //   label: 'Signups',
    //   backgroundColor: '#e8e8e8',
    //   data: [],
    // }
    const ordersCount: ChartDataSet = {
      type: 'line',
      label: 'Number of orders',
      backgroundColor: '#1e88e5',
      borderColor: '#1e88e5',
      fill: false,
      data: [],
    }
    const ordersSum: ChartDataSet = {
      type: 'line',
      label: 'Total orders $',
      backgroundColor: '#95de3c',
      borderColor: '#95de3c',
      fill: false,
      data: [],
      yAxisID: 'y-axis-2',
    }

    // for (let now = moment(oneMonthAgo); now.isSameOrBefore(today); now.add(1, 'day')) {
    //   labels.push(now.format(timeFormat))

    //   const signupsValue = random(10, 150)
    //   const ordersCountValue = random(0, 25)
    //   const ordersSumValue = random(10, 315)

    //   signups.data.push(signupsValue)
    //   ordersCount.data.push(ordersCountValue)
    //   ordersSum.data.push(ordersSumValue)
    // }

    return {
      labels,
      datasets: [ordersSum, ordersCount], // signups
    }
  },
  getChartOptions(options: GetChartDataOptions): Chart.ChartOptions {
    const timeFormat = 'MM/DD/YYYY'

    return {
      // responsive: true,
      title: {
        text: 'Chart.js Combo Time Scale',
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            display: true,
            time: {
              parser: timeFormat,
            },
          },
        ],
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
          },
          {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                return '$' + value
              },
            },
          },
        ],
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'index',
        intersect: false,
      },
    }
  },
  // In real life this would be an http call
  async getChartConfiguration(
    options: GetChartDataOptions,
  ): Promise<Chart.ChartConfiguration> {
    const configuration = {
      type: 'bar',
      options: this.getChartOptions(options),
      data: await this.getChartData(options),
    }

    return new Promise(resolve => setTimeout(() => resolve(configuration), 300))
  },
}
