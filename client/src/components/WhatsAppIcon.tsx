import whatsappLogo from "@assets/whatsapp_logo_white_transparent_final.webp";

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export default function WhatsAppIcon({ className = "", size }: WhatsAppIconProps) {
  const sizeClasses = size ? `w-${size} h-${size}` : "w-5 h-5";
  
  return (
    <img 
      src={whatsappLogo} 
      alt="WhatsApp" 
      className={`${sizeClasses} ${className}`}
    />
  );
}