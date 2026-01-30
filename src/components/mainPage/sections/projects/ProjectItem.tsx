import { ProjectItemType } from "../../../../common/types/ProjectTypes";
import "./Projects.scss"
import LinkOrTextWithIcon from "../../../shared/LinkOrTextWithIcon/LinkOrTextWithIcon";
import Container from "../../../shared/Container/Container";
import ProjectImage from "./ProjectImage";

interface ProjectItemProps {
  project: ProjectItemType;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="project-item-container">
      <div className="project-info-container">
        <h3>{project.title}</h3>
        <div className="tech-and-links-container">
            <div className="project-item-links">
                {project.links.map((link) => (
                  <LinkOrTextWithIcon 
                    key={link.url} 
                    url={link.url} 
                    text={link.text} 
                    isExternal={true} 
                    iconType={link.iconType}
                  />
                ))}
            </div>

          <Container>
            <p className="project-technologies">
              {project.technologies.join(", ")}
            </p>
          </Container>
        </div>
        
        <p>{project.description}</p>
      </div>
      
      <div className="project-image-container">
        {project.images.map((image, index) => (
          <ProjectImage key={index} image={image} />
        ))}
      </div>
    </div>
  )
}

export default ProjectItem;
