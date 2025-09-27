import whatsappLogo from "@assets/stock_images/whatsapp_logo_white_transparent.webp";

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