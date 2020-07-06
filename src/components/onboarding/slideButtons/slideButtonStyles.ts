import styled from 'styled-components/native';
import {heightPercentageToDP, widthPercentageToDP} from '../../utils';

interface ITheme {
  active: boolean;
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.View`
    height: ${heightPercentageToDP(0.5)}px;
    flex: 1;
    border-radius: 5px;
    background-color: ${(props: ITheme) => (props.active ? '#000' : 'gray')}
    margin: 10px;
`;

export const ButtonWrapper = styled.View`
  flex: 2;
  display: flex;
  flex-direction: row;
`;

export const NavText = styled.Text`
  font-size: ${widthPercentageToDP(3.5)}px;
  text-transform: uppercase;
  text-align: center;
`;

export const NavTitle = styled.TouchableOpacity`
  flex: 1;
`;

export const GetStarted = styled.View`
  background: red;
  paddingvertical: ${widthPercentageToDP(3)}px;
`;

export const GetStartedText = styled.Text`
  font-weight: bold;
  font-size: ${widthPercentageToDP(4)}px;
`;
