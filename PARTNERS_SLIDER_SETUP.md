# Partners Slider Setup Guide

A professional partners logo slider has been added to showcase your capital partners.

## Features

✅ **Auto-playing carousel** - Automatically scrolls through partner logos
✅ **Responsive design** - Adapts to different screen sizes
✅ **Clickable logos** - Links to partner websites (optional)
✅ **Category tags** - Shows partner category (Institutional, DFI, etc.)
✅ **Hover effects** - Professional interactions
✅ **Navigation arrows** - Manual control on desktop

## Locations

The partners slider appears in:

1. **Homepage** - "Trusted by Leading Capital Partners" section
2. **Capital Partners Page** - "Our Capital Partners" section

## Adding Partner Logos

### Step 1: Add Logo Images

Place your partner logo images in:
```
public/images/partners/
```

### Step 2: Update Partner List

Edit the partners array in:
- `src/pages/HomePage.tsx` (for homepage slider)
- `src/pages/CapitalPartnersPage.tsx` (for partners page slider)

### Example:

```tsx
{
  name: "Partner Company Name",
  logo: "/images/partners/partner-logo.png",
  category: "Institutional", // Optional
  website: "https://partner-website.com", // Optional
}
```

## Partner Categories

- **Institutional** - Pension funds, sovereign wealth funds
- **DFI** - Development Finance Institutions
- **Credit Fund** - Private lenders and credit funds
- **Family Office** - Single and multi-family offices
- **Strategic** - Strategic co-investors

## Image Requirements

- **Format**: PNG (with transparency), SVG, or JPG
- **Size**: 200-400px width recommended
- **Background**: Transparent PNG preferred
- **Quality**: High resolution for crisp display

## Customization

### Change Slides Per View

```tsx
<PartnersSlider
  slidesToShow={5}  // Show 5 logos at once
  ...
/>
```

### Disable Autoplay

```tsx
<PartnersSlider
  autoplay={false}
  ...
/>
```

### Custom Title/Description

```tsx
<PartnersSlider
  title="Our Trusted Partners"
  description="Working with leading institutions worldwide"
  ...
/>
```

## Current Partner List

The slider is pre-configured with placeholder paths:
- `/images/partners/institutional-1.png`
- `/images/partners/institutional-2.png`
- `/images/partners/dfi-1.png`
- `/images/partners/dfi-2.png`
- `/images/partners/credit-fund-1.png`
- `/images/partners/credit-fund-2.png`
- `/images/partners/family-office-1.png`
- `/images/partners/strategic-1.png`

Replace these with your actual partner logos!
