# Geolocation Restrictions Setup

The app now includes geolocation-based access restrictions.

## How It Works

1. **Automatic Detection**: Uses IP geolocation to detect user's country
2. **Access Control**: Restricts or redirects based on allowed countries
3. **Fallback**: If geolocation fails, access is allowed (fail-open)

## Configuration

In `src/App.tsx`, the `GeolocationGuard` component is configured:

```tsx
<GeolocationGuard 
  allowedCountries={['us', 'uk', 'fr', 'de']}  // Countries with access
  redirectTo="us"                               // Redirect to US if blocked
  blockAccess={false}                           // false = redirect, true = block
>
```

## Options

### `allowedCountries`
Array of country codes that have access:
- `'us'` - United States
- `'uk'` - United Kingdom  
- `'fr'` - France
- `'de'` - Germany

### `redirectTo`
Country code to redirect to if user is not in allowed list.
Set to `null` to disable redirect.

### `blockAccess`
- `false` (default): Redirects users to allowed country
- `true`: Shows access denied message

## Customization

To change restrictions, edit `src/App.tsx`:

```tsx
// Example: Only allow US and UK
<GeolocationGuard 
  allowedCountries={['us', 'uk']}
  redirectTo="us"
  blockAccess={false}
>
```

## Testing

1. Use a VPN to test different countries
2. Check browser console for geolocation detection
3. Test redirect behavior by accessing from restricted country

## Privacy

- Uses free IP geolocation service (ipapi.co)
- No personal data stored
- Geolocation only used for access control
