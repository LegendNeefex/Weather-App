import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHouse} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="footer-container">
        <h3>&#xa9; copyright 2023</h3>
        <FontAwesomeIcon icon={faHouse} size={"2xl"} className="icon"/>
    </div>
  )
}

export default Footer