import styled from "styled-components/native";
import {SectionList} from "react-native";
import {LARGE, MEDIUM, spacing} from "../utils/layout/spacing";
import {lightestGray} from "../utils/generic/colors";

export const Container = styled.View`
    padding-bottom: ${spacing(MEDIUM)}px;
    flex: 1;
`;

export const SectionContainer = styled(SectionList)`
    padding-horizontal: ${spacing(MEDIUM)}px;
    padding-bottom: ${spacing(MEDIUM)}px; 
`
export const ProfileButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    background: #fff;
    padding-horizontal: ${spacing(MEDIUM)}px;
    padding-vertical: ${spacing(MEDIUM)}px;
    borderBottomColor: ${lightestGray};
    borderBottomWidth: 1px;
`
export const ProfileText = styled.View`
    flex: 8;
`
export const ProfileIcon = styled.View`
    flex: 2;
`
export const Heading = styled.View`
    padding-top: ${spacing(LARGE)}px;
    background: #fff;
`
export const SettingsItem = styled.TouchableOpacity`
    borderBottomColor: ${lightestGray};
    borderBottomWidth: 1px;
    padding-vertical: ${spacing(MEDIUM)}px;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
