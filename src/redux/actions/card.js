import axios from "axios";

const statusList = ['to do', 'progress', 'review', 'done'];

export function cardGetAll() {
    return dispatch => axios({
        method: 'GET',
        url: 'https://express-kanban.herokuapp.com/card'
    })
        .then((response) => {
            dispatch({type: 'CARD_FILL', payload: response.data})
        });
}

export function cardSaveNew(id, name, description, file, priority, status) {
    console.log(file);
    const method = id ? 'PATCH' : 'POST';
    return dispatch => axios({
        method: method,
        url: `https://express-kanban.herokuapp.com/card/${id}`,
        data: {name, description, file, priority, status}
    })
        .then(() => {
            dispatch(cardGetAll())
        });
}

export function cardChangeStatusById(cardId, currentStatus, operation) {
    // eslint-disable-next-line no-eval
    let newStatus = statusList[eval(statusList.indexOf(currentStatus) + operation + 1)];
    return dispatch => axios({
        method: 'PATCH',
        url: `https://express-kanban.herokuapp.com/card/${cardId}`,
        data: {status: newStatus}
    })
        .then(() => {
            dispatch(cardGetAll())
        });
}

export function cardChangePriorityById(cardId, newPriority) {
    return dispatch => axios({
        method: 'PATCH',
        url: `https://express-kanban.herokuapp.com/card/${cardId}`,
        data: {priority: newPriority}
    })
        .then(() => {
            dispatch(cardGetAll())
        });
}

export function cardChangeTrashFlag(cardId, flag) {
    return dispatch => axios({
        method: 'PATCH',
        url: `https://express-kanban.herokuapp.com/card/${cardId}`,
        data: {trash: flag}
    })
        .then(() => {
            dispatch(cardGetAll())
        });
}

export function cardAllChangeTrashFlag(cards, flag) {
    return dispatch => cards.forEach(el => axios({
        method: 'PATCH',
        url: `https://express-kanban.herokuapp.com/card/${el._id}`,
        data: {trash: flag}
    })
        .then(() => {
            dispatch(cardGetAll())
        }));
}

export function cardDeleteById(cardId) {
    return dispatch => axios({
        method: 'DELETE',
        url: `https://express-kanban.herokuapp.com/card/${cardId}`
    }).then(() => {
        dispatch(cardGetAll())
    }).then(() => {
        dispatch({type: 'TOGGLE'})
    });
}

export function cardAllDeleteFromTrashCan(cards) {
    return dispatch => cards.filter(el => el.trash).forEach(el => axios({
        method: 'DELETE',
        url: `https://express-kanban.herokuapp.com/card/${el._id}`
    })
        .then(() => {
            dispatch(cardGetAll())
        }));
}

export function cardAllDelete(cards) {
    return dispatch => cards.forEach(el => axios({
        method: 'DELETE',
        url: `https://express-kanban.herokuapp.com/card/${el._id}`
    })
        .then(() => {
            dispatch(cardGetAll())
        }));
}