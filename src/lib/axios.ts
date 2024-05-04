import type { AxiosInstance } from 'axios'
import ax from 'axios'

const API_BASE_URL = 'https://663508809bb0df2359a39adf.mockapi.io/api'

interface CustomAxiosInstance extends AxiosInstance {
  setAuthToken: (token?: string) => void
}

const axios: CustomAxiosInstance = ax.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
}) as CustomAxiosInstance

export default axios
