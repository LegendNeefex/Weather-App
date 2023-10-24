import Button from "./Button"
import { useContext} from "react"
import ApiDataState from "../context/ApiDataState"
import { Link, NavLink } from "react-router-dom"

function ApiForm() {

    const {text,submitHandler,textHandler} = useContext(ApiDataState)

  return (
    <div>
            <form method="get" onSubmit={submitHandler} className="form-group">
                <>
                    <NavLink activeclassname="active" to="/">Mini Weather Forecast</NavLink>
                    <input onChange = {textHandler} type="text" placeholder="Enter Your Location(city/state/country)" autoComplete="off" value = {text} />
                    <Button />
                </>
            </form>
        
    </div>
  )
}

export default ApiForm