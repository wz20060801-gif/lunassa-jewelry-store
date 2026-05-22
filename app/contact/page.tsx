'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '85200000000';
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'hello@lunassa.com';

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(form.entries()))
    });
    const data = await response.json();
    if (data.ok) setStatus('Message saved in mock API. Connect email service such as Resend, SendGrid or Gmail SMTP before launch.');
  }

  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Contact LUNASSA</p>
        <h1>联系我们</h1>
        <p>For product consultation, gift advice, wholesale inquiries or after-sales service.</p>
      </section>

      <section className="contact-layout">
        <div className="contact-cards">
          <article>
            <h2>WhatsApp</h2>
            <p>Fast product consultation and gift advice.</p>
            <a className="primary-button" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello LUNASSA, I need help choosing jewelry.')}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </article>
          <article>
            <h2>Email</h2>
            <p>{email}</p>
            <a className="outline-button" href={`mailto:${email}`}>Send Email</a>
          </article>
          <article>
            <h2>Appointment</h2>
            <p>Book a 1:1 styling consultation before gifting.</p>
            <Link className="outline-button" href="/appointment">预约咨询</Link>
          </article>
        </div>

        <form className="contact-form" onSubmit={submitContact}>
          <h2>Contact Form</h2>
          <label>Name<input name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Topic<select name="topic"><option>Product question</option><option>Gift recommendation</option><option>After-sales</option><option>Wholesale</option></select></label>
          <label>Message<textarea name="message" rows={5} required /></label>
          <button className="black-button" type="submit">Submit</button>
          {status && <p className="success-message">{status}</p>}
        </form>
      </section>
    </main>
  );
}
