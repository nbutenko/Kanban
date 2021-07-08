import axios from "axios";

export function columnGetAll() {
    return dispatch => axios({
        method: 'GET',
        url: 'https://express-kanban.herokuapp.com/column'
    })
        .then((response) => {
            dispatch({type: 'COLUMN_FILL', payload: response.data})
        });
}

export function columnSaveNew(title) {
    return dispatch => axios({
        method: 'POST',
        url: `https://express-kanban.herokuapp.com/column`,
        data: {title: title}
    })
        .then(() => {
            dispatch(columnGetAll())
        });
}

export function columnDeleteById(columnId) {
    return dispatch => axios({
        method: 'DELETE',
        url: `https://express-kanban.herokuapp.com/column/${columnId}`
    }).then(() => {
        dispatch(columnGetAll())
    }).then(() => {
        dispatch({type: 'TOGGLE'})
    });
}