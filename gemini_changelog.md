## 2025-09-04

- Modified `layanan.css` and `produk.css` to enforce a square aspect ratio on all images within the `LayananDisplay` and `ProductDisplay` components.
- Added a media query to both stylesheets to display images in a two-column grid on viewports narrower than 460px, preventing them from taking up the full width of the container.

## 2025-08-12

- Refactored `BackButton` component to be rendered globally in `App.jsx` instead of individual pages.
- Removed `BackButton` from `Produk`, `Layanan`, `HighlightsPage`, and `HighlightsPostPage` pages.
- Added logic in `App.jsx` to conditionally render `BackButton` based on the current route.