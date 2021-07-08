import axios from "axios";

export function userRegistration(email, password, firstName, lastName, role) {
    return dispatch => axios({
        method: 'POST',
        url: `https://express-kanban.herokuapp.com/user/registration`,
        data: {email: email, password: password, firstName: firstName, lastName: lastName, role: role}
    })
        .then((response) => {
            alert(response.data.message)
            dispatch(userLogin(email, password))
        });
}

export function userLogin(email, password) {
    return dispatch => axios({
        method: 'POST',
        url: `https://express-kanban.herokuapp.com/user/login`,
        data: {email: email, password: password}
    })
        .then((response) => {
            dispatch({type: 'SET_USER', payload: response.data.user});
            localStorage.setItem('token', response.data.token)
        });
}

export function userLogout() {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch({type: 'SET_USER', payload: {}});
    }
}