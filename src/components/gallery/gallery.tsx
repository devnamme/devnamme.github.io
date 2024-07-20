import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ExperienceData } from "../../data/experiences";
import { PublishedData, PublishedDataGroups } from "../../data/published";
import { WorksData, WorksDataGroups } from "../../data/works";
import { Experience } from "../../types/experiences.interface";
import { WorksDataType } from "../../types/works.interface";
import "./gallery.css";

interface Props {
  setSlug: Function;
}

export default function Gallery({ setSlug }: Props) {
  const galleryRef = useRef(null);

  const generateDesktopGridAreas = (size: number) =>
    '"' + [...Array(size)].map((_, idx) => `a${idx}`).join(" ") + '"';

  const generateMobileGridAreas = (
    size: number
  ): { top: string; bot: string } => {
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

    return {
      top: top,
      bot: bot,
    };
  };

  const getDurationString = ({ from, to }: { from: string; to?: string }) => {
    if (!to) return `Since ${from}`;
    return `${from} to ${to}`;
  };

  useEffect(() => {
    const els: NodeListOf<HTMLElement> =
      document.querySelectorAll("#gallery .group");

    els.forEach((el) => {
      const type = el.getAttribute("id");
      let areas_desktop = "";
      let areas_mobile = "";

      if (type === "web" || type === "mobile" || type === "game") {
        const size = WorksDataGroups[type].length;
        areas_desktop = generateDesktopGridAreas(size);
        const { top, bot } = generateMobileGridAreas(size);

        if (type === "web") areas_mobile = `"${top}" "${bot}"`;
        else if (type === "mobile") areas_mobile = areas_desktop;
        else if (type === "game") areas_mobile = areas_desktop;
      } else if (type === "experiences") {
        const size = ExperienceData.length;
        const { top, bot } = generateMobileGridAreas(size);

        areas_desktop = areas_mobile = `"${top}" "${bot}"`;
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

      <div className="group" id="experiences">
        {ExperienceData.map((exp: Experience, idx: number) => (
          <div
            key={`gallery-experiences-${idx}`}
            className="exp-container"
            style={{
              gridArea: `a${idx}`,
            }}
          >
            <p className="position">{exp.position}</p>

            <div className="company-duration">
              <p className="company">
                {exp.company_url ? (
                  <a href={exp.company_url} target="_blank">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}{" "}
                //
              </p>

              <p className="duration">{getDurationString(exp.duration)}</p>
            </div>
          </div>
        ))}
      </div>

      <div />
    </div>
  );
}
