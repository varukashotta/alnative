import * as React from 'react';
import {FC, useState} from 'react';
import {FlatList} from 'react-native';
import Font, {h5} from '../utils/generic/fonts';
import {Country} from './countryListStyles';
// @ts-ignore
import tick from './tick.svg';
import {SvgXml} from 'react-native-svg';
import {Layout} from '../utils';

const countriesData = require('./countryCodes.json');

interface IProps {
  onPress: (code: string) => void;
}

const CountryList: FC<IProps> = ({onPress}) => {
  const [selectedCountry, setSelectedCountry] = useState('AU');

  const _selectCountry = (code: string) => {
    setSelectedCountry(code);
    onPress(code);
  };
  return (
    <FlatList
      keyExtractor={(_item, index) => index.toString()}
      data={countriesData}
      renderItem={({item}) => (
        <Country onPress={() => _selectCountry(item.code)}>
          <Font size={h5}>
            {item.name} ({item.dial_code})
          </Font>
          {selectedCountry === item.code && (
            <SvgXml
              height={Layout.widthPercentageToDP(5)}
              width={Layout.widthPercentageToDP(5)}
              xml={tick}
            />
          )}
        </Country>
      )}
    />
  );
};

export default CountryList;
