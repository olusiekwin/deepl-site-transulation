import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string | 'aspect-auto';
  loading?: 'lazy' | 'eager';
}

/**
 * Optimized image component with loading state
 * Handles image loading with proper sizing and optimization
 */
export function OptimizedImage({
  src,
  alt,
  className,
  aspectRatio = 'aspect-[4/3]',
  loading = 'lazy',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const containerClasses = aspectRatio === 'aspect-auto' 
    ? 'relative overflow-hidden bg-muted' 
    : cn('relative overflow-hidden rounded-lg bg-muted', aspectRatio);

  return (
    <div className={cn(containerClasses, className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 animate-pulse" />
      )}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={cn(
            'w-full h-full transition-opacity duration-500',
            aspectRatio === 'aspect-auto' ? 'object-contain' : 'object-cover',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <span className="text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
}
