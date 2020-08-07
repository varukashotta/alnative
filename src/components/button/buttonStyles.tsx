import styled from "styled-components/native";
import {Layout} from "../utils";
import {TouchableOpacityProps} from "react-native";

interface IProps extends TouchableOpacityProps{
    bgColor: string;
    borderColor?: string;
}

export const Container = styled.TouchableOpacity<IProps>`
    borderWidth: 1px;
    borderColor: ${(props:IProps) => props.borderColor || props.bgColor};
    borderRadius: ${Layout.widthPercentageToDP(2.5)}px;
    backgroundColor: ${(props:IProps) => props.bgColor};
    padding: ${Layout.spacing.spacing(2)}px;
`
