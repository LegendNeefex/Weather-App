import { createContext,useState, useEffect} from "react";
import { ClipLoader, BarLoader } from "react-spinners"

const ApiDataState = createContext();

export const ApiProvider = ({children})=>{
  const [loading, setLoading] = useState(true)
  const [barloading,setBarLoading] = useState()
  const [text, setText] = useState("")

    useEffect(() => {
        apiFetch(text)
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          }, 5000);
        },[])
        
        const textHandler = (e)=>{
          setText(e.target.value);
        }
    
    const imageStyle = {
      height: "350px",
      width: "600px",
      Backgroundimage: "url('https://www.pexels.com/photo/clouds-and-blue-sky-3783385/')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }
    const submitHandler = (e)=>{
      if (text === "") {
        e.preventDefault();
        alert("Please Enter a Location")
        setLoading(false)
      }else{
        e.preventDefault();
          apiFetch(text)
          setBarLoading(true)
          setTimeout(() => {
            setBarLoading(false)
          }, 5000);
          setText("");
      }
    }
  
  const [receivedData, setReceivedData] = useState({
    location: {
      name: '', 
      lat: "", 
      country: "",  
      region: "",
      localtime: "", 
      lon:"",  
    },

    current: {
      cloud : "",
      condition: {text: '', icon: '', code: "" },
      last_updated: "",
      temp_f: "",
      icon: "",
      temp_c: "",
      humidity: "",
      wind_degree: "",
      precipitation: "",
      pressure: "" ,
      wind: "",
    } 
  })


  // console.log(receivedData);

  async function apiFetch(location) {
    
    const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=8bafd27243a44937ad0121549232110&q=${Object.keys(location).length===0?'lagos':location}&aqi=no`)

    if (!response.ok) {
       alert (('Sorry, Location Data Not Found'))
      return;
    }

    const data = await response.json();
    // console.log(data);
    setReceivedData(data)

  }


  const stateData = {
    apiFetch,
    receivedData,
    setReceivedData,
    submitHandler,
    textHandler,
    barloading,
    loading,
    ClipLoader,
    BarLoader,
    imageStyle,

  }

  return <ApiDataState.Provider value={stateData}>
    {children}
  </ApiDataState.Provider>
}

export default ApiDataState;
