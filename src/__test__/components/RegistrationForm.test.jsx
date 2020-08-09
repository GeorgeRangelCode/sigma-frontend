import React from "react";
import { RegistrationForm } from "../../components/RegistrationForm";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<RegistrationForm />", () => {
  test("render del componente RegistrationForm", () => {
    const props = {
      departments: [],
      data: {},
    };
    const wrapper = mount(<RegistrationForm {...props} />);
    expect(wrapper.length).toEqual(1);
  });
});
