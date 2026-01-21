import "../styles.scss";
import "./Introduction.scss";
import { AboutMe } from "../../../../common/const/AboutMe";

const Introduction = () => {
  return (
    <div className="sectionContainer">
      <h1>Introduction</h1>

      <p id="introduction-description">{AboutMe.description}</p>
    </div>
  )
}

export default Introduction
