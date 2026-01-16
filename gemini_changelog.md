## 2026-01-16
- Refactored the application to use Server-Side Rendering (SSR) to improve SEO.
- Installed `express` to create a server for SSR.
- Created `entry-server.jsx` and `entry-client.jsx` for server and client entry points.
- Created `server.js` to handle both development and production SSR.
- Updated `package.json` with new scripts for building and running the SSR application.
- Made components SSR-compatible by removing client-side only code from server-side execution.
- Added native React 19 head management for SEO meta tags.
