import ContactForm from "../components/ContactForm";
import "./contact.css";
export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <h1 className="contact-heading">Contact</h1>
          <p>
            Whether you are interested in hiring me, to work on a project
            together or to discuss any other proposal, feel free to contact me
            anytime. I am very much looking forward to your message!
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
