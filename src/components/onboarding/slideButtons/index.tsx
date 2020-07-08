import React, {FC, Fragment} from 'react';
import {
  Button,
  ButtonWrapper,
  Container,
  GetStarted,
  GetStartedText,
  NavText,
  NavTitle,
} from './slideButtonStyles';

interface IProps {
  numberOfSlides: number;
  activeSlide: number;
  _navigateToPage: (param: string) => void;
  _getStarted: () => void;
}

const SlideButtons: FC<IProps> = ({
  numberOfSlides,
  activeSlide,
  _navigateToPage,
  _getStarted,
}) => {
  const renderButtons = (numberSlides) => {
    let renderedButtons: any[] = [];

    for (let i = 0; i < numberSlides; i++) {
      renderedButtons.push(<Button key={i} active={activeSlide === i} />);
    }
    return renderedButtons;
  };

  return (
    <Container>
      {activeSlide + 1 < numberOfSlides ? (
        <Fragment>
          <NavTitle onPress={() => _navigateToPage('-')}>
            {activeSlide > 0 && <NavText>Prev</NavText>}
          </NavTitle>
          <ButtonWrapper>{renderButtons(numberOfSlides)}</ButtonWrapper>
          <NavTitle onPress={() => _navigateToPage('+')}>
            <NavText>Next</NavText>
          </NavTitle>
        </Fragment>
      ) : (
        <GetStarted>
          <GetStartedText onPress={() => _getStarted()}>
            Get Started
          </GetStartedText>
        </GetStarted>
      )}
    </Container>
  );
};

export default SlideButtons;
