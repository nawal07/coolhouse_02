import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const whatsappNumber = '966540008457';
  const defaultMessage =
    'Hello! I visited your website and would like to know more about your products.';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;
