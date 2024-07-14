import "./index.css";

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
      <a href="https://github.com/dnamme" target="_blank" className="link">
        GitHub
      </a>
      <a href="mailto:contact@emmanevangelista.com" className="link">
        Email
      </a>
    </nav>
  );
}
