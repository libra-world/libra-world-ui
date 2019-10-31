import React, { useEffect } from 'react';
import { Box, Pagination } from '@src/components/uikit';
import ModuleRow from './ModuleRow';

const SIZE_PAGE = 10;

function Index({ total = 0, list = [], onLoadMore }) {
  const [currentPage, setPage] = React.useState(1);
  const pageCount = Math.ceil(total / SIZE_PAGE);
  useEffect(() => {
    onLoadMore &&
      onLoadMore({
        page: currentPage,
        pageSize: SIZE_PAGE,
      });
  }, [currentPage]);
  return (
    <Box>
      <Box minHeight="300px">
        {list.map(ticker => (
          <ModuleRow ticker={ticker} />
        ))}
      </Box>
      {pageCount > 0 && (
        <Box mt="20px">
          <Pagination
            totalPages={pageCount}
            currentPage={currentPage}
            onChange={currentPage => setPage(currentPage)}
          />
        </Box>
      )}
    </Box>
  );
}

export default React.memo(Index);
