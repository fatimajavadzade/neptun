import { useState, useEffect } from "react";

export const useMatchMedia = (query) => {
  console.log(window.matchMedia(query).matches,"mstche")
  console.log(window.matchMedia(query),"tek")
  
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handler = (e) => setMatches(e.matches);

        mediaQuery.addEventListener("change", handler);

         return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);

    return matches;
};