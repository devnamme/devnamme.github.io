import "./secondary-nav.css";

export default function SecondaryNav() {
  return (
    <nav className="secondary-nav">
      <a
        href="https://linkedin.com/in/devnamme"
        target="_blank"
        className="link"
      >
        LinkedIn
      </a>
      <a href="https://github.com/devnamme" target="_blank" className="link">
        GitHub
      </a>
      <a href="mailto:contact@emmanevangelista.com" className="link">
        Email
      </a>
    </nav>
  );
}
