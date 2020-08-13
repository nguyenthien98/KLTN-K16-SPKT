import { taskConstants } from '../constants';

const addTask = (task) => {
    return (dispatch) => {
        dispatch({ type: taskConstants.ADD_TASK, payload: task });
    }
}

const deleteTask = (taskId) => {
    return (dispatch) => {
        dispatch({ type: taskConstants.DELETE_TASK, payload: taskId });
    }
}

const updateTask = (task) => {
    return (dispatch) => {
        dispatch({ type: taskConstants.UPDATE_TASK, payload: task });
    }
}

export const taskActions = {
    addTask,
    updateTask,
    deleteTask
};