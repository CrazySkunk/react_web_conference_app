import CallPageHeader from '../UI/CallPage/CallPageHeader/CallPageHeader'
import CallPageFooter from '../UI/CallPage/CallPageFooter/CallPageFooter'
import MeetingInfo from '../UI/CallPage/MeetingInfo/MeetingInfo'
import Messenger from '../UI/CallPage/Messenger/Messenger'
import "./CallPage.scss"


const CallPage = () => {
    return (
        <div className="callpage-container">
            <video className="video-container" src="" controls></video>
            <CallPageHeader/>
            <CallPageFooter/>
            <MeetingInfo/>
            <Messenger/>
        </div>
    )
}
export default CallPage;