import whatsappLogo from "@assets/photo_2025-09-27 18.05.14_1758989307586.jpeg";

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