const defaultState = []

export default function cardReducer(state = defaultState, action) {
    let tempTrash;

    switch (action.type) {
        case "CARD_FILL":
            return [...action.payload];

        case "CARD_ALL_SAVE_IN_TRASH_CAN":
            tempTrash = state.map(el => el.trash = true);
            return [tempTrash];


        default:
            return state;
    }
}