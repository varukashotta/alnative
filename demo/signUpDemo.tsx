import * as React from "react";
import SignUpForm from "../src/components/auth";
import {SvgXml} from "react-native-svg";
// @ts-ignore
import icon from './images/hourglass.svg';
import {Layout} from "../src/components/utils";

const Logo = <SvgXml width={Layout.widthPercentageToDP(10)} height={Layout.widthPercentageToDP(10)} xml={icon}/>

const SignUpDemo = () => {
    return <SignUpForm companyLogo={Logo} companyName={'Wadeda'}/>
}

export default SignUpDemo
