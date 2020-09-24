import * as React from 'react';
import {FC, useState} from 'react';
import {FlatList, View} from 'react-native';
import Font, {h5} from '../utils/generic/fonts';
import {Country} from './countryListStyles';
// @ts-ignore
import {Layout} from '../utils';
import SvgTick from './SvgTick';
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
              <View style={{height: Layout.widthPercentageToDP(5), width: Layout.widthPercentageToDP(5)}}>
               <SvgTick/>
              </View>
          )}
        </Country>
      )}
    />
  );
};

export default CountryList;
