import * as React from "react";
import {mount} from "enzyme";
import UserSettings from "./index";

describe('User Setttings', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<UserSettings props={{}} />)
    })

    it('should return userSettings component', function () {
        expect(wrapper).toBeDefined();
    });

})
