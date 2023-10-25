import { createElement } from "react";

const HelloWorld =() => {
  return createElement(
    "div",
    {className: "hello", id: "1"},
    <p>
      Hello Functional Component <span>This is a span</span>
    </p>
  );
};

export default HelloWorld;