import React, { useCallback } from 'react';
import { AutoSizer, List } from 'react-virtualized';
import styled from 'styled-components';

import TickerRow from './TickerRow';

const ROW_HEIGHT = 70;
const TickersListStyled = styled(List)`
  &.ReactVirtualized__Grid {
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  /* push the scrollbar off-screen in firefox for windows */
  @supports (-moz-appearance: none) {
    &.ReactVirtualized__Grid {
      width: ${({ width }) => width + 15}px !important;
    }
  }
`;
export default function TickersList({ tickers, mode, onRowClick }) {
  const handleOnRowClick = useCallback(ticker => {
    if (onRowClick) return onRowClick(ticker);
    // TODO router push
  }, []);

  const _rowRenderer = useCallback(
    ({ index, className, id, key, style }) => {
      const ticker = tickers[index];

      return (
        <a
          id={id}
          className={className}
          style={style}
          onClick={() => handleOnRowClick(ticker)}
          key={key}
        >
          <TickerRow ticker={ticker} />
        </a>
      );
    },
    [tickers]
  );

  return (
    <AutoSizer disableHeight={false}>
      {({ width, height }) => (
        <TickersListStyled
          rowCount={tickers.length}
          height={height}
          rowHeight={ROW_HEIGHT}
          rowRenderer={_rowRenderer}
          width={width}
          scrollToIndex={0}
        />
      )}
    </AutoSizer>
  );
}
