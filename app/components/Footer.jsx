import "./footer.scss"
export default function Footer() {
  return <>
    <footer>
      <div className="container">
        <div className="follow-me">
          <a aria-label="Github" href="https://github.com/curiousdilip"> <i className="bi bi-github"> </i></a>
          <a aria-label="Twitter" href="https://twitter.com/curiousdilip"> <i className="bi bi-twitter-x"> </i></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/curiousdilip/"><i className="bi bi-linkedin"></i></a>
          <a aria-label="Email" href="mailto:curiousdilip@gmail.com"><i className="bi bi-envelope"></i></a>
        </div>
        <div className="copyright">
          <h4>Dilip Kumar | Frontend Web Developer</h4>
          </div>

      </div>
    </footer></>;
}
