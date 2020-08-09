import styled from "styled-components/native";
import {Layout} from "../utils";
import * as Animatable from 'react-native-animatable';

export const Container = styled.Modal`
    flex: 1;
`;

export const Content = styled(Animatable.View)`
    marginTop: ${Layout.widthPercentageToDP(10)}px;
    backgroundColor: #fff; 
    borderRadius: ${Layout.widthPercentageToDP(5)}px;
`;

export const Header = styled.View`
    borderBottomWidth: 1px;
    borderColor: #e1e1e1;
    paddingHorizontal: ${Layout.widthPercentageToDP(3)}px;
    paddingVertical: ${Layout.widthPercentageToDP(4)}px;
    display: flex;
    flexDirection: row;
    alignItems: center;
`;

export const Inner = styled.View`
    padding: ${Layout.widthPercentageToDP(3)}px;
`;
