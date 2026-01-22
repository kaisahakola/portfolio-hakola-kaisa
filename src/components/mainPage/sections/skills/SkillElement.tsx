import { IconType } from "react-icons";
import "./Skills.scss";

interface SkillElementProps {
  icon: IconType | string;
  label: string;
}

const SkillElement = ({ icon: Icon, label }: SkillElementProps) => {

  return (
    <div className="logo">
      {typeof Icon === "string" ? (
        <img src={Icon} alt="icon" className="icon" />
      ) : (
        <Icon className="icon" />
      )}
      <p className="logo-label">{label}</p>
    </div>
  )
}

export default SkillElement;
