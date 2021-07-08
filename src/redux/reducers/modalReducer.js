const defaultState = {
    isOpen: false,
    id: '',
    data: {},
    component: ''
}

export default function modalReducer(state = defaultState, action) {
    switch (action.type) {
        case "TOGGLE":
            if (action.payload) {
                if(action.payload.component) {
                    return {...state, isOpen: !state.isOpen, id: action.payload.cardData.id, data: action.payload.cardData, component: action.payload.component};
                }
                else {
                    return {...state, isOpen: !state.isOpen, data: {}, id: '', component: action.payload};
                }
            } else {
                return {defaultState};
            }

        default:
            return state;
    }
}