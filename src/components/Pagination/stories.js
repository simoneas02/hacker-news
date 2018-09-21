import React from "react";
import { storiesOf } from "@storybook/react";

import Pagination from ".";

const stories = storiesOf("Pagination", module);

stories.add("without props", () => <Pagination />);

stories.add("with total and activePage", () => (
  <Pagination total={10} activePage={5} />
));

stories.add("with total, activePage and pageLink", () => (
  <Pagination total={3} activePage={1} pageLink="http:mypage.com/page/%page%" />
));

stories.add("with total, activePage, pageLink and callback", () => (
  <Pagination
    total={15}
    activePage={9}
    pageLink="http:mypage.com/page/%page%"
    onClick={page => console.log(page)}
  />
));
