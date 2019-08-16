import api from './_api'
import Sales from './Sales'

export interface InitOptions {}

const init = (options: InitOptions) => {}

const layout = 'DashboardLayout'

export { default } from './Sales'
export { init, api, layout, Sales }
