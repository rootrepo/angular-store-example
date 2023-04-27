import { Action ,on ,createReducer} from "@ngrx/store";
import * as SessionActions from "./session.actions";


export interface Session {
    sessionID?:string;
    timeUntilExp : number;
    timerExpiration : number;
    terminateSessionInitiated? : boolean;
}

export type terminateReason ='TimeOut';

const intitialState : Session = {
    sessionID: '',
    timeUntilExp: 10,
    timerExpiration : 0,
    terminateSessionInitiated : false
}

export function reducer(state : Session | undefined, action : Action){
    return createReducer(
        intitialState,
        on(SessionActions.storeSession,(state, {sessionID}) => ({...state ,sessionID})),
        on(SessionActions.expirationTimerElapsed, (state) => ({...state, timerExpiration:0})),
        on(SessionActions.initSession, (state,{session}) => ({...state,  ...session})),
        on(SessionActions.terminateSession , (state) => ({ ...state ,terminateSessionInitiated : true}))
    )(state,action);
}