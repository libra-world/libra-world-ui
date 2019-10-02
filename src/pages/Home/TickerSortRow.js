import React from 'react';
import styled from 'styled-components';
import SortIndicator from './SortIndicator';
import { useTranslation } from 'react-i18next';

const TickerSortRowStyled = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 15px 16px;
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
export default React.memo(function TickerSortRow({ onSortChange, sortBy, sortDirection }) {
  const { t } = useTranslation();
  const _onSort = (direction, key) => {
    onSortChange({ sortBy: key, sortDirection: direction });
  };
  return (
    <TickerSortRowStyled>
      <div className="bh">
        <SortIndicator
          sortBy="bh"
          onSort={_onSort}
          title={t('Block Height')}
          sortDirection={sortBy === 'bh' ? sortDirection : null}
        />
      </div>
      <div className="at">
        <SortIndicator
          sortBy="at"
          onSort={_onSort}
          title={t('Amount Transacted')}
          sortDirection={sortBy === 'at' ? sortDirection : null}
        />
      </div>
      <div className="hi">
        <SortIndicator
          sortBy="hi"
          onSort={_onSort}
          title={t('Hash ID')}
          sortDirection={sortBy === 'hi' ? sortDirection : null}
        />
      </div>
      <div className="ts">
        <SortIndicator
          sortBy="ts"
          onSort={_onSort}
          title={t('Transactions')}
          sortDirection={sortBy === 'ts' ? sortDirection : null}
        />
      </div>
      <div className="dt">
        <SortIndicator
          sortBy="dt"
          onSort={_onSort}
          title={t('Date & Time')}
          sortDirection={sortBy === 'dt' ? sortDirection : null}
        />
      </div>
    </TickerSortRowStyled>
  );
});
