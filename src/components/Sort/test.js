import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Sort from ".";

describe("Sort", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sort />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Sort />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
