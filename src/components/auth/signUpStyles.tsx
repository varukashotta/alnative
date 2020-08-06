import styled from "styled-components/native";
import {MEDIUM, spacing} from "../utils/layout/spacing";
import {Layout} from "../utils";

export const Container = styled.View`
    padding: ${spacing(MEDIUM)}px;
`
export const Header = styled.View`
    align-self: center;
    justify-content: center;
`
export const Logo = styled.View `
    alignSelf: center;
    marginBottom: ${Layout.widthPercentageToDP(2)}px;
`
