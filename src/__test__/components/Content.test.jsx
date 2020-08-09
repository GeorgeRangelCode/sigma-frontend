import React from "react";
import { Content } from "../../components/Content";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Content />", () => {
  test("render del componente Content", () => {
    const props = {
      departments: [],
      data: {},
    };
    const wrapper = mount(<Content {...props} />);
    expect(wrapper.length).toEqual(1);
  });
});
