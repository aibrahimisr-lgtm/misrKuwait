import { useEffect } from "react";
import { useMatches } from "react-router-dom";

const usePageTitle = () => {
  const matches = useMatches();

  useEffect(() => {
    const matchWithTitle = [...matches]
      .reverse()
      .find((match) => match.handle?.title);

    if (matchWithTitle?.handle?.title) {
      document.title = `مصر للتأمين | ${matchWithTitle.handle.title}`;
    } else {
      document.title = "Insurance";
    }
  }, [matches]);
};

export default usePageTitle;
