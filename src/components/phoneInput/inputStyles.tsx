import styled from 'styled-components/native';
import {Layout} from '../utils';
import {ViewProps} from "react-native";

interface IProps extends ViewProps{
    border?: boolean
}

export const Container = styled.View``;

export const Input = styled.View`
  borderRadius: ${Layout.widthPercentageToDP(1)}px;
  border-width: 1px;
  borderColor: #717171;
  margin: ${Layout.widthPercentageToDP(1)}px;
`;

export const Cell = styled.View<IProps>`
    borderBottomWidth: ${props => props.border ? '1px' : 0};
    borderBottomColor: ${props => props.border ? '#717171' : 0};
    height: ${Layout.widthPercentageToDP(12.5)}px;
    justifyContent: center;
    paddingHorizontal: ${Layout.widthPercentageToDP(3)}px;

`;

export const Row = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`
