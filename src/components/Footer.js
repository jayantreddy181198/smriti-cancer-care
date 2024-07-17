import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [Links, setLinks] = useState(false);
  const [Contact, setContact] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailUs = () => {
    // Add your email submission logic here
    alert(`Email Sent`);
    // You can add logic here to send the email via backend or handle it accordingly
  };

  return (
    <footer>

      <section class="footer">
        <div class="footer-content">
          <div class="footer-about">
            <img src='images/LOGO.png' alt="Smriti Cancer Care Foundation Logo" className="ngo-logo" />
            <p>
                The Smriti Cancer Care Foundation is<br /> dedicated to providing comprehensive<br /> support and care to cancer patients<br /> and their families. Our initiatives include<br /> awareness programs, medical support,<br /> and community engagement.
            </p>
            <br />
            <p>
                Registered CSR Number: CSR00000343 <br />Registered Charity Number: 2967 (Pune)
            </p>
          </div>
          <div class="footer-links">
            <h2
              class="links"
              onClick={() => {
                setLinks(!Links);
              }}
            >
              QUICK LINKS
            </h2>
            <br />
            <ul class={"footer-links-ul " + (Links && "active-links")}>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="about"> About</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="causes"> Impact</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="event"> Resources</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="news"> Get Involved</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="contact"> Donate</Link>
              </li>
            </ul>
          </div>
          <div class="contact-footer">
            <h2
              class="contact-btn"
              onClick={() => {
                setContact(!Contact);
              }}
            >
              CONTACT US
            </h2>

            <div
              class={
                "contact-container " + (Contact && "contact-container-active")
              }
            >
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-map-marker one" aria-hidden="true"></i>
                  </div>
                  <h3>Head Office</h3>
                </div>
                <div class="contact-ad">
                  <p>B8-1701, Blue Ridge</p>
                  <p>Hinjewadi Phase 1, Pune, India 411057</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-phone two" aria-hidden="true"></i>
                  </div>
                  <h3>Phone Number</h3>
                </div>
                <div class="contact-ad">
                  <p>+91 8149673987</p>
                  <p>+91 7977046748</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-envelope three" aria-hidden="true"></i>
                  </div>
                  <h3>Email</h3>
                </div>
                <div class="contact-ad">
                  <p>smriticancercarefoundation.it@gmail.com</p>

                </div>
              </div>
            </div>
          </div>
          <div className="email-us-section">
            <h2>EMAIL US</h2>
            <div className="email-container">
              <div className="email-form">
                <div className="contact-heading">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                  />
                </div>
                <div className="contact-heading">
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="Your Email"
                  />
                </div>
                <div className="contact-heading">
                  <textarea
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="contact-heading">
                  <button onClick={handleEmailUs}>Send Email</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="footer-divider" />
          <p class="copyright">
            ©2024 Smriti Cancer Care Foundation. Registered under the Maharashtra Public Trusts Act.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
