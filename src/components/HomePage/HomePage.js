import Header from "../UI/CallPage/Header/Header";
import "./HomePage.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKeyboard, faVideo} from "@fortawesome/free-solid-svg-icons";
import webConf from '../../res/webconf.png'

const HomePage = () => {
    return (
        <div className="home_page">
            <Header/>
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Premium Meetings are now free for everyone.</h2>
                        <p>
                            We want to make learning fun for you so we redesigned the google meets,
                            to better fit your needs.
                        </p>
                        <div className="action-btn">
                            <button className="btn green">
                                <FontAwesomeIcon icon={faVideo} className="icon-block1"/>
                                New Meeting
                            </button>
                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon icon={faKeyboard} className="icon-block"/>
                                    <input placeholder="Enter a code or link"/>
                                </div>
                                <button className="btn no-bg">Join</button>
                            </div>
                        </div>
                    </div>
                    <div className="help-text">
                        <a href="#">Learn More</a> about Masomo
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src={webConf} alt={webConf}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;