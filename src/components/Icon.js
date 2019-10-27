import React from 'react';
import { Box } from '@src/components/uikit';

const Icon = ({ type, className, fontSize = '14px', ...others }) => {
  const typeClass = type ? `icon-${type}` : '';
  const cls = `iconfont ${typeClass} ${className || ''}`;

  return <Box fontSize={fontSize} as="i" className={cls} {...others} />;
};

export default Icon;
