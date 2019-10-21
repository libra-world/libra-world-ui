import React from 'react';

const Icon = ({ type, className, ...others }) => {
  const typeClass = type ? `icon-${type}` : '';
  const cls = `iconfont ${typeClass} ${className || ''}`;

  return <i className={cls} {...others} />;
};

export default Icon;
