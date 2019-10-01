import React, { useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const TickerRowStyled = styled.div`
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #000;

  .name-vol {
    flex: 0 1 140px;
    overflow: hidden;
  }

  .last-price {
    flex: 0 1 130px;
    padding-left: 8px;

    .fiat-price {
      color: #848e9c;
      font-size: 14px;
    }
  }

  .day-change {
    flex: 0 1 100px;
    font-size: 16px;
  }
`;

export default React.memo(function TickerRow({ ticker }) {
  const { t } = useTranslation();
  const prevPriceRef = useRef(ticker.c);
  const prevPrice = prevPriceRef.current;
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

  prevPriceRef.current = close;

  return (
    <TickerRowStyled>
      <div className="name-vol">
        <strong>{baseAsset}</strong>
        <span> / {quoteAsset}</span>
      </div>
      <div className="last-price">ssss</div>
      <div className="day-change">xxx</div>
    </TickerRowStyled>
  );
});
