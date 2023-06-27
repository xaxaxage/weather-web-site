import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './components/menu/Menu';
import SearchLine from './components/searchLine/SearchLine';
import CitiesWeather from './components/citiesWeather/CitiesWeather';
import Footer from './components/footer/Footer';

let loading = true

function App() {
  console.log('rendered')

  const [citiesStorage, setCitiesStorage] = useState(localStorage.cities)
  const [citiesInfo, setCitiesInfo] = useState([])
  
  useEffect(() => {
    let cities = JSON.parse(citiesStorage)
    const preCitiesInfo = []

    cities.forEach((city, i, arr) => {
      console.log(city)
      axios.get(`http://api.weatherapi.com/v1/current.json?key=e261104db71046f5bc9142355232102&q=${city}&aqi=no`)
        .then((response) => {
          preCitiesInfo.push({city: city, temperature: Math.round(response.data.current.temp_c)+'°'})

          if ([...arr].pop() === city) {
            loading = false
            setCitiesInfo(preCitiesInfo.toSorted())
          }
        })
    })
  }, [citiesStorage])
    
  const addCityIntoStorage = (city) => {
    const parsedCitiesStorage = JSON.parse(citiesStorage)
    setCitiesStorage(JSON.stringify([...parsedCitiesStorage, city]))
  } 

  return loading ? <h1>Loading...</h1> : (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={
            <>
              <Menu />
              <Outlet />
            </>
          }>
            <Route index element={
              <>
                <h1>Have a nice weather!</h1>
                <SearchLine addCityIntoStorage={addCityIntoStorage} />
                <CitiesWeather citiesInfo={citiesInfo} />
                <Footer />
              </>
            } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
