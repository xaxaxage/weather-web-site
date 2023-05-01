import { FaSearchLocation } from "react-icons/fa";

function Search() {
  return (
    <div>
      <form action="/city" method="post">
        <input type="text" placeholder="Enter a city.."/>
        <button type="submit"><FaSearchLocation /></button>
      </form>
    </div>
  )
}

export default Search