import { FETCH_WEATHER } from "../index";
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}
