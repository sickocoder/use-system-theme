import { useEffect, useState } from 'react';
import { UseSystemThemeDetectorReturn } from './use-system-button.types';
import { MEDIA_QUERY_MATCHER } from './use-system-theme.constants';





const useSystemThemeDetector = (): UseSystemThemeDetectorReturn => {
  const getCurrentTheme = () => window.matchMedia(MEDIA_QUERY_MATCHER).matches;
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  const mediaQueryListener = ((e: MediaQueryList, _: MediaQueryListEvent) => {
    setIsDark(e.matches);
  });

  useEffect(() => {
    if (isDark === undefined)
      setIsDark(getCurrentTheme());

    const darkMediaQuery = window.matchMedia(MEDIA_QUERY_MATCHER);
    darkMediaQuery.addEventListener("change", mediaQueryListener as unknown as EventListenerObject);
  }, [isDark]);



  return isDark ? 'dark' : 'light';
}

export default useSystemThemeDetector;