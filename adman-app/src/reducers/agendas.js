import { FETCH_AGENDAS } from '../actions/agendas';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_AGENDAS:
            return state;
        default:
            return state;
    }
}