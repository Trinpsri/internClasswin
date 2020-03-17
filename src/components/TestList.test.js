import React from "react"
import ReactDOM from "react-dom"

import { WithPinnedTask } from "./TaskList.stories"

it("render pinned task at start of the list", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WithPinnedTask />, div);

    const lastTaskInput = div.querySelector(
        '.list-item:nth-child(1) input[value="Adum3"'
    );
    expect(lastTaskInput).not.toBe(null);

    ReactDOM.unmountComponentAtNode(div);
})