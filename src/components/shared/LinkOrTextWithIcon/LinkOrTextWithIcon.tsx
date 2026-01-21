import './LinkWithIcon.scss';
import { IconType } from '../../../common/types/IconType';
import WebIcon from "../../../assets/icons/icon-web.png";
import ProjectIcon from "../../../assets/icons/project-icon.png";
import PersonIcon from "../../../assets/icons/person-icon.png";
import { GitHub, Linkedin, Mail } from 'react-feather';

interface LinkProps {
    url?: string;
    text?: string;
    iconType: IconType;
    isExternal?: boolean;
}

const LinkOrTextWithIcon = ({ url, text, iconType, isExternal}: LinkProps) => {
    let icon: React.ReactNode;

    switch (iconType) {
        case "web":
            icon = <img src={WebIcon} alt={"web icon"} />;
            break;
        case "github":
            icon = <GitHub size={35} />;
            break;
        case "linkedin":
            icon = <Linkedin size={35} />;
            break;
        case "email":
            icon = <Mail size={35} />;
            break;
        case "project":
            icon = <img src={ProjectIcon} alt={"project icon"} />;
            break;
        case "person":
            icon = <img src={PersonIcon} alt={"person icon"} />;
            break
        default:
            icon = null;
    }

    const content = (
        <div id="icon-container">
            <span className="icon">{icon}</span>
            {text && <p className="icon-text">{text}</p>}
        </div>
    )

    return (
        <div>
            {url ? (
                <div className='wrapper-link-with-icon'>
                    <a href={url} target={isExternal ? '_blank' : ''} rel="noopener noreferrer">
                        {content}
                    </a>
                </div>
            ) : (
                <div className='wrapper-text-with-icon'>
                    {content}
                </div>
            )}
        </div>
    );
}

export default LinkOrTextWithIcon