# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for "La 3ème Dimension" (la3emedim.fr), a portfolio and e-commerce site. The project uses Astro's content collections for managing portfolio work and product listings.

## Development Commands

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run astro` - Access Astro CLI

## Architecture

### Content Collections
The site uses two main content collections defined in `src/content/config.ts`:

- **work**: Portfolio projects with markdown content, including metadata like title, description, tags, and images
- **products**: E-commerce products with JSON data, including SEO, pricing, Stripe integration, and configurable sections

### Key Directories
- `src/pages/` - Route-based pages (index.astro is the homepage)
- `src/components/` - Reusable Astro components
- `src/layouts/` - Layout components (BaseLayout.astro, ProductLayout.astro)
- `src/content/` - Content collections (work/, products/)
- `src/styles/` - Stylesheets

### Product System
Products use a flexible section-based architecture where each product defines an array of sections with types: 'hero', 'gallery', 'video', 'features', 'specs', 'pricing', 'custom'. This allows for dynamic page layouts.

### Special Features
- The homepage prioritizes a project called "nested/smallest" if it exists
- Products support Stripe integration for payments
- SEO optimization with structured data support
- GitHub Pages deployment via Actions

## Product Creation Guidelines

When creating new products in `src/content/products/`, ensure the JSON structure matches the expected component interfaces:

### Section Types and Required Structure

**Hero section (`type: "hero"`)**:
```json
{
  "type": "hero",
  "data": {
    "title": "Product Name",
    "tagline": "Short tagline",
    "description": "Product description",
    "features": [{"icon": "icon-name", "text": "Feature text"}],
    "primaryCta": {"text": "CTA Text", "href": "mailto:..."},
    "heroImage": {"src": "image-url", "alt": "Alt text"}
  }
}
```

**Gallery section (`type: "gallery"`)**:
```json
{
  "type": "gallery",
  "data": {
    "title": "Gallery Title",
    "images": [{"src": "image-url", "alt": "Alt text"}]
  }
}
```

**Features section (`type: "features"`)**:
```json
{
  "type": "features", 
  "data": {
    "title": "Features Title",
    "features": [{"icon": "icon-name", "title": "Title", "description": "Description"}]
  }
}
```

**Specs section (`type: "specs"`)**:
```json
{
  "type": "specs",
  "data": {
    "title": "Specs Title",
    "specGroups": [{"title": "Group Title", "specs": {"Key": "Value"}}]
  }
}
```

**Pricing section (`type: "pricing"`)**:
```json
{
  "type": "pricing",
  "data": {
    "title": "Product Name",
    "price": "Price",
    "priceNote": "Note",
    "included": ["Item 1", "Item 2"],
    "ctaText": "CTA Text",
    "ctaHref": "mailto:...",
    "optionsTitle": "Options Title", 
    "options": [{"title": "Option Title", "description": "Description"}]
  }
}
```

### Important Notes
- Set `"draft": true` for products in development
- Products are accessed via `/product/[filename]` route
- All sections with `.map()` calls must have arrays defined to avoid runtime errors

## Deployment

The site deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on pushes to main branch using the official Astro action.