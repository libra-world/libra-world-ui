import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

const fillColor = '#F0B90B';
const defaultColor = '#48515D';
const SortIndicatorStyled = styled.div`
  display: flex;
  align-items: center;

  .title {
    line-height: 18px;
  }

  .svg-sort {
    width: 12px;
    height: 18px;
  }
`;

export default function SortIndicator({ sortBy, title, sortDirection, onSort }) {
  function _onSort() {
    const direction = sortDirection === 'DESC' ? 'ASC' : 'DESC';
    onSort(direction, sortBy);
  }

  return (
    <SortIndicatorStyled onClick={_onSort}>
      <span className="title">{title}</span>&nbsp;
      <span className="svg-sort">
        <svg className="sort-icon" width="100%" height="100%" viewBox="0 0 24 24">
          <path
            d="M 6 14 L 18 14 L 12 24 Z"
            fill={sortDirection === 'DESC' ? fillColor : defaultColor}
          />
          <path
            d="M 6 10 L 18 10 L 12 0 Z"
            fill={sortDirection === 'ASC' ? fillColor : defaultColor}
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </span>
    </SortIndicatorStyled>
  );
}

SortIndicator.propTypes = {
  sortDirection: PropTypes.oneOf(['ASC', 'DESC']),
};
