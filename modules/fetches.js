import axios from "axios";
import {API_URL} from '../modules/constants'

export const getPostBySlug = async (url) => {
  return await axios.get(`${API_URL}/getPost/${url}`)
}
export const getTotalCashBacks = async()=>{
  return await axios.get(`${API_URL}/getCashBackCount`)
}