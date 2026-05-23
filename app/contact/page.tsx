'use client';

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '85200000000';
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'hello@lunassa.com';
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/lunassa.jewelry';

  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Contact LUNASSA</p>
        <h1>Contact Us</h1>
        <p>Choose your preferred contact channel for product consultation, gift advice or after-sales support.</p>
      </section>

      <section className="contact-layout contact-simple-layout">
        <div className="contact-cards contact-three-cards">
          <article>
            <h2>WhatsApp</h2>
            <p>Fast product consultation and gift advice.</p>
            <a className="primary-button" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello LUNASSA, I need help choosing jewelry.')}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </article>
          <article>
            <h2>Emile</h2>
            <p>{email}</p>
            <a className="outline-button" href={`mailto:${email}`}>Emile</a>
          </article>
          <article>
            <h2>Instagram</h2>
            <p>Follow LUNASSA campaigns, product launches and styling inspiration.</p>
            <a className="outline-button" href={instagram} target="_blank" rel="noreferrer">Instagram</a>
          </article>
        </div>
      </section>
    </main>
  );
}
