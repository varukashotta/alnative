import React, {FC, Fragment} from 'react';
import {
  Button,
  ButtonWrapper,
  Container, GetStarted, GetStartedText,
  NavText,
  NavTitle,
} from './slideButtonStyles';

interface IProps {
  numberOfSlides: number;
  activeSlide: number;
}

const SlideButtons: FC<IProps> = ({numberOfSlides, activeSlide}) => {
  const renderButtons = (numberSlides) => {
    let renderedButtons: any[] = [];

    for (let i = 0; i < numberSlides; i++) {
      renderedButtons.push(<Button key={i} active={activeSlide === i} />);
    }
    return renderedButtons;
  };

  return (
    <Container>
      {activeSlide !== numberOfSlides ? (
        <Fragment>
          <NavTitle>{activeSlide > 0 && <NavText>Prev</NavText>}</NavTitle>
          <ButtonWrapper>{renderButtons(numberOfSlides)}</ButtonWrapper>
          <NavTitle>
            <NavText>Next</NavText>
          </NavTitle>
        </Fragment>
      ) : (
          <GetStarted>
            <GetStartedText>Get Started</GetStartedText>
          </GetStarted>
      )}
    </Container>
  );
};

export default SlideButtons;
