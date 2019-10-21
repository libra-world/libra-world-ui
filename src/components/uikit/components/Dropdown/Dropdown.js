import React, { forwardRef, useState, useRef } from 'react';
import { Box } from '../../index';
class Position {
  constructor() {
    this.top = 0;
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
    this.width = 0;
    this.height = 0;
  }
}
const noop = () => {};
const parseNumber = val => {
  if (val === null) return 0;
  const val2 = parseInt(val);
  return isNaN(val2) ? 0 : val2;
};
const getPosition = node => {
  if (!node) {
    return new Position();
  }
  const nodePosition = node.getBoundingClientRect();
  const nodeStyle = window.getComputedStyle(node);
  return {
    top: nodePosition.top,
    bottom: nodePosition.bottom,
    left: nodePosition.left,
    right: nodePosition.right,
    width: parseNumber(nodeStyle.width),
    height: parseNumber(nodeStyle.height),
  };
};
const getViewpointDimension = () => ({
  clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
});
const getFixedDirection = (parentPosition, childrenPosition) => {
  const { left, right, bottom, top } = parentPosition;
  const { clientHeight, clientWidth } = getViewpointDimension();
  const { width, height } = childrenPosition;
  const result = {};
  if (left + width < clientWidth) {
    result.left = left;
  } else {
    result.left = right - width;
  }
  if (bottom + height < clientHeight) {
    result.top = bottom;
  } else if (top - height > 0) {
    result.top = top - height;
  } else {
    result.top = bottom;
  }
  return result;
};
const getAbsoluteDirection = (parentPosition, childrenPosition) => {
  const { left, bottom, top, height: pHeight } = parentPosition;
  const { clientHeight, clientWidth } = getViewpointDimension();
  const { width, height } = childrenPosition;
  const result = {};
  if (bottom + height < clientHeight) {
    result.top = 0 + pHeight;
  } else if (top - height > 0) {
    result.bottom = 0 + pHeight;
  } else {
    result.top = 0 + pHeight;
  }
  if (left + width < clientWidth) {
    result.left = 0;
  } else {
    result.right = 0;
  }
  return result;
};

const DropDownBox = forwardRef((props, ref) => (
  <Box
    ref={ref}
    __css={{
      position: 'relative',
      display: 'inline-block',
      outline: 'none',
    }}
    {...props}
  />
));

const ShowBox = forwardRef((props, ref) => (
  <Box
    ref={ref}
    tx="dropdown"
    variant="box"
    __css={{
      visibility: props.show ? 'unset' : 'hidden',
      opacity: props.show ? 1 : 0,
      position: props.show ? (props.isFixed ? 'fixed' : 'absolute') : 'fixed',
      zIndex: 999,
      transition: 'opacity 0.5s',
    }}
    {...props}
  />
));

const Dropdown = forwardRef((props, ref) => {
  const { children, overlay = <></>, tigger = 'click', isFixed = false, ...rest } = props;
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({});
  const childrenRef = useRef(null);
  const parentRef = typeof ref === 'function' || ref === null ? useRef(null) : ref;
  if (typeof ref === 'function') ref(parentRef.current);
  let timer = useRef(Date.now());
  const getDirection = isFixed ? getFixedDirection : getAbsoluteDirection;
  const _showChildren = (__type, __way) => {
    if (__way === 'enter' && Date.now() - timer.current < 500) return;
    if (__type !== tigger) return;
    const parentPosition = getPosition(parentRef.current);
    const childrenPosition = getPosition(childrenRef.current);
    timer.current = Date.now();
    const position = getDirection(parentPosition, childrenPosition);
    _setChildShow(__way);
    setPosition(position);
  };

  const _setChildShow = __way => {
    const __type = tigger;
    if (__type === 'click') {
      setShow(show => !show);
    } else if (__way === 'leave') {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <DropDownBox
      className={show ? 'checked' : ''}
      ref={parentRef}
      onBlur={() => {
        setTimeout(() => {
          setShow(false);
        }, 300);
      }}
      onClick={() => _showChildren('click')}
      onMouseMove={event => {
        _showChildren('hover', 'enter');
        props.onMouseLeave && props.onMouseLeave(event);
      }}
      onMouseLeave={
        tigger === 'hover'
          ? event => {
              _setChildShow('leave');
              props.onMouseLeave && props.onMouseLeave(event);
            }
          : props.onMouseLeave || noop
      }
      {...rest}
    >
      {children}
      <ShowBox ref={childrenRef} style={position} isFixed={isFixed} show={show}>
        {overlay}
      </ShowBox>
    </DropDownBox>
  );
});

export default Dropdown;
