import React from 'react';
import usePageOffset from '@src/hooks/usePageOffset';

export default function useHeader() {
  const { scrollTop } = usePageOffset();
  const isScroll = scrollTop > 60;
  const variant = React.useMemo(() => {
    return isScroll ? 'light' : 'dark';
  }, [isScroll]);
  return {
    variant,
  };
}
