import { useLocation, Navigate } from "react-router-dom";

export default function TrailingSlashEnforcer({ children }) {
  const location = useLocation();

  // If pathname ends with "/" but isn't the root path
  if (
    location.pathname.length > 1 &&
    location.pathname.endsWith("/")
  ) {
    // Remove trailing slash, preserve query + hash
    const newPath = location.pathname.slice(0, -1) + location.search + location.hash;
    return <Navigate to={newPath} replace />;
  }

  return children;
}
