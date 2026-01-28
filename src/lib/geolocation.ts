/**
 * Geolocation Service
 * Detects user's country and applies restrictions
 */

export type AllowedCountry = 'us' | 'uk' | 'fr' | 'de';

export interface GeolocationConfig {
  allowedCountries: AllowedCountry[];
  redirectTo?: AllowedCountry;
  blockAccess?: boolean;
}

// Country code to country mapping
const countryCodeMap: Record<string, AllowedCountry> = {
  US: 'us',
  GB: 'uk',
  FR: 'fr',
  DE: 'de',
  // Add more mappings as needed
};

/**
 * Get user's country from IP geolocation
 * Uses timezone-based detection as primary method (no CORS issues)
 * IP-based geolocation can be added via backend API if needed
 */
export async function getUserCountry(): Promise<AllowedCountry | null> {
  // Use timezone-based detection (no CORS, works client-side)
  const timezoneCountry = getCountryFromTimezone();
  if (timezoneCountry) {
    return timezoneCountry;
  }

  // If timezone detection fails, return null (will allow access)
  // For production, implement IP geolocation via backend API to avoid CORS
  return null;
}

/**
 * Check if user's country is allowed
 */
export async function isCountryAllowed(
  config: GeolocationConfig
): Promise<{ allowed: boolean; userCountry: AllowedCountry | null }> {
  const userCountry = await getUserCountry();
  
  if (!userCountry) {
    // If we can't detect country, allow access (fail open)
    return { allowed: true, userCountry: null };
  }

  const allowed = config.allowedCountries.includes(userCountry);
  return { allowed, userCountry };
}

/**
 * Get country from browser's timezone (fallback method)
 */
export function getCountryFromTimezone(): AllowedCountry | null {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Map timezones to countries
    if (timezone.includes('America/New_York') || timezone.includes('America/Chicago') || 
        timezone.includes('America/Los_Angeles') || timezone.includes('America/Denver')) {
      return 'us';
    }
    if (timezone.includes('Europe/London')) {
      return 'uk';
    }
    if (timezone.includes('Europe/Paris')) {
      return 'fr';
    }
    if (timezone.includes('Europe/Berlin')) {
      return 'de';
    }
    
    return null;
  } catch {
    return null;
  }
}
