'use client';

import { FormEvent, useState } from 'react';

export default function AppointmentPage() {
  const [status, setStatus] = useState('');

  function submitAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Appointment request created locally. Connect Calendly, Google Calendar or your CRM before launch.');
  }

  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Private styling</p>
        <h1>预约咨询</h1>
        <p>Help customers choose gifts, match outfits and understand the cultural meaning behind each piece.</p>
      </section>

      <section className="appointment-layout">
        <div className="appointment-copy">
          <h2>Why appointment matters</h2>
          <p>中高端珠宝独立站的转化路径不是只靠低价，而是通过专业建议、礼品场景、品牌故事和客服信任来提升客单价。</p>
          <ul>
            <li>Gift consultation for girlfriend, birthday and anniversary</li>
            <li>Daily styling advice for necklaces, bracelets and earrings</li>
            <li>Material, packaging and after-sales explanation</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={submitAppointment}>
          <h2>Book a Consultation</h2>
          <label>Name<input name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Preferred date<input type="date" name="date" required /></label>
          <label>Preferred time<input type="time" name="time" required /></label>
          <label>Need<select name="need"><option>Gift recommendation</option><option>Personal styling</option><option>Product details</option><option>Wholesale / collaboration</option></select></label>
          <label>Notes<textarea name="notes" rows={4} /></label>
          <button className="black-button">Submit request</button>
          {status && <p className="success-message">{status}</p>}
        </form>
      </section>
    </main>
  );
}
