import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromApp from '../../app.reducer';
import * as SessionActions from "./session.actions";
import { Store } from "@ngrx/store";
import { map } from "rxjs";

@Injectable()
export class SessionEffects {
  constructor(
    private actions : Actions,
    private store : Store<fromApp.AppState>,
    private window :Window,
  ){}

  expiredTimer = createEffect(()=> 
    this.actions.pipe(
      ofType(SessionActions.expirationTimerElapsed),
      map(()=> SessionActions.terminateSession({reason :'TimeOut'}))
    )
  );
}