import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faShieldAlt, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";
import './MeetingInfo.scss';

const MeetingInfo = () => {
    return (
        <div className="meeting-info-block">
            <div className="meeting-header">
                <h3>Your Meeting is ready</h3>
                <FontAwesomeIcon classname="icon" icon={faTimes}/>
            </div>
            <button className="add-people-btn">
                <FontAwesomeIcon className="icon" icon={faUser}/>
                Add Others
            </button>
            <p className="info-text">
                Or share this meeting link with others you want to join the meeting
            </p>
            <div className="meeting-link">
                <span>Some random URL</span>
                <FontAwesomeIcon className="icon" icon={faCopy}/>
            </div>
            <div className="permission-text">
                <FontAwesomeIcon className="icon" icon={faShieldAlt}/>
                <p className="small-text">
                    People who use this meetings link will have to get your permission before they can join.
                </p>
            </div>
            <p className="small-text">Joined as someone@gmail.com</p>
        </div>
    );
};
export default MeetingInfo;