import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import meetsImage from '../../../../res/meet_icon.png';
import './Header.scss';
import {
    faQuestionCircle,
    faExclamationCircle,
    faCog
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
       <div className="header">
           <div className="logo">
               <img src={meetsImage} alt={meetsImage}/>
               <span className="help-text">
                   Masomo
               </span>
           </div>
           <div className="action-btn">
               <FontAwesomeIcon className = "icon-block" icon = {faQuestionCircle}/>
               <FontAwesomeIcon className = "icon-block" icon = {faExclamationCircle}/>
               <FontAwesomeIcon className = "icon-block" icon = {faCog}/>
           </div>

       </div>
    )
}
export default Header;