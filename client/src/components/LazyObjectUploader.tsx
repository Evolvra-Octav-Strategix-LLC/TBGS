import { lazy, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Loader2 } from "lucide-react";

// Lazy load the ObjectUploader component and its heavy Uppy dependencies
const ObjectUploader = lazy(() => import('./ObjectUploader').then(module => ({ default: module.ObjectUploader })));

// Props interface that matches ObjectUploader
interface LazyObjectUploaderProps {
  maxNumberOfFiles?: number;
  maxFileSize?: number;
  onGetUploadParameters: () => Promise<{
    method: "PUT";
    url: string;
  }>;
  onComplete?: (result: any) => void;
  buttonClassName?: string;
  children: React.ReactNode;
}

// Loading fallback component
const UploadLoadingFallback = ({ children, buttonClassName }: { children: React.ReactNode; buttonClassName?: string }) => (
  <Button disabled className={buttonClassName}>
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    Loading uploader...
  </Button>
);

/**
 * Lazy-loaded wrapper for ObjectUploader that only loads Uppy libraries when actually needed.
 * This dramatically reduces initial bundle size for pages that don't use file upload.
 * 
 * Provides the same API as ObjectUploader but with better performance characteristics:
 * - Only loads ~200KB+ of Uppy libraries when user actually wants to upload
 * - Shows loading state while Uppy libraries are being fetched
 * - Same functionality once loaded
 */
export function LazyObjectUploader(props: LazyObjectUploaderProps) {
  return (
    <Suspense fallback={<UploadLoadingFallback children={props.children} buttonClassName={props.buttonClassName} />}>
      <ObjectUploader {...props} />
    </Suspense>
  );
}

export default LazyObjectUploader;