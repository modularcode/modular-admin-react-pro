import { AxiosResponse } from 'axios'
import User, { UserId } from '_types/User'
import apiClient from './client'

export interface UsersService {
  getProfile(): Promise<User>
  getOne(userId: UserId): Promise<User>
}

const usersService: UsersService = {
  getProfile() {
    return apiClient.get('/users/profile').then((res: AxiosResponse<User>) => res.data)
  },
  getOne(userId) {
    return apiClient.get(`/users/${userId}`).then((res: AxiosResponse<User>) => res.data)
  },
}

export default usersService
