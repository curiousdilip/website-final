import ContactForm from "../components/ContactForm";
import "./contact.css";
export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <h1 className="contact-heading">Contact</h1>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
