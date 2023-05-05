import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import StorageContext from './context/StorageContext';
import Menu from './components/menu/Menu';
import SearchLine from './components/searchLine/SearchLine';
import CitiesWeather from './components/citiesWeather/CitiesWeather';
import Footer from './components/footer/Footer';

let loading = true

function App() {
  const [storage, setStorage] = useState(localStorage)
  const [citiesInfo, setCitiesInfo] = useState([])
  
  useEffect(() => {
    let cities = JSON.parse(storage.cities)
    const preCitiesInfo = []

    cities.forEach((city, i, arr) => {
      axios.get(`http://api.weatherapi.com/v1/current.json?key=e261104db71046f5bc9142355232102&q=${city}&aqi=no`)
        .then((response) => {
          preCitiesInfo.push({city: city, temperature: Math.round(response.data.current.temp_c)+'°'})

          if ([...arr].pop() === city) {
            loading = false
            setCitiesInfo(preCitiesInfo.toSorted())
          }
        })
    })
  }, [storage.cities])

  return loading ? <h1>Loading...</h1> : (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={
              <>
                <StorageContext.Provider value={[storage, setStorage]}>
                  <h1>Have a nice weather!</h1>
                  <SearchLine />
                  <CitiesWeather citiesInfo={citiesInfo} />
                  <Footer />
                </StorageContext.Provider>
              </>} 
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
