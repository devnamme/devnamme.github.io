import Gallery from "../../components/gallery";
import "./index.css";

interface Props {
  setSlug: Function;
}

function PortfolioSection({ setSlug }: Props) {
  return (
    <section id="portfolio">
      <Gallery setSlug={setSlug} />

      <div></div>
    </section>
  );
}

export default PortfolioSection;
