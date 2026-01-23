import "../styles.scss";
import { useState, useEffect } from "react";
import { ProjectItemType } from "../../../../common/types/ProjectTypes";
import { client } from "../../../../sanity/client";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectItemType[]>([])

  useEffect(() => {
    client
      .fetch(`*[_type == "project"]{
          _id,
          title,
          links,
          image,
          technologies,
          myRole,
          description
        }`)
        .then((data) => {
          console.log('fetched data: ', data)
          setProjects(data)
        })
        .catch((err) => console.error('Error fetching data: ', err))
  }, [])

  return (
    <div className="sectionContainer" id="project-section">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
