import Gallery from "../../components/gallery";
import "./index.css";

interface Props {
  setSlug: Function;
}

export default function WorksSection({ setSlug }: Props) {
  return (
    <section id="works">
      <Gallery setSlug={setSlug} />

      {/* <div></div> */}
    </section>
  );
}
