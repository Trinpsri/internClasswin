import React from "react";
import Task from "./Task";
import { action } from "@storybook/addon-actions";

function TaskList({ tasks, loading, actions }) {

    if (loading) {
        return <div className="list-items">loading</div>
    }
    if (tasks.Length === 0){
        return <div className="list-items">No items...</div>
    }

    return (
        <div className="List-items">
            {tasks.map(task => (
                <Task task={task} actions={actions} {...actions} />
            ))}
        </div>
    );
}


export default TaskList;