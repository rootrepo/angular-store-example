import { createAction, props } from "@ngrx/store";
import * as  fromSession from "./session.reducer";

export const storeSession = createAction('[Session] store session ID',props<{sessionID: string}>());
export const initSession = createAction('[Session] init session',props<{session : fromSession.Session}>());
export const expirationTimerElapsed = createAction('[Session] Timer elapsed');
export const terminateSession = createAction('[Session] terminate session',props<{reason: fromSession.terminateReason}>());