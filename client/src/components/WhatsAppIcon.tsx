import whatsappLogoWhite from "@assets/whatsapp_logo_white.webp";
import whatsappLogoRed from "@assets/whatsapp_logo_red.webp";
import whatsappLogoBlue from "@assets/whatsapp_logo_tbgs_blue.webp";
import whatsappLogoGreen from "@assets/whatsapp_logo_green.webp";
import whatsappLogoOrange from "@assets/whatsapp_logo_orange.webp";

interface WhatsAppIconProps {
  className?: string;
  size?: number;
  color?: 'white' | 'red' | 'blue' | 'green' | 'orange';
}

export default function WhatsAppIcon({ className = "", size, color = 'white' }: WhatsAppIconProps) {
  const sizeClasses = size ? `w-${size} h-${size}` : "w-5 h-5";
  
  const logoMap = {
    white: whatsappLogoWhite,
    red: whatsappLogoRed,
    blue: whatsappLogoBlue,
    green: whatsappLogoGreen,
    orange: whatsappLogoOrange,
  };
  
  return (
    <img 
      src={logoMap[color]} 
      alt="WhatsApp" 
      className={`${sizeClasses} ${className}`}
    />
  );
}