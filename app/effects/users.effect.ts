import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { UserService } from '../services/users.service';
import { switchMap } from 'rxjs/operator/switchMap';
import { map } from 'rxjs/operator/map';

@Injectable()
export class UserEffects {
  static USERS_GET = 'USERS_GET';
  static USERS_ADD = 'USERS_ADD';
  static USERS_UPDATE = 'USERS_UPDATE';
  static USERS_DELETE = 'USERS_DELETE';
  static USERS_GET_ACTIVE = 'USERS_GET_ACTIVE';
  static USERS_SET_ACTIVE = 'USERS_SET_ACTIVE';
  static USERS_RESET_ACTIVE = 'USERS_RESET_ACTIVE';
  constructor(private actions$: Actions, private svc: UserService) {}

  @Effect()
  getAllUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UserEffects.USERS_GET),
    switchMap(() => this.svc.getUsers()),
    map(heroes => new GetAllGamesSuccess(heroes)),
    catchError(err => [new GetAllGamesError(err)])
  );
}
