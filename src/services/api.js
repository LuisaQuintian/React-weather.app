
import axios from 'axios'

export const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=pelotas&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
})