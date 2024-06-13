import Gallery from "../../components/gallery";
import "./index.css";

function PortfolioSection(props) {
  return (
    <section id="portfolio">
      <Gallery setSlug={props.setSlug} />

      <div></div>
    </section>
  );
}

export default PortfolioSection;
