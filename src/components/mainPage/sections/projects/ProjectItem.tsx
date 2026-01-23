import { ProjectItemType } from "../../../../common/types/ProjectTypes";
import { urlFor } from "../../../../sanity/client";
import "./Projects.scss"
import LinkOrTextWithIcon from "../../../shared/LinkOrTextWithIcon/LinkOrTextWithIcon";
import { useState } from "react";
import { ImageType } from "../../../../common/types/ProjectTypes";

interface ProjectItemProps {
  project: ProjectItemType;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [imageOrientation, setImageOrientation] = useState<ImageType>(null);
  const imageUrl = urlFor(project.image).url();

  const handleImageLoad = (img: HTMLImageElement) => {
    const { naturalWidth, naturalHeight } = img;

    const orientation = naturalWidth > naturalHeight ? "desktop" : "mobile";
    setImageOrientation(orientation);
  };

  return (
    <div>
      <h4>{project.title}</h4>
      <p>{project.technologies.join(", ")}</p>
      <div className="project-item-links">
        {project.links.map((link) => (
          <LinkOrTextWithIcon key={link.url} url={link.url} text={link.text} isExternal={true} iconType={link.iconType}/>
        ))}
      </div>
      <p>{project.description}</p>
      <div className="project-image-container">
        <img 
          src={imageUrl} 
          alt="project image" 
          className={`project-image ${
            imageOrientation ? `image-${imageOrientation}` : ""
          }`} 
          onLoad={(e) => handleImageLoad(e.currentTarget)} 
        />
      </div>
    </div>
  )
}

export default ProjectItem;
