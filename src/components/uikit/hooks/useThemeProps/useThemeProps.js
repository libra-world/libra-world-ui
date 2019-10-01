import { ThemeContext } from 'styled-components';
import { useContext, useMemo } from 'react';

export default function useThemeProps(themeProps = {}, key) {
  const context = useContext(ThemeContext);
  const theme = useMemo(() => {
    if (!key) return themeProps;

    if (
      context &&
      typeof context === 'object' &&
      context.reactDatepicker &&
      typeof context[key] === 'object'
    ) {
      return Object.keys(themeProps).reduce(
        (prevObj, val) => ({
          ...prevObj,
          [val]: context[key][val] || themeProps[val],
        }),
        {}
      );
    }

    return themeProps;
  }, [context, themeProps, key]);

  return theme;
}
