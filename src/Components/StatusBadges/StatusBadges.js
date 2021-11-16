import './statusbadges.css';
import badgeicon from '../Images/statusbadge.png'; 
const StatusBadges = () => {
    return(
        <>
        <div className="Badge-elements" >
        <img className="BadgeIcon" src={badgeicon} alt="Badge"/>
        <button className="Badge">Title<br/> Placeholder</button>
        
        <img className="BadgeIcon" src={badgeicon} alt="Badge"/>
        <button className="Badge">Title<br/> Placeholder</button>
        
        <img className="BadgeIcon" src={badgeicon} alt="Badge"/>
        <button className="Badge">Title<br/> Placeholder</button>
        
        <img className="BadgeIcon" src={badgeicon} alt="Badge"/>
        <button className="Badge">Title<br/> Placeholder</button>
        </div>
        
        </>
    );
}

export default StatusBadges;