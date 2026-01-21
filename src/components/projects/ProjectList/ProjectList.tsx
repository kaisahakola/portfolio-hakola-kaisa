import Project from "../Project/Project";
import './ProjectList.scss'
import LayoutWithSideMenu from "../../shared/LayoutWithSideMenu/LayoutWithSideMenu";
import { useEffect, useState } from "react";
import { ProjectItem } from "../../../common/types/ProjectTypes";
import { client } from "../../../sanity/client";

const ProjectList = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([])

  useEffect(() => {
    client
      .fetch(`*[_type == "project"]{
          _id,
          title,
          links,
          images[]{
            ..., 
            asset->{_id, url, metadata { dimensions { width, height } }}
          },
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

   const defaultItem = projects[0]
    ? <Project projectInfo={projects[0]} />
    : null;

    const defaultTitle = projects[0]?.title ?? "";

  return (
    <div className="wrapper-project-list">
      <LayoutWithSideMenu defaultItem={defaultItem} defaultTitle={defaultTitle}>
          {projects?.map(project => (
            <Project key={project._id} projectInfo={project} />
          ))}
      </LayoutWithSideMenu>
    </div>
  );
};

export default ProjectList;
