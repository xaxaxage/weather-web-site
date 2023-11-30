import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

function SearchLine({refreshComponents, addCityIntoStorage }) {
  const addCity = (e, city) => {
    e.preventDefault()
    addCityIntoStorage(city)
    refreshComponents()
  }

  const [data, setData] = useState({city: ''})

  function handleInputChange(text, name) {
     setData({...data, [name]: text.target.value})   
  }  

  return (
    <div>
      <input type="text" placeholder="Enter a city.." value={data.city} onChange={(e) => handleInputChange(e, 'city')} />
      <button onClick={(event) => {addCity(event, data.city)}} type="submit"><FaSearchLocation /></button>
    </div>
  )

  // const addCity = (e, city) => {
  //   e.preventDefault()
  //   console.log(e)
  // }

  // return (
  //   <div>
  //       <input type="text" placeholder="Enter a city.."/>
  //       <button onSubmit={(event) => {addCity(event, 'city')}} type="submit"><FaSearchLocation /></button>
  //   </div>
  // )
}

export default SearchLine