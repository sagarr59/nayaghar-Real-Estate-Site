import './contactPage.scss';

function ContactPage() {
  return (
    <div className="contactPage">
      <h1 className="contactTitle">Contact Us</h1>
      <p className="contactDescription">
        Have questions? Reach out to us, and we’ll assist you promptly!
      </p>
      <form className="contactForm">
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="submitButton">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
