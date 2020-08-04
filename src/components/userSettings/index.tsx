import * as React from "react";
import {FC} from "react";
import {View} from "react-native";
import Font, {h4, h5, p} from "../utils/fonts";
import {Heading, ProfileButton, ProfileText, SectionContainer, SettingsItem} from "./userSettingsStyles";
import {green} from "../utils/colors";
import {SvgXml} from 'react-native-svg';
import userIcon from './icons/user.svg';
import {widthPercentageToDP} from "../utils";

interface SectionProps {
    props: any
}

const DATA = [
    {
        title: "Account Settings",
        data: ["Personal Information", "Notifications", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Sidested",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
];

interface ItemProps{
    title: string;
    icon?: string;
}
const Item = ({title, icon}:ItemProps) => (
    <SettingsItem>
        <Font size={h5}>{title}</Font>
        {icon && <SvgXml width={widthPercentageToDP(5)} height={widthPercentageToDP(5)} xml={icon}/> }
    </SettingsItem>
);

interface SectionProps {
}

const UserSettings: FC<SectionProps> = () => {
    return <View style={{flex: 1}}>
        <ProfileButton>
            <View style={{height: 60, flex: 2}}>
                <SvgXml width="50" height="50" xml={userIcon}/>
            </View>
            <ProfileText>
                <Font size={h4}>First Name</Font>
                <Font size={p} color={green}>Show Profile</Font>
            </ProfileText>
        </ProfileButton>
        <SectionContainer
            sections={DATA}
            keyExtractor={(item: any, index) => item + index}
            renderItem={({item}) => <Item title={item}/>}
            renderSectionHeader={({section: {title}}) => (
                <Heading><Font size={p}>{title} </Font></Heading>
            )}
        /></View>
}

export default UserSettings
