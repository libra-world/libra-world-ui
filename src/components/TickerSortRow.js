import React from 'react';
import styled from 'styled-components';
// import SortIndicator from '@src/components/SortIndicator';
import { useTranslation } from 'react-i18next';

const TickerSortRowStyled = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 15px 16px;
  .tx-id {
    flex: 0 1 110px;
  }
  .et {
    flex: 0 1 200px;
    padding-left: 8px;
  }
  .type {
    flex: 0 1 120px;
  }
  .from {
    flex: 0 1 300px;
  }
  .to {
    flex: 0 1 300px;
    padding-left: 8px;
  }
  .amount {
    flex: 0 1 130px;
  }
  .fx-fee {
    flex: 0 1 100px;
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
      <div className="tx-id">
        {/*<SortIndicator
          sortBy="bh"
          onSort={_onSort}
          title={t('TX ID')}
          sortDirection={sortBy === 'bh' ? sortDirection : null}
        />*/}
        TX ID
      </div>
      <div className="et">{t('Expiration Time')}</div>
      <div className="type">{t('Type')}</div>
      <div className="from">{t('From')}</div>
      <div className="to">{t('To')}</div>
      <div className="amount">{t('Amount')}</div>
      <div className="fx-fee">{t('Fx Fee')}</div>
    </TickerSortRowStyled>
  );
});
