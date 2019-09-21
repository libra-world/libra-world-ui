import React, { memo } from 'react';
import styled from 'styled-components';
import Layout from '@src/layout';
import errorImg from '@src/static/images/warning.png';

const Container = styled.div`
  padding: 24px 24px 60px;
  height: 100%;
  background: #fff;
  box-sizing: border-box;
`;
const Content = styled.div`
  height: 100%;
  background: #fff;
  box-shadow: 0px 4px 30px rgba(232, 233, 239, 0.5);
  text-align: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h3`
  margin-top: 12px;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
`;
const ErrorPage = props => {
  return (
    <Layout>
      <Container>
        <Content>
          <div>
            <img src={errorImg} alt="" width="104" />
            <Title>页面异常</Title>
            <button type="button" onClick={props.onReload}>
              刷新重试
            </button>
          </div>
        </Content>
      </Container>
    </Layout>
  );
};

export default memo(ErrorPage);
