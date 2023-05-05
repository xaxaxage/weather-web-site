import { FaSearchLocation } from "react-icons/fa";

const addCity = () => {
  
}

function SearchLine() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter a city.."/>
        <button onSubmit={(e) => {console.log(e)}} type="submit"><FaSearchLocation /></button>
      </form>
    </div>
  )
}

export default SearchLine