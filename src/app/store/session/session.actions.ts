import { createAction, props } from "@ngrx/store";


export const storeSession = createAction('[Session] store session ID',props<{sessionID: string}>());