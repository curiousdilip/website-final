export const metadata = {
  title: "Error 404 | Dilip Kumar",
};
export default function ErrorPage() {
  return (
    <section id="error">
      <h1>Page not found!</h1>
      <h2>I don’t know why you’re here... so let me help.</h2>
      <p>
        Sorry, this URL does not match any resource. Go back or return to{" "}
        <a href="/">Home Page.</a>
      </p>
    </section>
  );
}
