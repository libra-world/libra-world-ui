import React, { useContext, useState, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  background,
  border,
  borderRadius,
  space,
  fontFamily,
  fontSize,
  color,
  fontWeight,
  position,
  width,
  display,
  minHeight,
  boxShadow,
  style,
  compose,
} from 'styled-system';
import useThemeProps from '../../hooks/useThemeProps';
import globalStyles from '../../globalStyles';
import getThemeProp from '../../utils/getThemeProp';
import Flex from '../Flex';

const placeholderColor = style({
  prop: 'placeholderColor',
  cssProperty: 'color',
});

const placeholderFontWeight = style({
  prop: 'placeholderFontWeight',
  cssProperty: 'fontWeight',
});

const composeInputLabelStyles = compose(
  position,
  border,
  background,
  display,
  borderRadius,
  space
);
const InputLabel = styled(Flex)`
  ${composeInputLabelStyles}
`;
const composeStyledInputStyle = compose(
  background,
  space,
  fontFamily,
  fontSize,
  color,
  fontWeight,
  space,
  border,
  width,
  minHeight,
  boxShadow
);

const StyledInput = styled('input')`
  ${composeStyledInputStyle};
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    ${placeholderFontWeight}
    ${placeholderColor}
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    ${placeholderFontWeight}
    ${placeholderColor}
  }
  :-moz-placeholder {
    /* Firefox 18- */
    ${placeholderFontWeight};
    ${placeholderColor};
  }
`;

function Input({
  placeholder,
  id,
  isActive,
  ariaLabel,
  onClick,
  value,
  prefixAddon,
  suffixAddon,
  padding,
  disableAccessibility,
  onChange = f => f,
  theme: inputTheme,
}) {
  const [searchString, setSearchString] = useState(value);
  // const ref = useRef(null);
  useEffect(() => {
    setSearchString(value);
  }, [value]);
  const themeContext = useContext(ThemeContext);
  const theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    inputFontWeight: 600,
    inputFontSize: '14px',
    inputColor: getThemeProp('charcoal', globalStyles.colors.charcoal, themeContext),
    inputBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    inputMinHeight: '46px',
    inputWidth: '100%',
    inputFlex: '1',
    inputPadding: padding,
    inputBorder: '0',
    inputPlaceholderFontWeight: 500,
    inputPlaceholderColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext
    ),
    inputLabelDisplay: 'flex',
    inputLabelPosition: 'relative',
    inputLabelBorder: `1px solid ${getThemeProp('graci', globalStyles.colors.graci, themeContext)}`,
    inputLabelBorderRadius: '2px',
    inputLabelBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    inputLabelMargin: '0',
    inputLabelActiveBoxShadow: `inset 0px -3px 0 ${getThemeProp(
      'primaryColor',
      globalStyles.colors.primaryColor,
      themeContext
    )}`,
    ...inputTheme,
  });

  function handleOnChange(e) {
    const val = e.target.value;
    setSearchString(val);
    onClick && onClick(e);
    onChange(e);
    /*
    if (typeof ref.current === 'number') {
      // @ts-ignore
      clearTimeout(ref.current);
    }

    // @ts-ignore
    ref.current = setTimeout(() => {
      onClick && onClick();
      onChange(e);
    }, 300);*/
  }

  return (
    <InputLabel
      htmlFor={id}
      as="label"
      display={theme.inputLabelDisplay}
      position={theme.inputLabelPosition}
      border={theme.inputLabelBorder}
      background={theme.inputLabelBackground}
      borderRadius={theme.inputLabelBorderRadius}
      m={theme.inputLabelMargin}
      boxShadow={isActive ? theme.inputLabelActiveBoxShadow : 'none'}
      {...theme.inputLabelTheme}
    >
      {prefixAddon}
      <StyledInput
        flex={theme.inputFlex}
        tabIndex={disableAccessibility ? -1 : 0}
        border={theme.inputBorder}
        p={theme.inputPadding}
        // @ts-ignore
        width={theme.inputWidth}
        background={theme.inputBackground}
        fontFamily={theme.fontFamily}
        // @ts-ignore
        color={theme.inputColor}
        fontSize={theme.inputFontSize}
        fontWeight={theme.inputFontWeight}
        placeholderColor={theme.inputPlaceholderColor}
        placeholderFontWeight={theme.inputPlaceholderFontWeight}
        id={id}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={searchString}
        autoComplete="off"
        onChange={handleOnChange}
        onFocus={onClick}
        data-testid="CommonInput"
        {...theme.inputTheme}
      />
      {suffixAddon}
    </InputLabel>
  );
}

export default Input;
