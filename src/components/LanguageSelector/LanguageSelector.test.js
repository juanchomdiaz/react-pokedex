import React from "react";
import LanguageSelector from "./LanguageSelector";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount } from "enzyme";

configure({ adapter: new Adapter() });


describe("LanguageSelector", () => {
    it(">>> Should render the dropdown", () => {
     
        const wrapper = mount(<LanguageSelector />);
        expect(wrapper.find("#language-selector").exists()).toBeTruthy();
      });

});