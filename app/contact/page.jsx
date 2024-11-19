import ContactForm from "../components/ContactForm";
import "./contact.css";
export const metadata = {
  title: "Contact | Dilip Kumar",
  description:
    "Whether you are interested in hiring me, to work on a project together or to discuss any other proposal, feel free to contact me anytime. I am very much looking forward to your message!",
  keywords: "curiousdilip, web developer dilip",
  authors: [
    {
      name: "Dilip Kumar",
      url: "https://www.dilipmaurya.in/about",
    },
  ],
  openGraph: {
    title: "Contact | Dilip Kumar",
    description:
      "Whether you are interested in hiring me, to work on a project together or to discuss any other proposal, feel free to contact me anytime. I am very much looking forward to your message!",
    url: "https://www.dilipmaurya.in/projects",
    siteName: "Contact | Dilip Kumar",
    images: [
      {
        url: "https://www.dilipmaurya.in/image.jpg",
        width: 800,
        height: 600,
        alt: "Image description",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@curiousdilip",
    title: "Contact | Dilip Kumar",
    description:
      "Whether you are interested in hiring me, to work on a project together or to discuss any other proposal, feel free to contact me anytime. I am very much looking forward to your message!",
    image: "https://www.dilipmaurya.in/image.jpg",
  },
  robots: "index, follow",
};
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
