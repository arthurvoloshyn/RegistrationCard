import * as React from "react";
import { shallow } from "enzyme";
import Logo from "../src/views/components/Logo";

describe("Components", () => {
  describe("Logo", () => {
    it("should render without throwing an error", () => {
      const wrap = shallow(<Logo/>);

      expect(wrap.find("h1").text()).toBe("webaddict");
    });
  });
});
