# Partner Logos Directory

Place your partner logo images here. The slider will automatically display them.

## File Structure

```
public/images/partners/
  ├── institutional-1.png
  ├── institutional-2.png
  ├── dfi-1.png
  ├── dfi-2.png
  ├── credit-fund-1.png
  ├── credit-fund-2.png
  ├── family-office-1.png
  ├── strategic-1.png
  └── ... (add more as needed)
```

## Image Requirements

- **Format**: PNG, SVG, or JPG
- **Size**: Recommended 200-400px width
- **Aspect Ratio**: Flexible (logos will be contained)
- **Background**: Transparent PNG preferred, or white background
- **Quality**: High resolution for crisp display

## Logo Guidelines

1. **Consistent Sizing**: Try to keep logos similar in visual weight
2. **Transparent Backgrounds**: PNG with transparency works best
3. **High Contrast**: Ensure logos are visible on light backgrounds
4. **Professional Quality**: Use official, high-quality logo files

## Adding New Partners

To add more partners, edit `src/pages/CapitalPartnersPage.tsx` and add to the partners array:

```tsx
{
  name: "Partner Name",
  logo: "/images/partners/partner-logo.png",
  category: "Category",
  website: "https://partner-website.com", // Optional
}
```

## Categories

- **Institutional** - Pension funds, sovereign wealth funds, asset managers
- **DFI** - Development Finance Institutions
- **Credit Fund** - Private lenders and credit funds
- **Family Office** - Single and multi-family offices
- **Strategic** - Strategic co-investors and corporate investors
