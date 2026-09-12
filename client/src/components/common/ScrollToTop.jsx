import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // If there's an anchor hash, don't force scroll to top
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}
