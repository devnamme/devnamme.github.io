import Gallery from "../../components/gallery";
import "./index.css";

interface Props {
  setSlug: Function;
}

function WorksSection({ setSlug }: Props) {
  return (
    <section id="portfolio">
      <Gallery setSlug={setSlug} />

      <div></div>
    </section>
  );
}

export default WorksSection;
