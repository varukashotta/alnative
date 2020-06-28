import React, {FC} from "react";
import {View, Text} from "react-native";

interface IProps {
    data: []
}

const Onboarding:FC<IProps> = ({data = []}) => {
    return <View>
        {data.map(item =>
        <Text>test</Text>
        )}
    </View>
}

export default Onboarding;