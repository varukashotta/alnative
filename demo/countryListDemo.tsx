import React from "react";
import CountryList from "../src/components/countryList";

const CountryListDemo = () => {
    return <CountryList onPress={(code) => console.log(code)} />
}

export default CountryListDemo
