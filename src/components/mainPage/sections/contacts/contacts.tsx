import "../styles.scss";
import "./Contacs.scss";
import LinkOrTextWithIcon from "../../../shared/LinkOrTextWithIcon/LinkOrTextWithIcon";
import { ContactInfo } from "../../../../common/const/ContactInfo";

const Contacts = () => {
  return (
    <div className="sectionContainer">
      <h1>Contacts</h1>

      <div className="contact-info-container">
        <LinkOrTextWithIcon iconType="email" text="kaisahakola00@gmail.com" />
        <LinkOrTextWithIcon iconType="github" isExternal={true} text="kaisahakola" url={`https://${ContactInfo.github}`} />
        <LinkOrTextWithIcon iconType="linkedin" isExternal={true} text="khakola" url={`https://${ContactInfo.linkedIn}`} />
      </div>
    </div>
  )
}

export default Contacts
