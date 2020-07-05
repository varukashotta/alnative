import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  width: ${Dimensions.get('window').width}px;
  position: relative;
  align-content: center;
  justify-content: center;
  height: 100%;
`;

export const SlideButtonsContainer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  background: pink;
  width: ${Dimensions.get('window').width}px;
`;

export const Heading = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const ContentWrapper = styled.View`
  align-self: center;
`;

export const Text = styled.Text`
    font-size: 20px;
    color: grey;
     text-align: center;
`;