import {SAVE_TASK,EDIT_TASK,FILTER_TASK,ADD_TASK,DONE_TASK} from './ActionsType'
export const addTask = newId => (
    {
        type: ADD_TASK,
        payload: newId,
    }
)
export const saveTask = savTask => (
    {
        type: SAVE_TASK,
        payload: savTask,
    }
)
export const editTask = taskEditee => (
    {
        type: EDIT_TASK,
        payload: taskEditee
    }
)
export const doneTask = id => (
    {
        type: DONE_TASK,
        payload: id
    }
)
export const filterTask = taskAFiltree => (
    {
        type: FILTER_TASK,
        payload: taskAFiltree,
    }
)
