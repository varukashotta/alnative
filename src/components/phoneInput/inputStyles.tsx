import styled from 'styled-components/native';
import {Layout} from '../utils';
import {TouchableOpacityProps} from "react-native";

interface IProps extends TouchableOpacityProps{
    border?: boolean;
    focus: boolean;
}



export const Container = styled.View``;

export const Input = styled.View`
  borderRadius: ${Layout.widthPercentageToDP(3)}px;
  border-width: 1px;
  borderColor: #a6a6a6;
  marginBottom: ${Layout.widthPercentageToDP(2)}px;
`;

export const Cell = styled.TouchableOpacity<IProps>`
    borderBottomWidth: ${props => props.focus ? '2px' : props.border ? '1px' : 0 };
    borderBottomColor: ${props => props.focus ? '#484848' : props.border ? '#a6a6a6' : 0};
    height: ${Layout.widthPercentageToDP(15)}px;
    justifyContent: center;
    paddingHorizontal: ${Layout.widthPercentageToDP(3)}px;
    borderRadius: ${props => props.focus ? Layout.widthPercentageToDP(2) : 0 }px;
    borderColor: ${props => props.focus ? '#484848' : 0};
    borderWidth: ${props => props.focus ? '2px' : 0};
`;

export const Row = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`
