import React, {FC, ReactNode} from "react";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import Screens, {bottomLinksIP, StackScreensIP} from "./screens";

interface IProps {
    children?: ReactNode,
    bottomLinks?: bottomLinksIP,
    stackedScreens:StackScreensIP
}


const Navigation: FC<IProps> = ({children,bottomLinks , stackedScreens}) => {
    return <NavigationContainer>{children}
        <Screens bottomLinks={bottomLinks} stackedScreens={stackedScreens}/>
    </NavigationContainer>

}

export default Navigation;