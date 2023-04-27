import * as fromSession from './store/session/session.reducer'

export interface AppState {
    session : fromSession.Session;
}