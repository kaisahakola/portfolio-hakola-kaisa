import "./Footer.scss";
import LinkOrTextWithIcon from "../../shared/LinkOrTextWithIcon/LinkOrTextWithIcon";
import { ContactInfo } from "../../../common/const/ContactInfo";
import Logo from "../../../assets/icons/icon-blue.png";

const Footer = () => {
    return (
        <div className="wrapper-footer">
            <div className="footer-texts">
                <h3>Kaisa Hakola</h3>
                <p>2026</p>
            </div>
            <div className="footer-logo">
                <img src={Logo} alt="logo" height="100px" width="100px" />
            </div>
            <div className="footer-links">
                <LinkOrTextWithIcon
                    iconType={"email"}
                    text={ContactInfo.email} />
                <LinkOrTextWithIcon 
                    url={`https://${ContactInfo.github}`} 
                    iconType={"github"}
                    text="kaisahakola"
                    isExternal={true} />
                <LinkOrTextWithIcon 
                    url={`https://${ContactInfo.linkedIn}`}
                    iconType={"linkedin"}
                    text="khakola"
                    isExternal={true} />
            </div>
        </div>
    )
}

export default Footer;