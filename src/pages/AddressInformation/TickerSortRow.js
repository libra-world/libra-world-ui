import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import SortIndicator from '@src/components/SortIndicator';

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
export default React.memo(({ onSortChange, sortBy, sortDirection }) => {
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
          title={t('TX ID')}
          sortDirection={sortBy === 'bh' ? sortDirection : null}
        />
      </div>
      <div className="at">
        <SortIndicator
          sortBy="at"
          onSort={_onSort}
          title={t('Time')}
          sortDirection={sortBy === 'at' ? sortDirection : null}
        />
      </div>
      <div className="hi">
        <SortIndicator
          sortBy="hi"
          onSort={_onSort}
          title={t('From')}
          sortDirection={sortBy === 'hi' ? sortDirection : null}
        />
      </div>
      <div className="ts">
        <SortIndicator
          sortBy="ts"
          onSort={_onSort}
          title={t('Amount')}
          sortDirection={sortBy === 'ts' ? sortDirection : null}
        />
      </div>
      <div className="dt">
        <SortIndicator
          sortBy="dt"
          onSort={_onSort}
          title={t('TX Fee')}
          sortDirection={sortBy === 'dt' ? sortDirection : null}
        />
      </div>
    </TickerSortRowStyled>
  );
});
