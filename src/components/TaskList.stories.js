import React from "react";
import TaskList from "./TaskList";

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

export const Default = () => <TaskList tasks={tasks} loading={false}/>;