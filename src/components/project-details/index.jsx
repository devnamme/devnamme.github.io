import { useEffect, useState } from "react";
import "./index.css";

function ProjectDetails(props) {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (props.project != null) setActiveProject(props.project);
  }, [props.project]);

  return (
    <>
      <div
        className={`bg-tint ${props.project == null ? "" : "active"}`}
        onClick={() => {
          props.setSlug(null);
        }}
      />
      <div
        className={`project-details ${props.project == null ? "" : "active"}`}
      >
        {activeProject != null && (
          <h2 className="title">{activeProject.title}</h2>
        )}
      </div>
    </>
  );
}

export default ProjectDetails;
