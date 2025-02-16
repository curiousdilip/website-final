import "./footer.scss";
export default function Footer() {
  return (
    <>
      <footer>
        
        <div className="footer">
        <p>© 2025 Dilip. All rights reserved.</p>
         <div className="social">
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
        </div>
      </footer>
    </>
  );
}
