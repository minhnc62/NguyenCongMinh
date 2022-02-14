import "./button.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = ({icon, handleClick}) =>{
    return <button className="btn" onClick={handleClick}>
        <FontAwesomeIcon icon={icon} ></FontAwesomeIcon>
    </button>
}
export default Button;