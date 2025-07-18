import { useEffect, useState } from "react";

export default function FullScreenShrinker({ children }) {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShrink(true);
    }, 500); // Delay before shrinking
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`overflow-hidden transition-all ease-out duration-700 ${
        shrink ? " h-0" : " h-dvh"
      }`}
    >
      {children}
    </div>
  );
}
