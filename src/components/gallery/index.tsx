import { useRef } from "react";
import { WorksData, WorksDataGroups } from "../../data/works";
import { WorksDataGroup } from "../../types/project.interface";
import "./index.css";

interface Props {
  setSlug: Function;
}

export default function Gallery({ setSlug }: Props) {
  const galleryRef = useRef(null);

  return (
    <div className="gallery" ref={galleryRef}>
      {(["web", "game"] as WorksDataGroup[]).map((key: WorksDataGroup) => (
        <div key={`group-${key}`} className="group" id={key}>
          {WorksDataGroups[key].map((slug: string, j) => (
            <div
              key={`gallery-${key}-${slug}`}
              id={slug}
              onClick={() => setSlug(slug)}
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
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
