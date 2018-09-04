import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import List from "../List";
import ListItem from ".";

describe("ListItem", () => {
  const props = {
    list: [
      { title: "1", author: "1", num_comments: 1, points: 2, objectID: "y" },
      { title: "2", author: "2", num_comments: 1, points: 2, objectID: "z" }
    ],
    sortKey: "TITLE",
    isSortReverse: false
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <List {...props}>
        <ListItem />
      </List>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(
      <List {...props}>
        <ListItem />
      </List>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
