import axios from "axios"

const isDevelopment = process.env.NODE_ENV === "development"
const localPort = process.env.PORT || 8080

const baseURL = isDevelopment
  ? `http://localhost:${localPort}`
  : `https://sunnygolovine.com`

export function useRequestInterceptor() {
  axios.interceptors.request.use(config => ({
    ...config,
    baseURL,
  }))
}
