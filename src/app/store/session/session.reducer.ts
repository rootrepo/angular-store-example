import { Action ,on ,createReducer} from "@ngrx/store";
import * as SessionActions from "./session.actions";


export interface Session {
    sessionID?:string;
    timeUntilExp : number;
}

const intitialState : Session = {
    sessionID: '',
    timeUntilExp: 0
}

export function reducer(state : Session | undefined, action : Action){
    return createReducer(
        intitialState,
        on(SessionActions.storeSession,(state, {sessionID}) => ({...state ,sessionID})),
    )(state,action);
}