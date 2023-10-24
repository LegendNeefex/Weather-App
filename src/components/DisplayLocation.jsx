import { useContext } from 'react'
import ApiDataState from '../context/ApiDataState'
import ApiForm from './ApiForm'
import ApiSection2 from './ApiSection2'
import Footer from './Footer'

function DisplayLocation() {

    const {receivedData,ClipLoader,loading,barloading,BarLoader} = useContext(ApiDataState)

    return (
        <>
        {
            loading ? 
            <ClipLoader size={150} color={"#1772a7"} className="clip" />
            :
            <>
               <div className="bg">
               <div className="weather-info">  
                <ApiForm />
                <>
                {
                barloading ? 
                    <BarLoader color={"#1772a7"} width={"100%"}className="bar"/>
                    :
                        <>
                    <div className="container">
                    <div className="card">
                        <p>Location: {receivedData.location.name},  {receivedData.location.region} {receivedData.location.country}</p>
                        <p>Latitude: {receivedData.location.lat}</p>
                        <p>Longitude: {receivedData.location.lon}</p>
                        <p>Last Updated: {receivedData.current.last_updated}</p>
                        <p>Local Time: {receivedData.location.localtime}</p>
                    </div>

                    <div className="card">
                        <p>Condition: <img src={receivedData.current.condition.icon} alt=''/> {receivedData.current.condition.text} </p>
                        <p>Temperature: {receivedData.current.temp_c}°C, {receivedData.current.temp_f}°F</p>
                        <p>Cloud: {receivedData.current.cloud}</p>
                        <p>Humidity: {receivedData.current.humidity}</p>
                        <p>Wind_Degree: {receivedData.current.wind_degree}</p>
                    </div>
                </div>
                <ApiSection2 />
                </>
                }
                </> 
            </div>
               </div>
            <Footer />
            </>
        }
        </>
    )

}

export default DisplayLocation

            