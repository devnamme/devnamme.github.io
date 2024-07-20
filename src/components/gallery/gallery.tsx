import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PublishedData, PublishedDataGroups } from "../../data/published";
import { WorksData, WorksDataGroups } from "../../data/works";
import { WorksDataType } from "../../types/works.interface";
import "./gallery.css";

interface Props {
  setSlug: Function;
}

export default function Gallery({ setSlug }: Props) {
  const galleryRef = useRef(null);

  useEffect(() => {
    const els: NodeListOf<HTMLElement> =
      document.querySelectorAll("#gallery .group");

    els.forEach((el) => {
      const type = el.getAttribute("id");
      let areas_desktop = "";
      let areas_mobile = "";

      if (type === "web" || type === "mobile" || type === "game") {
        const size = WorksDataGroups[type].length;

        areas_desktop =
          '"' + [...Array(size)].map((_, idx) => `a${idx}`).join(" ") + '"';

        // 01 01 03 03 05 05
        // __ 02 02 04 04 __
        //
        // 01 01 03 03 __
        // __ 02 02 04 04

        const top = [...Array(size + 1)]
          .map((_, idx) => {
            const calc = "a" + Math.floor(idx / 2) * 2;
            return idx === size ? (size % 2 === 0 ? "." : calc) : calc;
          })
          .join(" ");

        const bot = [...Array(size + 1)]
          .map((_, idx) => {
            const calc = "a" + (Math.floor((idx - 1) / 2) * 2 + 1);

            if (idx === 0) return ".";
            return idx === size ? (size % 2 === 0 ? calc : ".") : calc;
          })
          .join(" ");

        if (type === "web") areas_mobile = `"${top}" "${bot}"`;
        else if (type === "mobile") areas_mobile = areas_desktop;
        else if (type === "game") areas_mobile = `"${bot}" "${top}"`;
      }

      el.style.setProperty("--grid-areas-desktop", areas_desktop);
      el.style.setProperty("--grid-areas-mobile", areas_mobile);
    });
  }, []);

  return (
    <div id="gallery" ref={galleryRef}>
      {Object.keys(WorksDataType).map((key: string) => (
        <div key={`group-${key}`} className="group" id={key}>
          {WorksDataGroups[key as keyof typeof WorksDataType].map(
            (slug: string, j) => (
              <div
                key={`gallery-${key}-${slug}`}
                id={slug}
                className="thumbnail-wrapper"
                style={{
                  gridArea: `a${j}`,
                }}
                onClick={() => setSlug(slug)}
              >
                <img
                  className="thumbnail"
                  src={`/media/works/${slug}/${
                    WorksData[slug].thumbnail == null
                      ? "thumbnail.png"
                      : WorksData[slug].thumbnail
                  }`}
                  onClick={() => setSlug(slug)}
                  style={WorksData[slug].thumbnailStyles}
                />
              </div>
            )
          )}
        </div>
      ))}

      <div className="group" id="articles">
        {PublishedDataGroups.articles.map((slug: string, idx: number) => (
          <Link
            key={`gallery-articles-${idx}`}
            to={PublishedData.articles[slug].url}
            target="_blank"
            className="thumbnail-wrapper"
          >
            <img
              className="thumbnail"
              src={`/media/published/${
                PublishedData.articles[slug].thumbnail || slug + ".png"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
