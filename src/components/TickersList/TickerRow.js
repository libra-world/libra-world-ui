import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';
// import SortIndicator from '@src/components/SortIndicator';
import { Box } from '@src/components/uikit';
import { Link } from 'react-router-dom';

const TickerRowStyled = styled.div`
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  .tx-id {
    flex: 0 1 110px;
    overflow: hidden;
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
    overflow: hidden;
  }
`;

export default React.memo(function TickerRow({ ticker }) {
  const { expire, version, from, type, to, amount, gasUsed } = ticker;

  return (
    <TickerRowStyled>
      <Box className="tx-id" as="a" color="#215399">
        {/*<SortIndicator
          sortBy="bh"
          onSort={_onSort}
          title={t('TX ID')}
          sortDirection={sortBy === 'bh' ? sortDirection : null}
        />*/}
        <Link title={version} to={`/en/tx-info/${type}/${version}`}>
          {version}
        </Link>
      </Box>
      <div className="et">{moment(new Date(expire)).fromNow()}</div>
      <Box className="type" color="#215399">
        {type}
      </Box>
      <Box className="from" color="#215399">
        <Link title={type === 'mint' ? `Minter(${from})` : from} to={`/en/address-info/${from}`}>
          {type === 'mint' ? 'Minter' : `${from?.slice(0, 10)}......${from?.slice(-9)}`}
        </Link>
      </Box>
      <Box as="a" title={to} className="to" color="#215399">
        {to && `${to.slice(0, 10)}......${to.slice(-9)}`}
      </Box>
      <div className="amount">{amount}</div>
      <div className="fx-fee">{gasUsed}</div>
    </TickerRowStyled>
  );
});
