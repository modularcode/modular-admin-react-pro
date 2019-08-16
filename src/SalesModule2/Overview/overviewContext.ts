import React from 'react'
import moment, { Moment } from 'moment'

export interface SalesDahsboardContextFilter {
  dateFrom: Moment
  dateTo: Moment
}

export interface SalesDahsboardContext {
  filter?: SalesDahsboardContextFilter
  setFilter?: any
}

// The default context, which is used when there is no provider
// (might be used for components testing)
export const salesDashboardContextDefault: SalesDahsboardContext = {
  filter: {
    dateFrom: moment()
      .subtract(14, 'day')
      .startOf('day'),
    dateTo: moment().startOf('day'),
  },
}

export const salesDashboardContext = React.createContext<SalesDahsboardContext>(
  salesDashboardContextDefault,
)

export const SalesDashboardProvider = salesDashboardContext.Provider
export const SalesDashboardConsumer = salesDashboardContext.Consumer

export default salesDashboardContext
