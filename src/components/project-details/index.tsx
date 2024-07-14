import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Project } from "../../types/project.interface";
import "./index.css";

interface Props {
  slug: string | null;
  closeDetails: MouseEventHandler;
  project: Project | null;
}

export default function ProjectDetails({ slug, closeDetails, project }: Props) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mediaPage, setMediaPage] = useState(0);

  useEffect(() => {
    if (slug != null) setActiveSlug(slug);
    if (project != null) {
      setActiveProject(project);
      setMediaPage(0);
    }
  }, [slug, project]);

  return (
    <>
      <div
        className={`bg-tint ${project == null ? "" : "active"}`}
        onClick={closeDetails}
      />
      <div className={`project-details ${project == null ? "" : "active"}`}>
        {activeProject != null && (
          <>
            {activeProject.media.length > 0 && (
              <div className="media">
                <img
                  className="selected-media"
                  src={`/media/${activeSlug}/${activeProject.media[mediaPage]}`}
                />

                <button
                  className={`edge left ${mediaPage === 0 ? "hide" : ""}`}
                  onClick={() => {
                    if (mediaPage > 0) setMediaPage((val) => val - 1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="white"
                      d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"
                    />
                  </svg>
                </button>

                <button
                  className={`edge right ${
                    mediaPage === activeProject.media.length - 1 ? "hide" : ""
                  }`}
                  onClick={() => {
                    if (mediaPage < activeProject.media.length - 1)
                      setMediaPage((val) => val + 1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="white"
                      d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512L340.864 831.872a30.59 30.59 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                    />
                  </svg>
                </button>

                <div className="all-media-container no-scrollbar">
                  <div className="all-media">
                    {activeProject.media.map(
                      (fileName: string, idx: number) => (
                        <img
                          key={`all-media-${idx}`}
                          className={`tile ${
                            mediaPage === idx ? "active" : ""
                          }`}
                          src={`/media/${activeSlug}/${fileName}`}
                          onClick={() => setMediaPage(idx)}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="metadata no-scrollbar">
              <div className="back-group link" onClick={closeDetails}>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.375 9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H4.375C4.20924 10.625 4.05027 10.5592 3.93306 10.4419C3.81585 10.3247 3.75 10.1658 3.75 10C3.75 9.83424 3.81585 9.67527 3.93306 9.55806C4.05027 9.44085 4.20924 9.375 4.375 9.375Z" />
                  <path d="M4.63365 10.0001L9.8174 15.1826C9.93475 15.2999 10.0007 15.4591 10.0007 15.6251C10.0007 15.791 9.93475 15.9502 9.8174 16.0676C9.70004 16.1849 9.54087 16.2508 9.3749 16.2508C9.20893 16.2508 9.04975 16.1849 8.9324 16.0676L3.3074 10.4426C3.24919 10.3845 3.20301 10.3155 3.17151 10.2396C3.14 10.1637 3.12378 10.0823 3.12378 10.0001C3.12378 9.91785 3.14 9.83645 3.17151 9.76052C3.20301 9.68458 3.24919 9.61561 3.3074 9.55756L8.9324 3.93256C9.04975 3.8152 9.20893 3.74927 9.3749 3.74927C9.54087 3.74927 9.70004 3.8152 9.8174 3.93256C9.93475 4.04992 10.0007 4.20909 10.0007 4.37506C10.0007 4.54103 9.93475 4.7002 9.8174 4.81756L4.63365 10.0001Z" />
                </svg>
                <p>Back</p>
              </div>

              <div className="info">
                <h2 className="title">{activeProject.title}</h2>

                {activeProject.tech.length > 0 && (
                  <div className="tech">
                    {activeProject.tech.map((tech, idx) => (
                      <p key={`project-tech-${idx}`}>{tech}</p>
                    ))}
                  </div>
                )}

                {activeProject.links.length > 0 && (
                  <div className="links">
                    {activeProject.links.map((link, idx) => (
                      <a
                        key={`project-link-${idx}`}
                        className="link"
                        href={link.url}
                        target="_blank"
                      >
                        {link.text} //
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {activeProject.content != null && (
                <div className="content">{activeProject.content}</div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
