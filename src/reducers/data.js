export default function(state = [], action) {
    switch (action.type) {
        case 'FETCH_DATA_FULFILLED':
            return action.payload;
        default:
            return state;
    }
}
