import { Injectable } from "@angular/core";
import {Actions} from '@ngrx/effects';
import * as fromApp from '../../app.reducer';
import { Store } from "@ngrx/store";

@Injectable()
export class SessionEffects {
  constructor(
    private actions : Actions,
    private store : Store<fromApp.AppState>,
    private window :Window,
  ){}

  
}