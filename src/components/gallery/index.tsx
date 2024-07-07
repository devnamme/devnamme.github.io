import { useEffect, useRef } from "react";
import { WorksData, WorksDataGroups } from "../../data";
import "./index.css";
import { Link } from "react-router-dom";

interface Props {
  setSlug: Function;
}

function Gallery({ setSlug }: Props) {
  const galleryRef = useRef(null);

  return (
    <div className="gallery" ref={galleryRef}>
      {["web", "mobile", "game"].map((key) => (
        <div key={`group-${key}`} className="group" id={key}>
          {WorksDataGroups[key as "web" | "mobile" | "game"].map(
            (slug: string, j) => (
              <Link
                to={`/project/${slug}`}
                key={`gallery-${key}-${slug}`}
                id={slug}
              >
                <img
                  className="thumbnail"
                  src={`/media/${slug}/${
                    WorksData[slug].thumbnail == null
                      ? "thumbnail.png"
                      : WorksData[slug].thumbnail
                  }`}
                  onClick={() => setSlug(slug)}
                />
              </Link>
            )
          )}{" "}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
