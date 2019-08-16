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

const salesDashboardContext = React.createContext<SalesDahsboardContext>({})

export const SalesDashboardProvider = salesDashboardContext.Provider
export const SalesDashboardConsumer = salesDashboardContext.Consumer

export default salesDashboardContext
