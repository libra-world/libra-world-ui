import { useEffect, useState } from 'react';

/**
 * 设计稿的 px 转为当前视窗下的真实 px
 * @param px
 */
export default function useAdaptPx(px) {
  const [adaptPx, setAdaptHeight] = useState(px);
  useEffect(() => {
    const newPx = (document.body.clientWidth / 375) * px;
    setAdaptHeight(newPx);
  }, [px]);
  return adaptPx;
}
