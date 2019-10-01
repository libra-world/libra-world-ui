const colors = {
  white: '#fff',
  black: '#000',
  grays: ['#848E9C', '#2a2f37', '#12161C', '#1b2027'],
  darkGray: '#12161C',
  gray: '#848E9C',
  lightGray: '#EAECEF',
  red: '#F23051',
  pink: '#FF0372',
  green: '#00C582',
  yellow: '#F0B90B',
  alphaYellow: '#F0B90B44',
  lightBlack: '#212833',
  transparent: 'transparent',
};

const gradients = {};

const fontSizes = {
  xs: 12,
  sm: 13,
  md: 14,
  lg: 18,
  xl: 20,
  xxl: 24,
};

const space = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
};

const iconSize = {};

const zIndices = {
  none: 0,
  xs: 1000,
  sm: 2000,
  md: 3000,
  lg: 4000,
  xl: 10000,
  xxl: 10001,
};

const radii = [0, 3, 5, '50%'];

export default {
  colors,
  zIndices,
  gradients,
  iconSize,
  fontSizes,
  space,
  radii,
  breakpoints: ['768px', '992px', '1260px'],
};
