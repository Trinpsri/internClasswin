import React from "react";
import TaskList from "./TaskList";
import {actionsData} from "./Task.stories";
import { action } from "@storybook/addon-actions";

export default {
  component: TaskList,
  title: "TaskList"
};

const tasks = [
    {
        id: 1,
        title: "Adum1",
        state: "test1"
    },
    {
        id: 2,
        title: "Adum2",
        state: "test2"
    }
];
const WithTaskPinned = [
    ...tasks,
    {
        id: 3,
        title: "Adum3",
        state: "TASK_PINNED"
    }
]

export const Default = () => <TaskList tasks={tasks} loading={false} actions ={actionsData} />;

export const Loading = () => <TaskList loading={true} />;

export const Emply = () => <TaskList tasks={[]} />;

export const WithPinnedTask = () => <TaskList tasks={WithTaskPinned} actions ={actionsData} />;