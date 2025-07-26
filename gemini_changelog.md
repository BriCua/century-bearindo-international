## 2025-07-26

- Implemented client-side navigation on the product page to prevent full-page reloads when switching between product categories. The main content area now updates dynamically.
- Added a `key` prop to the main content area on the product page to ensure that animations re-trigger when the selected product changes.
- Replicated the structure and functionality of the 'Produk' page for the 'Layanan' page.
- Extracted service data from the `FlipCard` component and created a new `layanan.js` data file.
- Updated the URL parameter format for products from `?open=item1` to `?open=produk1`.
- Created a new `Layanan.jsx` page and a corresponding `LayananDisplay.jsx` component.
- Created a new `layanan.css` file with the same styling as `produk.css`.