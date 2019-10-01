function getThemeProp(themeProp, defaultValue, theme) {
  if (
    theme &&
    typeof theme === 'object' &&
    theme.reactDatepicker &&
    typeof theme.reactDatepicker === 'object' &&
    theme.reactDatepicker.colors &&
    typeof theme.reactDatepicker.colors === 'object' &&
    theme.reactDatepicker.colors[themeProp]
  ) {
    return theme.reactDatepicker.colors[themeProp];
  }

  return defaultValue;
}

export default getThemeProp;
