import { ProjectItem } from "../../../common/types/ProjectTypes";
import LinkOrTextWithIcon from "../../shared/LinkOrTextWithIcon/LinkOrTextWithIcon";
import "./Project.scss";
import ImageContainer from "../../shared/ImageContainer/ImageContainer";
import Container from "../../shared/Container/Container";

interface ProjectProps {
  projectInfo: ProjectItem;
}

const Project = (props: ProjectProps) => {
  const { projectInfo } = props;
  return (
    <div className="wrapper-project-item">
      <h2>{projectInfo.title}</h2>

      <div className="project-info-container">
        <Container>
          <div className="link-container">
            {projectInfo.links.map((link, index) => {
              const url = link.url || ""
              return (
                <div key={index}>
                  <LinkOrTextWithIcon 
                    url={url} 
                    iconType={url.includes("github") ? "github" : "web"} 
                    text={link.text}
                    isExternal={true} />
                </div>
              )
            })}
          </div>
        </Container>

        <Container>
          <div className="technologies-container">
            <p>Technologies used in this project:</p>
            <div className="technologies-list">
              {projectInfo.technologies.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          </div>
        </Container>

        <Container>
          <div className="my-role-container">
            {projectInfo.myRole && (
              <div>
                <p>My role:</p>
                <p className="role">{projectInfo.myRole}</p>
              </div>
            )}
          </div>
        </Container>
      </div>
      
      <div className="description-container">
        <p>{projectInfo.description}</p>
      </div>
      
      <div className="image-container">
        <div className="images">
          {projectInfo.images?.map((image, idx) => (
            <ImageContainer
              key={idx}
              url={image.asset.url}
              width={image.asset.metadata.dimensions.width.toString()}
              height={image.asset.metadata.dimensions.height.toString()}
              altText={`${projectInfo.title} image`}
              imageType={image.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
