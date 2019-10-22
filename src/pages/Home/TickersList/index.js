import React, { useCallback } from 'react';
import { AutoSizer, List, InfiniteLoader } from 'react-virtualized';
import styled from 'styled-components';

import TickerRow from './TickerRow';

const STATUS_LOADING = 1;
const STATUS_LOADED = 2;
const ROW_HEIGHT = 70;
const TickersListStyled = styled(List)`
  &.ReactVirtualized__Grid {
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .ReactVirtualized__Grid__innerScrollContainer > a:not(:last-child) {
    border-bottom: 1px solid #f7f8fa;
  }

  /* push the scrollbar off-screen in firefox for windows */
  @supports (-moz-appearance: none) {
    &.ReactVirtualized__Grid {
      width: ${({ width }) => width + 15}px !important;
    }
  }
`;
export default function TickersList({ total, list, mode, onRowClick, onLoadMore }) {
  const [loadedRowsMap, setLoadedRowsMap] = React.useState({});
  const _isRowLoaded = useCallback(
    ({ index }) => {
      return !!loadedRowsMap[index];
    },
    [loadedRowsMap]
  );

  const handleOnRowClick = useCallback(ticker => {
    if (onRowClick) return onRowClick(ticker);
    // TODO router push
  }, []);

  const _rowRenderer = useCallback(
    ({ index, className, id, key, style }) => {
      const ticker = list[index] || {};

      return loadedRowsMap[index] === STATUS_LOADED ? (
        <a
          id={id}
          className={className}
          style={style}
          onClick={() => handleOnRowClick(ticker)}
          key={key}
        >
          <TickerRow ticker={ticker} />
        </a>
      ) : (
        <div
          id={id}
          className={className}
          style={style}
          onClick={() => handleOnRowClick(ticker)}
          key={key}
        >
          loading
        </div>
      );
    },
    [list, loadedRowsMap]
  );

  const _loadMoreRows = useCallback(
    ({ startIndex, stopIndex }) => {
      console.log('startIndex, stopIndex', startIndex, stopIndex);
      const increment = stopIndex - startIndex + 1;
      const page = Math.ceil((startIndex + 1) / increment);
      const pageSize = increment * 2;
      for (let i = startIndex; i <= stopIndex; i++) {
        loadedRowsMap[i] = STATUS_LOADING;
      }

      setLoadedRowsMap(loadedRowsMap);
      return onLoadMore({ page, pageSize }).then(() => {
        for (let i = startIndex; i <= stopIndex; i++) {
          loadedRowsMap[i] = STATUS_LOADED;
        }

        setLoadedRowsMap(loadedRowsMap);
      });
    },
    [loadedRowsMap]
  );

  return (
    <InfiniteLoader isRowLoaded={_isRowLoaded} loadMoreRows={_loadMoreRows} rowCount={total}>
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer disableHeight={false}>
          {({ width, height }) => (
            <TickersListStyled
              ref={registerChild}
              onRowsRendered={onRowsRendered}
              rowCount={total}
              height={height}
              rowHeight={ROW_HEIGHT}
              rowRenderer={_rowRenderer}
              width={width}
              scrollToIndex={0}
            />
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
}
