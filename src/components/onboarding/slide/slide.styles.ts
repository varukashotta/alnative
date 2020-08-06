import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {Layout} from '../../utils';

interface IProps {
  backgroundColor: string;
}
export const Container = styled.View`
  flex: 1;
  background: ${(props: IProps) => props.backgroundColor};
  width: ${Dimensions.get('window').width}px;
  position: relative;
  height: 100%;
`;

export const SlideButtonsContainer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${Dimensions.get('window').width}px;
`;

export const Heading = styled.Text`
  font-size: ${Layout.widthPercentageToDP(7)}px;
  text-align: center;
  margin-vertical: ${Layout.widthPercentageToDP(5)}px;
}
`;

export const ContentWrapper = styled.View`
  align-self: center;
  align-content: center;
  justify-content: center;
  padding: ${Layout.widthPercentageToDP(4)}px;
`;

export const Text = styled.Text`
  font-size: ${Layout.widthPercentageToDP(3.4)}px;
  color: grey;
  text-align: center;
`;

export const Image = styled.ImageBackground`
  height: ${Layout.widthPercentageToDP(50)}px;
  width: 100%;
`;
