import React from "react";
import Task from "./Task";

function TaskList({ tasks, loading }) {

    if (loading) {
        return <div className="list-items">loading</div>
    }
    if (tasks.Length === 0){
        return <div className="list-items">Np items...</div>
    }

    return (
        <div className="List-items">
            {tasks.map(task => (
                <Task task={task} />
            ))}
        </div>
    );
}


export default TaskList;