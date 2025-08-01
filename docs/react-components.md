# React Components Documentation

This document explains the logic and structure of the key React components in this project.

## Core Display Components

The primary content pages (`Produk`, `Layanan`, `Highlights`) follow a similar architectural pattern. The main page component (e.g., `src/pages/Produk.jsx`) is a simple wrapper that renders a more complex display component (e.g., `src/components/ProductDisplay.jsx`).

### `ProductDisplay.jsx` and `LayananDisplay.jsx`

These two components are nearly identical in their logic.

**1. State Management:**
   - They use the `useState` hook to store an array of items (products or services) fetched from the Sanity CMS.
   - They use the `useEffect` hook to trigger the data fetch from Sanity when the component first loads.

**2. URL-Driven Content:**
   - The `useSearchParams` hook from `react-router-dom` is used to read the `open` query parameter from the URL (e.g., `/produk?open=some-product-id`).
   - This `openItemId` is used to find and display the currently selected item from the fetched data array. If no `open` parameter is present, it defaults to showing the first item in the array.

**3. Sidebar Navigation:**
   - The component dynamically generates a sidebar menu by mapping over the array of items. 
   - Each link in the sidebar has an `onClick` handler (`handleCategoryClick`). This handler prevents a full page reload and instead uses `setSearchParams` to update the `open` parameter in the URL, triggering a re-render with the new content.

**4. Content Rendering:**
   - The main content area displays the `title`, `images`, and `desc` (description) from the `selectedProduct` or `selectedLayanan` object.
   - For the description, the text fetched from Sanity is a single string. The code uses `.split('\n')` to break this string into an array of paragraphs based on line breaks. It then maps over this array to render each paragraph inside its own `<p>` tag, preserving the intended formatting.

### Animation Components

- **`AnimatedContent.jsx`**: This is a reusable wrapper component that uses `framer-motion` (or a similar library) to apply animations like fades and slides to its children as they enter the viewport. It is used throughout the display components to create a more dynamic user experience.

