import * as React from 'react';
import {FlatList} from "react-native";
import Font, {h5} from "../utils/generic/fonts";
import {Country} from "./countryListStyles";
import {FC} from "react";
// @ts-ignore
import checkMark from "../utils/img/tick.svg"
import {SvgXml} from "react-native-svg";
import {Layout} from '../utils';

const countriesData = require('./countryCodes.json');

interface IProps {
    onPress: (code:string) => void
}

const CountryList:FC<IProps> = ({onPress}) => {
    return <FlatList keyExtractor={(_item, index) => index.toString()}
        data={countriesData} renderItem={({item}) => <Country onPress={() => onPress(item.code)}><Font size={h5}>
        {item.name} ({item.dial_code})</Font><SvgXml height={Layout.widthPercentageToDP(34)} width={Layout.widthPercentageToDP(34)} xml={checkMark}/></Country>}
    />
}

export default CountryList
