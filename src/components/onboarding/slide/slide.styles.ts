import styled from 'styled-components/native';
import {Dimensions} from "react-native";

export const Container = styled.View`
  flex: 1;
  background: red;
  width: ${Dimensions.get('window').width}px;
  position: relative;
`;

export const SlideButtonsContainer = styled.View`
   position: absolute;
   right: 0;
   bottom: 0;
   background: pink;
   width: 400px;
`;

export const Heading = styled.Text`
    font-size: 20px;
`