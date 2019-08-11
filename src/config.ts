interface Config {
  navigationType: 'hash' | 'history'
  useSampleData?: boolean
  api: {
    baseUrl: string
  }
  apiRest?: {
    baseUrl: string
  }
  apiQL?: {
    baseUrl: string
  }
}

const config: Config = {
  navigationType: 'hash',
  useSampleData: true,
  api: {
    baseUrl: '',
  },
}

export default config
