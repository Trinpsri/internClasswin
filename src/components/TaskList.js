import React from "react";
import Task from "./Task";
import { action } from "@storybook/addon-actions";

function TaskList({ tasks, loading, actions }) {

    const loadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span>
                <span>cool</span>
                <span>state</span>
            </span>
        </div>
    )

    if (loading) {
        return <div className="list-items">
            {loadingRow}
            {loadingRow}
            {loadingRow}
            {loadingRow}
            {loadingRow}
            {loadingRow}
        </div>
    }
    if (tasks.Length === 0){
        return <div className="list-items">No items</div>
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