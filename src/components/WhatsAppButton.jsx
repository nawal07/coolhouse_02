import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

function WhatsAppButton() {
  const { t } = useLanguage();
  const whatsappNumber = '966540008457';
  const defaultMessage = t.whatsapp.defaultMessage;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.ariaLabel}
      className="whatsapp-float"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;
