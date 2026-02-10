import { useEffect, useState, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUserCountry, isCountryAllowed, AllowedCountry } from '@/lib/geolocation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface GeolocationGuardProps {
  children: ReactNode;
  allowedCountries?: AllowedCountry[];
  redirectTo?: AllowedCountry;
  blockAccess?: boolean;
}

/**
 * Geolocation Guard Component
 * Restricts access based on user's geographic location
 * 
 * @example
 * <GeolocationGuard allowedCountries={['us', 'uk']} redirectTo="us">
 *   <YourContent />
 * </GeolocationGuard>
 */
export function GeolocationGuard({ 
  children, 
  allowedCountries = ['us', 'uk', 'fr', 'de'],
  redirectTo = 'us',
  blockAccess = false 
}: GeolocationGuardProps) {
  const [isChecking, setIsChecking] = useState(true);
  const [isAllowed, setIsAllowed] = useState(true);
  const [userCountry, setUserCountry] = useState<AllowedCountry | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    const firstSegment = pathParts[0] as string | undefined;
    const hasValidCountry = firstSegment && allowedCountries.includes(firstSegment as AllowedCountry);

    // Path already has a valid country – no check, no redirect, no spinner
    if (hasValidCountry) {
      setIsChecking(false);
      setIsAllowed(true);
      setUserCountry(firstSegment as AllowedCountry);
      return;
    }

    const checkAccess = async () => {
      setIsChecking(true);

      const result = await isCountryAllowed({
        allowedCountries,
        redirectTo,
        blockAccess,
      });

      setUserCountry(result.userCountry);
      setIsAllowed(result.allowed);

      if (!result.allowed && !blockAccess && redirectTo) {
        const pathParts = currentPath.split('/');
        let newPath: string;

        if (pathParts[1] && allowedCountries.includes(pathParts[1] as AllowedCountry)) {
          pathParts[1] = redirectTo;
          newPath = pathParts.join('/');
        } else {
          pathParts.splice(1, 0, redirectTo);
          newPath = pathParts.join('/') || `/${redirectTo}`;
        }

        if (newPath !== currentPath) {
          navigate(newPath, { replace: true });
        }
      }

      setIsChecking(false);
    };

    checkAccess();
  }, [allowedCountries, redirectTo, blockAccess, navigate, location.pathname]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Checking access...</p>
        </div>
      </div>
    );
  }

  if (!isAllowed && blockAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <div className="flex items-center gap-2 text-destructive mb-2">
              <AlertCircle className="w-5 h-5" />
              <CardTitle>Access Restricted</CardTitle>
            </div>
            <CardDescription>
              This service is not available in your region.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {userCountry 
                ? `Your location (${userCountry.toUpperCase()}) is not in the allowed countries list.`
                : 'We were unable to determine your location.'}
            </p>
            <p className="text-xs text-muted-foreground">
              Allowed countries: {allowedCountries.map(c => c.toUpperCase()).join(', ')}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
