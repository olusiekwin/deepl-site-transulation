# Quantavus Logo & Branding Guide

## Logo Files Created

### 1. **favicon.svg** (32x32)
- Browser tab icon
- Uses Deep Blue (#1A2A52) background with Gold (#D4AF37) Q monogram
- Rounded corners for modern look

### 2. **logo-icon.svg** (64x64)
- App icon for mobile devices
- Circular design with Q monogram
- Used for Apple touch icons and app shortcuts

### 3. **logo.svg** (200x60)
- Full logo with text
- Horizontal layout with Q icon + "Quantavus" wordmark
- Includes "Capital Advisory" tagline

## Logo Component

The `Logo` component is used throughout the app:

```tsx
import { Logo } from "@/components/shared/Logo";

// Default usage (header)
<Logo />

// Footer variant (light background)
<Logo variant="light" />

// Icon only
<Logo showText={false} />

// Different sizes
<Logo size="sm" />  // Small
<Logo size="md" />  // Medium (default)
<Logo size="lg" />  // Large
```

## Brand Colors Used

- **Deep Blue**: `#1A2A52` - Primary brand color
- **Gold**: `#D4AF37` - Accent color for Q monogram
- **Charcoal**: `#333333` - Text color
- **White**: `#FFFFFF` - Light variant backgrounds

## Design Features

1. **Q Monogram**: 
   - Stylized "Q" in a circle
   - Gold stroke on Deep Blue background
   - Professional, corporate aesthetic

2. **Typography**:
   - Montserrat font for "Quantavus" (headings)
   - Open Sans for tagline
   - Clean, modern, professional

3. **Responsive**:
   - Text hides on small screens (icon only)
   - Scales appropriately across devices

## Usage Locations

- ✅ Header navigation
- ✅ Footer
- ✅ Browser favicon
- ✅ App icons (mobile)

## Customization

To update the logo:
1. Edit the SVG files in `/public/`
2. Maintain aspect ratios
3. Keep brand colors consistent
4. Test across different backgrounds (light/dark)

## Professional Features

- ✅ Scalable vector graphics (SVG)
- ✅ High contrast for accessibility
- ✅ Consistent brand identity
- ✅ Corporate/professional aesthetic
- ✅ Works on light and dark backgrounds
