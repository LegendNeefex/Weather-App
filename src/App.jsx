import DisplayLocation from "./components/DisplayLocation"
import { ApiProvider } from "./context/ApiDataState"
import { BrowserRouter,Route,Routes } from "react-router-dom"

function App() { 
  // const {imageStyle} = useContext (ApiDataState)

  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            < DisplayLocation/>
          }/>
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  )
}

export default App

