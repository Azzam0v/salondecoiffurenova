import { useState } from 'react';
import { Send } from 'lucide-react';

const initialForm = { name: '', email: '', message: '' };

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <form className="contact-form" onSubmit={submitForm}>
      {submitted && <div className="alert alert-success">Message sent. Our front desk will reply shortly.</div>}
      <label>
        Name
        <input className="form-control" name="name" value={form.name} onChange={updateField} required />
      </label>
      <label>
        Email
        <input className="form-control" type="email" name="email" value={form.email} onChange={updateField} required />
      </label>
      <label>
        Message
        <textarea className="form-control" name="message" rows="5" value={form.message} onChange={updateField} required />
      </label>
      <button className="btn btn-dark d-inline-flex align-items-center gap-2" type="submit">
        <Send size={17} />
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
