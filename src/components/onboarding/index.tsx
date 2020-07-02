import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import Slide from './slide';

interface IProps {
  data: [
    {
      heading?: string;
    },
  ];
  slideButtons: boolean;
}

const Onboarding: FC<IProps> = ({
  data = [{heading: 'Heading'}],
  slideButtons = true,
}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        keyExtractor={(index) => index.toString()}
        horizontal={true}
        renderItem={({item}) => <Slide item={item} showButtons={slideButtons}/>}
        data={data}
      />
    </View>
  );
};

export default Onboarding;
