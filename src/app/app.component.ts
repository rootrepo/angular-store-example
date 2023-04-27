import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as fromApp from './app.reducer';
import { Store } from '@ngrx/store';
import * as SessionActions from './store/session/session.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router : Router,
    private store : Store<fromApp.AppState>
  ){}

  ngOnInit(): void {
    console.log('initiating session store');
    
    this.store.dispatch(SessionActions.initSession({
      session : {
        timeUntilExp :2000,
        timerExpiration : setTimeout(() => {
          this.store.dispatch(SessionActions.expirationTimerElapsed())
        }, 2000) as unknown as number  ,
        
        terminateSessionInitiated : false
      }
    }))
    this.store.dispatch(SessionActions.storeSession({'sessionID' : 'test'}));
    
  }
  title = 'my-first-project';
}
