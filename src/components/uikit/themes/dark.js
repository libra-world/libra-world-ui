import Color from 'color';
import baseTheme from './baseTheme';

const { colors: palette, fontSizes } = baseTheme;

const colors = {
  ...palette,
  selectOptionbg: palette.grays[1],
  selectOptionHoverbg: Color(palette.grays[1])
    .lighten(0.3)
    .string(),
  foreground: palette.white,
  background: palette.black,
  button: '#2a2f37',
  primary: palette.black,
  error: palette.red,
  cardBg: palette.darkGray,
  caption: palette.gray,
  mask: palette.lightBlack,
  iconCheck: Color(palette.yellow)
    .alpha(0.15)
    .string(),
};

const buttons = {
  primary: {
    color: 'white',
    background: colors.primary,
  },
  danger: {
    color: 'white',
    background: colors.red,
  },
};
const buttonSizes = {
  medium: {
    fontSize: fontSizes[2],
    padding: `8px 16px`,
    borderRadius: baseTheme.radii[1],
  },
  large: {
    fontSize: fontSizes[3],
    padding: `12px 24px`,
    borderRadius: baseTheme.radii[2],
  },
};

const theme = {
  name: 'darkTheme',
  ...baseTheme,
  colors,
  buttons,
  buttonSizes,
};

export default theme;
