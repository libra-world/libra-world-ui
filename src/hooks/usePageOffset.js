import React from 'react';
import throttle from 'lodash/throttle';

export default function usePageOffset() {
  const [offset, setOffset] = React.useState({ scrollLeft: 0, scrollTop: 0 });
  React.useEffect(() => {
    const handleScroll = throttle(ev => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      console.log('scrollTop', scrollTop);
      setOffset({ scrollLeft, scrollTop });
    }, 300);
    window.addEventListener('scroll', handleScroll, true);
    return window.removeEventListener('scroll', handleScroll);
  }, []);
  console.log('offset', offset);
  return offset;
}
