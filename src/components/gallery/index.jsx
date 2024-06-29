import { useEffect, useRef } from "react";
import { WorksData, WorksDataGroups } from "../../data";
import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Gallery(props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const galleryRef = useRef(null);
  const refs = useRef([null, null, null]);

  const paths = ["/works/web", "/works/mobile", "/works/game"];

  // const onScroll = () => {
  //   for (let i = 0; i < refs.current.length; i++) {
  //     if (refs.current[i] == null) continue;

  //     let bcr = refs.current[i].getBoundingClientRect();
  //     let left = bcr.left;

  //     let right;
  //     right = galleryRef.current.getBoundingClientRect().right;
  //     // if (i < 2) right = refs.current[i + 1].getBoundingClientRect().left;
  //     // else right = galleryRef.current.getBoundingClientRect().right;

  //     if (left <= window.innerWidth / 2) {
  //       // if (pathname != paths[i]) navigate(paths[i], { replace: true });
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      {Object.keys(WorksDataGroups).map((key, i) =>
        WorksDataGroups[key].map((slug, j) => (
          <Link
            to={`/project/${slug}`}
            key={`gallery-${key}-${slug}`}
            id={slug}
          >
            <img
              ref={(el) => {
                if (j == 0) refs.current[i] = el;
              }}
              className="thumbnail"
              src={`/media/${slug}/${
                WorksData[slug].thumbnail == null
                  ? "thumbnail.png"
                  : WorksData[slug].thumbnail
              }`}
              onClick={() => {
                props.setSlug(slug);
              }}
            />
          </Link>
        ))
      )}
    </div>
  );
}

export default Gallery;
