import axios from 'axios';

// src/service/request.ts
const request = axios.create({
  baseURL: process.env.TARO_APP_API
})

export default request
