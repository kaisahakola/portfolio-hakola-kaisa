import "../styles.scss";
import "./Skills.scss";
import { 
  SiTypescript, 
  SiReact, 
  SiJavascript, 
  SiCss3, 
  SiSass, 
  SiHtml5, 
  SiPython,
  SiNextdotjs,
  SiMysql,
  SiPostgresql
} from "react-icons/si";
import SkillElement from "./SkillElement";
import JavaLogoSvg from "../../../../assets/images/logos/java-svgrepo-com.svg";
import CSharpLogoSvg from "../../../../assets/images/logos/c-sharp.svg";

const Skills = () => {
  return (
    <div className="sectionContainer" id="skills-section">
      <h1>Skills</h1>
      <div id="logos">
        <SkillElement icon={SiTypescript} label="TypeScript" />
        <SkillElement icon={SiJavascript} label="JavaScript" />
        <SkillElement icon={SiReact} label="React" />
        <SkillElement icon={SiNextdotjs} label="Next.js" />
        <SkillElement icon={SiSass} label="Sass" />
        <SkillElement icon={SiCss3} label="CSS" />
        <SkillElement icon={SiHtml5} label="HTML5" />
        <SkillElement icon={JavaLogoSvg} label="Java" />
        <SkillElement icon={CSharpLogoSvg} label="C#" />
        <SkillElement icon={SiPython} label="Python" />
        <SkillElement icon={SiMysql} label="MySQL" />
        <SkillElement icon={SiPostgresql} label="PostgreSQL" />
      </div>
    </div>
  )
}

export default Skills
