import * as actionTypes from './actionTypes';

export const addMenu = (item) =>({
    type: actionTypes.ADD_MENU,
    payload:item
})

export const addWeek = ( item) =>({
    type:actionTypes.ADD_WEEK,
    payload: item
})
