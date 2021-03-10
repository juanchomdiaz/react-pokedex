import React from "react";
import Header from "./Header";
import { configure, shallow, render } from "enzyme";


describe("Header", () => {
  it(">>> Should render the brand logo", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".logo").exists()).toBeTruthy();
  });

  it(">>> Should render the brand name", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".brand-name").text()).toBe("Pokedex");
  });

});
