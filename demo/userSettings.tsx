import * as React from "react";
import UserSettings from "../src/components/userSettings";

const _test = (e) => {
    console.log(e)
}

const UserSettingsDemo = () => <UserSettings firstName={'Al'} _profileLink={() => console.log('test')}
                                             _itemPressed={_test}/>

export default UserSettingsDemo;
