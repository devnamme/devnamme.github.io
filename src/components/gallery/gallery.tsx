import { useRef } from "react";
import { WorksData, WorksDataGroups } from "../../data/works";
import { WorksDataGroup } from "../../types/project.interface";
import "./gallery.css";

interface Props {
  setSlug: Function;
}

export default function Gallery({ setSlug }: Props) {
  const galleryRef = useRef(null);

  return (
    <div id="gallery" ref={galleryRef}>
      {(["web", "game"] as WorksDataGroup[]).map((key: WorksDataGroup) => (
        <div key={`group-${key}`} className="group" id={key}>
          {WorksDataGroups[key].map((slug: string, j) => (
            <div
              key={`gallery-${key}-${slug}`}
              id={slug}
              className="thumbnail-wrapper"
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

          {WorksDataGroups[key].length % 2 == 0 ? (
            <div className="spacer" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
