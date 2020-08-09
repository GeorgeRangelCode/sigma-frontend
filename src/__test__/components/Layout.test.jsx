import React from "react";
import { Layout } from "../../components/Layout";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Layout />", () => {
  test("render del componente Layout", () => {
    const children = {};
    const wrapper = mount(<Layout {...children} />);
    expect(wrapper.length).toEqual(1);
  });
});
