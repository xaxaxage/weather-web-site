const CitiesWeather = ({ citiesInfo }) => {
  return (
    citiesInfo.map(({ city, temperature}, index) => (
      <div key={index}>
        <h4>{city}</h4>
        <h4>{temperature}</h4>
      </div>
    ))
  )
}

export default CitiesWeather