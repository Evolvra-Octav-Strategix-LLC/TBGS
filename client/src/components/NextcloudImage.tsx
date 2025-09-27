import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NextcloudImageProps {
  filename: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

interface ImageMetadata {
  filename: string;
  localPath: string;
  mimeType: string;
  fileSize: number;
  lastSyncAt: string;
  optimizedVersions: {
    jpeg?: string[];
    webp?: string[];
    avif?: string[];
  };
}

interface ResponsiveSrcSet {
  webp: string;
  avif: string;
  jpeg: string;
}

export default function NextcloudImage({
  filename,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  onLoad,
  onError
}: NextcloudImageProps) {
  const [imageData, setImageData] = useState<ImageMetadata | null>(null);
  const [responsive, setResponsive] = useState<ResponsiveSrcSet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadImageMetadata = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(`/api/images/${filename}/metadata`);
        
        if (!response.ok) {
          throw new Error(`Failed to load image metadata: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.success) {
          setImageData(data.image);
          setResponsive(data.responsive);
        } else {
          throw new Error(data.error || 'Failed to get image metadata');
        }
      } catch (error) {
        console.error('Error loading image metadata:', error);
        setHasError(true);
        onError?.();
      } finally {
        setIsLoading(false);
      }
    };

    loadImageMetadata();
  }, [filename, onError]);

  if (isLoading) {
    return (
      <div 
        className={cn(
          "animate-pulse bg-gray-200 rounded-lg",
          className
        )}
        style={{ aspectRatio: '16/9' }}
      >
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Loading...
        </div>
      </div>
    );
  }

  if (hasError || !imageData || !responsive) {
    return (
      <div 
        className={cn(
          "bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center",
          className
        )}
        style={{ aspectRatio: '16/9' }}
      >
        <div className="text-center text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-2 text-sm">Image not found</p>
          <p className="text-xs text-gray-400">{filename}</p>
        </div>
      </div>
    );
  }

  // Get the original image path as fallback
  const originalSrc = `/images/${imageData.filename}`;
  
  return (
    <picture className={className}>
      {/* Modern AVIF format - best compression */}
      {responsive.avif && (
        <source 
          srcSet={responsive.avif}
          sizes={sizes}
          type="image/avif"
        />
      )}
      
      {/* WebP format - good compression, wide support */}
      {responsive.webp && (
        <source 
          srcSet={responsive.webp}
          sizes={sizes}
          type="image/webp"
        />
      )}
      
      {/* JPEG fallback - universal support */}
      {responsive.jpeg && (
        <source 
          srcSet={responsive.jpeg}
          sizes={sizes}
          type="image/jpeg"
        />
      )}
      
      {/* Final fallback - original image */}
      <img
        src={originalSrc}
        alt={alt}
        className={cn("w-full h-auto", className)}
        loading={priority ? "eager" : "lazy"}
        onLoad={onLoad}
        onError={(e) => {
          console.error('Image failed to load:', filename);
          setHasError(true);
          onError?.();
        }}
        style={{
          aspectRatio: 'auto'
        }}
      />
    </picture>
  );
}

// Utility component for hero images
export function NextcloudHeroImage({
  filename,
  alt,
  className,
  overlay = false,
  children
}: NextcloudImageProps & {
  overlay?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative", className)}>
      <NextcloudImage
        filename={filename}
        alt={alt}
        priority={true}
        sizes="100vw"
        className="w-full h-full object-cover"
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}
      
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}