export const FETCH_BITCOIN = 'FETCH_BITCOIN';
export default function bitcoin(state = {}, action) {
    switch (action.type) {
        case FETCH_BITCOIN:
            return action.bitcoin;
        default:
            return state;
    }
};