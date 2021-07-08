const defaultState = []

export default function columnReducer(state = defaultState, action) {
    switch (action.type) {
        case "COLUMN_FILL":
            return [...action.payload];

        default:
            return state;
    }
}