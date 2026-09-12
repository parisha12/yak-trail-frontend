import { useState } from 'react';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section page-top">
      <Container className="contact">
        <div>
          <span className="overline">GET IN TOUCH</span>
          <h1>Let’s Talk About Your Trail</h1>
          <p>
            Tell our Kathmandu team what kind of journey you imagine. We usually
            reply within one working day.
          </p>
          <div className="contact__details">
            <b>Thamel, Kathmandu, Nepal</b>
            <span>hello@yaktrail.com</span>
            <span>+977 980-000-0000</span>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Input label="Full name" required />
          <Input label="Email address" type="email" required />
          <Input label="Trek or region" />
          <label className="field">
            <span>Your message</span>
            <textarea rows="5" required />
          </label>
          <Button type="submit">Send Message</Button>
          {sent && (
            <p className="success">Message received. We’ll be in touch soon.</p>
          )}
        </form>
      </Container>
    </section>
  );
}
