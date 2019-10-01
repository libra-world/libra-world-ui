// import { fontFace } from './fontFace';
import Color from 'color';
import baseTheme from './baseTheme';

const { colors: palette, fontSizes } = baseTheme;

const colors = {
  ...palette,
  selectOptionbg: palette.grays[1],
  selectOptionHoverbg: Color(palette.grays[1])
    .lighten(0.3)
    .string(),
  background: palette.white,
  foreground: palette.white,
  button: '#2a2f37',
  primary: palette.white,
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
    background: colors.black,
    border: `1px solid ${colors.black}`,
  },
  secondary: {
    color: colors.black,
    background: colors.primary,
    border: `1px solid ${colors.primary}`,
  },
  danger: {
    color: 'white',
    background: colors.red,
  },
};
const buttonSizes = {
  medium: {
    fontSize: fontSizes.md,
    padding: `8px 16px`,
    borderRadius: baseTheme.radii[1],
  },
  large: {
    fontSize: fontSizes.xl,
    padding: `12px 24px`,
    borderRadius: baseTheme.radii[2],
  },
};

const theme = {
  ...baseTheme,
  name: 'lightTheme',
  colors,
  buttons,
  buttonSizes,
};

export default theme;
