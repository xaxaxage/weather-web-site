import axios from "axios"
import { useContext } from "react"

const cities = JSON.parse(useContext(storageContext)[0].cities)

const citiesInfo = cities.map(async (city, index) => {
  const data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=e261104db71046f5bc9142355232102&q=${city}&aqi=no`)

  return {city: city, temperature: Math.round(data.current.temp_c)+'°'}
})

const CitiesWeather = () => {
  return (
    citiesInfo.map(({ city, temperature}, index) => {
      <div>
        <h4>city</h4>
        <h4>temperature</h4>
      </div>
    })
  )
}

export default CitiesWeather