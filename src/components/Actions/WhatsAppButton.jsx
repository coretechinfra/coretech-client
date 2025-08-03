import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

function WhatsAppButton({ phoneNumber, message }) {
  const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setVisible(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}${
    message ? `&text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    visible && (
      <a
        href={whatsappUrl}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>
    )
  );
}

export default WhatsAppButton;
