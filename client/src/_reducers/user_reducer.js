import{
    LOGIN_USER
} from '../_actions/types'

const initialState = null;

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return{ ...state, loginSuccess: action.payload };
        default:
            return state;
    }

}