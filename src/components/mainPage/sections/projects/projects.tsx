import "../styles.scss";
import { useState, useEffect } from "react";
import { ProjectItemType } from "../../../../common/types/ProjectTypes";
import { client } from "../../../../sanity/client";
import ProjectItem from "./ProjectItem";
import LayoutWithSideMenu from "../../../shared/LayoutWithSideMenu/LayoutWithSideMenu";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectItemType[]>([])

  useEffect(() => {
    client
      .fetch(`*[_type == "project"]{
          _id,
          title,
          links,
          images,
          technologies,
          myRole,
          description,
          placement
        }`)
        .then((data) => {
          console.log('fetched data: ', data)
          setProjects(data)
        })
        .catch((err) => console.error('Error fetching data: ', err))
  }, [])

  
  const firstProject = projects.find((project) => project.placement === 1);

  const defaultItem = firstProject
    ? <ProjectItem project={firstProject} />
    : null;

  const defaultTitle = firstProject?.title ?? "";

  return (
    <div className="sectionContainer" id="project-section">
      <h1>Projects</h1>
      <div className="project-list">
        <LayoutWithSideMenu defaultItem={defaultItem} defaultTitle={defaultTitle}>
          {projects
            .slice()
            .sort((a, b) => a.placement - b.placement)
            .map((project) => (
              <ProjectItem project={project} key={project._id} />
          ))}
        </LayoutWithSideMenu>
      </div>
    </div>
  )
}

export default Projects
