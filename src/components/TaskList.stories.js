import React from "react";
import TaskList from "./TaskList";
import {actionsData} from "./Task.stories";

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

export const Default = () => <TaskList tasks={tasks} loading={false} actions ={actionsData} />;

export const loading = () => <TaskList loading={true} />;

export const emply = () => <TaskList tasks={[]} />;