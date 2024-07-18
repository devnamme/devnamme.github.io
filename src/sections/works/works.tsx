import Gallery from "../../components/gallery/gallery";
import "./works.css";

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
