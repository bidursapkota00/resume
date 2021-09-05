import React from "react";
import ContactItem from "./ContactItem";
import location from "../img/location.svg";
import emailme from "../img/emailme.svg";
import contact from "../img/contact.svg";
import "../styles/Contact.css";
import { useSelector } from "react-redux";

function Contact() {
  let person = null;
  person = useSelector((state) => state.fetch.person);
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.666195752851!2d85.3107110140821!3d27.66579753392564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1951484612c3%3A0x74f5f0225e13c822!2sDallo%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1630834273059!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={contact} text1={person.phone} title={"Phone"} />
          <ContactItem icon={emailme} text1={person.email} title={"Email"} />
          <ContactItem
            icon={location}
            text1={person.address}
            title={"Location"}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
