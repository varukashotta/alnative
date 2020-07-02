import React, {FC} from "react";
import {Text, FlatList, View} from "react-native";
import SlideButtons from "./slideButtons";
import Slide from "./slide";

interface IProps {
    data: [{
        heading?: string;
    }];
    slideButtons: boolean;
}

const Onboarding: FC<IProps> = ({data = [{ heading: 'Heading'}], slideButtons = true}) => {

    return (<View>
            <FlatList
                keyExtractor={( index) => index.toString()}
                horizontal={true}
                renderItem={({item}) => <Slide item={item}/>}
                data={data}
            />
        {slideButtons && <SlideButtons/>}
    </View>);
}

export default Onboarding;