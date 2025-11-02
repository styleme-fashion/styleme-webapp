import { useState, useEffect } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const BREAKPOINT =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--breakpoint-md"
      ) || "768px";

    const mql = window.matchMedia(`(max-width: ${BREAKPOINT})`);
    const onResize = () => {
      setIsMobile(mql.matches);
    };

    setIsMobile(mql.matches);
    mql.addEventListener("change", onResize);

    return () => {
      mql.removeEventListener("change", onResize);
    };
  }, []);

  return !!isMobile;
}
