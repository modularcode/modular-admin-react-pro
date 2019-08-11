/**
 * For the demo purposes we'll be using this predefined JWT token as the token of the signed in user
 * https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Db8fjZU7MkBZoJDjmjuvv2EeDgG9RSaZ1xKm__qHelw
 */

import store from 'store'

// import config from '../config'

const sampleToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Db8fjZU7MkBZoJDjmjuvv2EeDgG9RSaZ1xKm__qHelw'

export interface AuthService {
  token: string | null
  init(options?: AuthServiceInitOptions): void
  auth(token: string): void
  unauth(): void
  isAuthenticated(): boolean
  getToken(): string | null
}

interface AuthServiceInitOptions {
  useSampleData?: boolean
}

const authService: AuthService = {
  token: null,
  init<AuthServiceInitOptions>({ useSampleData = false } = {}) {
    if (useSampleData) {
      this.token = sampleToken
    } else {
      this.token = store.get('token') || null
    }
  },
  auth(token) {
    store.set('token', token)
  },
  unauth() {
    store.remove('token')
  },
  isAuthenticated() {
    return !!this.token
  },
  getToken() {
    return this.token
  },
}

export default authService
