import React, {FC} from "react";
import {Text, FlatList, View} from "react-native";
import SlideButtons from "./slideButtons";
import {v4} from 'uuid';

interface IProps {
    data: [{
        id: string;
        heading?: string;
    }];
    slideButtons: boolean;
}

const Onboarding: FC<IProps> = ({data = [{id: v4() , heading: 'Heading'}], slideButtons = true}) => {
    return (<View>
            <FlatList
                keyExtractor={item => item.id}
                horizontal={true}
                renderItem={({item}) => <View><Text>{item.heading}</Text></View>}
                data={data}
            />
        {slideButtons && <SlideButtons/>}
    </View>);
}

export default Onboarding;