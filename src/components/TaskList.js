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
    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check"/>
                    <div className="title-message">Youhave no tasks</div>
                    <div className="Subtitle message">Sit back and relax</div>
                </div>
            </div>
        );
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