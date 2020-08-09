import React from "react";
import { Header } from "../../components/Header";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<shallow />", () => {
  test("render del componente shallow", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toEqual(1);
  });
});
