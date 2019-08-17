import { AxiosResponse } from 'axios'
import Order, { OrderSubmissionData, OrderId } from '../_types/Order'
import apiClient from '_api/client'

export interface OrdersService {
  getOne(orderId: OrderId): Promise<Order>
  getList(params?: any): Promise<OrdersListResponse>
  create(order: OrderSubmissionData): Promise<Order>
  update(orderId: OrderId, order: OrderSubmissionData): Promise<Order>
  remove(orderId: OrderId): Promise<any>
}

export interface OrdersListResponse {
  orders: Order[]
  count: number
}

const ordersService: OrdersService = {
  getOne(orderId) {
    return apiClient
      .get(`/orders/${orderId}`)
      .then((res: AxiosResponse<Order>) => res.data)
  },
  getList(params: any) {
    return apiClient
      .get(`/orders`, {
        params,
      })
      .then((res: AxiosResponse<OrdersListResponse>) => res.data)
  },
  create(order: OrderSubmissionData) {
    return apiClient.post(`/orders`, order).then((res: AxiosResponse<Order>) => res.data)
  },
  update(orderId, order) {
    return apiClient
      .put(`/orders/${orderId}`, order)
      .then((res: AxiosResponse<Order>) => res.data)
  },
  remove(orderId) {
    return apiClient
      .delete(`/orders/${orderId}`)
      .then((res: AxiosResponse<any>) => res.data)
  },
}

export default ordersService
