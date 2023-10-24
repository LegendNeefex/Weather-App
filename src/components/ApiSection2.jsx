import { useContext } from "react"
import ApiDataState from "../context/ApiDataState"


function ApiSection2() {
    const {receivedData} = useContext(ApiDataState)
  return (
    <div>
        <div className="container">
        <div className="card">
            <h2>Precipitations</h2>
            <p>Antibodes: {receivedData.current.precip_in}</p>
            <p>Annual: {receivedData.current.precip_mm}</p>
        </div>

        <div className="card">
            <h2>Pressure</h2>
            <p>Pressure_in: {receivedData.current.pressure_in}</p>
            <p>Pressure_mb: {receivedData.current.pressure_mb}</p>
        </div>

        <div className="card">
            <h2>Wind</h2>
            <p>Degree:{receivedData.current.wind_degree}</p>
            <p>Degree_kph:{receivedData.current.wind_kph}</p>
            <p>Degree_mph:{receivedData.current.wind_mph}</p>
        </div>
    </div>
    </div>
  )
}

export default ApiSection2