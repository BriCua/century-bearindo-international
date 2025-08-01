import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "../partials/kontak/kontak.css";
import AnimatedContent from '../components/animations/AnimatedContent';

export default function Kontak() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const formEl = form.current;
    const newErrors = {};

    // Manual validation
    if (!formEl.user_name.value) newErrors.user_name = 'Tolong isi bidang ini';
    if (!formEl.user_email.value) newErrors.user_email = 'Tolong isi bidang ini';
    if (!formEl.subject.value) newErrors.subject = 'Tolong isi bidang ini';
    if (!formEl.message.value) newErrors.message = 'Tolong isi bidang ini';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      formEl.classList.add('form-submitted');
      return;
    }

    formEl.classList.remove('form-submitted');

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          setSubmissionStatus('success');
          e.target.reset();
          setErrors({});
      }, (error) => {
          console.log(error.text);
          setSubmissionStatus('error');
      });
  };

  return (
    <>
      <title>Kontak - PT. Century Bearindo International</title>
      <meta name="description" content="Hubungi kami untuk informasi lebih lanjut mengenai produk dan layanan kami. Temukan alamat, nomor telepon, dan email kami di sini."/>
      <meta name="keywords" content="kontak kami, hubungi kami, alamat perusahaan, telepon perusahaan, email perusahaan" />
      <div className="kontak-container">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.25}
        >
          <div className="map-container">
            {/* Replace with your Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.836626211421!2d112.7237318!3d-7.2454885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55d2f50d95c4fc9d!2sPt.%20Century%20Bearindo%20International!5e0!3m2!1sid!2sid!4v1628762951064!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimatedContent>
        <div className="kontak-content">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.5}
          >
            <div className="kontak-form">
              <h2>Hubungi Kami</h2>
              <form ref={form} onSubmit={sendEmail} noValidate>
                <input type="text" name="user_name" placeholder="Nama" required />
                {errors.user_name && <p className="error-text">{errors.user_name}</p>}
                <input type="email" name="user_email" placeholder="Email" required />
                {errors.user_email && <p className="error-text">{errors.user_email}</p>}
                <input type="text" name="subject" placeholder="Subjek" required />
                {errors.subject && <p className="error-text">{errors.subject}</p>}
                <textarea name="message" placeholder="Pesan" required></textarea>
                {errors.message && <p className="error-text">{errors.message}</p>}
                <button type="submit">Kirim</button>
                {submissionStatus === 'success' && <p className="success-message">Message Sent!</p>}
                {submissionStatus === 'error' && <p className="error-message">Failed to send message, please try again.</p>}
              </form>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.5}
          >
            <div className="kontak-info">
              <h3>Informasi Kantor</h3>
              <p>PT. Century Bearindo International</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Ruko+Mutiara+Dupak+65%2FA-26+Jl.+Dupak%2C+Gundih%2C+Kec.+Bubutan+Kota+SBY%2C+Jawa+Timur+60171" target="_blank" rel="noopener noreferrer" className="contact-link">
                <p>Ruko Mutiara Dupak 65/A-26 Jl. Dupak, Gundih, Kec. Bubutan Kota SBY, Jawa Timur 60171</p>
              </a>
              <a href="tel:0315353882" className="contact-link">
                <p>Telepon: (031) 535 3882</p>
              </a>
              <a href="mailto:cbi.sby@id.intbearing.com" className="contact-link">
                <p>Email: cbi.sby@id.intbearing.com</p>
              </a>
              <br/>
              <h3>Jam Kerja</h3>
              <p>Senin - Jumat: 08:00 - 17:00</p>
              <p>Sabtu: 08:00 - 14:00</p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </>
  );
}