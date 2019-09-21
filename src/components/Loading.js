import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const SpinnerAnimation = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
  }
`;

const StyledSpinner = styled.div`
  width: 50px;
  height: 35px;
  text-align: center;
  font-size: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & > div {
    background-color: #f5bc00;
    height: 100%;
    width: 3px;
    display: inline-block;
    margin: 0 3px;
    animation: ${SpinnerAnimation} 1.2s infinite ease-in-out;
  }

  & > .rect2 {
    animation-delay: -1.1s;
  }

  & > .rect3 {
    animation-delay: -1s;
  }

  & > .rect4 {
    animation-delay: -0.9s;
  }

  & > .rect5 {
    animation-delay: -0.8s;
  }
`;

export const Spinner = () => (
  <StyledSpinner>
    <div className="rect2" />
    <div className="rect3" />
    <div className="rect4" />
    <div className="rect5" />
  </StyledSpinner>
);

let instance;
let loadingDiv;

class Loading extends React.PureComponent {
  constructor(props) {
    super(props);
    instance = this;
  }

  state = {
    show: true,
  };

  show() {
    this.setState({
      show: true,
    });
  }

  hide() {
    this.setState({
      show: false,
    });
  }

  render() {
    const { show } = this.state;
    if (!show) return null;

    return <Spinner />;
  }
}

Loading.show = () => {
  if (!instance) {
    if (!loadingDiv) {
      loadingDiv = window.document.createElement('div');
      document.body.appendChild(loadingDiv);
    }

    ReactDOM.render(<Loading />, loadingDiv);
  } else {
    instance.show();
  }
};

Loading.hide = () => {
  instance && instance.hide();
};

export default Loading;
