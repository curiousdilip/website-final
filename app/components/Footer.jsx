import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <a
            aria-label="Github"
            target="_blank"
            href="https://github.com/curiousdilip"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            aria-label="LinkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/curiousdilip/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            aria-label="Email"
            target="_blank"
            href="mailto:curiousdilip@gmail.com"
          >
            <i className="bi bi-envelope-at"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
