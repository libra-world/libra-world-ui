import React, { useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import SortIndicator from '@src/pages/Home/SortIndicator';

const TickerRowStyled = styled.div`
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  .bh {
    flex: 0 1 140px;
    overflow: hidden;
  }
  .at {
    flex: 0 1 170px;
    padding-left: 8px;
  }
  .hi {
    flex: 0 1 570px;
    padding-left: 8px;
  }
  .ts {
    flex: 0 1 120px;
  }
  .dt {
    flex: 0 1 130px;
  }
  & > div {
    display: flex;
    align-items: center;
  }
`;

export default React.memo(function TickerRow({ ticker }) {
  const { t } = useTranslation();
  const {
    ts: tickSize,
    s: symbol,
    b: baseAsset,
    q: quoteAsset,
    o: open,
    c: close,
    qv: quoteVolume,
    dayRate,
    isFavorite,
  } = ticker;

  return (
    <TickerRowStyled>
      <div className="bh">{baseAsset}</div>
      <div className="at">{quoteAsset}</div>
      <div className="hi"></div>
      <div className="ts"></div>
      <div className="dt"></div>
    </TickerRowStyled>
  );
});
