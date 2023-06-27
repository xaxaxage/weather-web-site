import { FaSearchLocation } from "react-icons/fa";

function SearchLine({ addCityIntoStorage }) {
//   const addCity = (e, city) => {
//     e.preventDefault()
//     console.log(e)
//   }

//   const [data, setData] = useState('')

//   function handleInputChange(text, name) {
//      setData({...data, [name]: text.target.value})   
//   }  
//   return (
//     <div>
//         <input type="text" placeholder="Enter a city.." value={data.city} onChange={(e) => handleInputChange(e, 'username')} />
//         <button onSubmit={(event) => {addCity(event, 'city')}} type="submit"><FaSearchLocation /></button>
//     </div>
//   )

  const addCity = (e, city) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div>
        <input type="text" placeholder="Enter a city.."/>
        <button onSubmit={(event) => {addCity(event, 'city')}} type="submit"><FaSearchLocation /></button>
    </div>
  )
}

export default SearchLine