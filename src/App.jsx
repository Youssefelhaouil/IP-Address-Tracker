import { useEffect, useState } from "react"
import Result from "./pages/Result"
import Search from "./pages/Search"
import "leaflet/dist/leaflet.css";
import Map from "./pages/Map"

function App() {
  const [IpData, setIpData] = useState([]);
  const url = `https://freeipapi.com/api/json/192.143.156.101`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(
        error => console.log("error fetching data", error)
      )


  }, [])


  return (
    <>
      <Search />
      <Result />
      <Map />

    </>
  )
}

export default App
