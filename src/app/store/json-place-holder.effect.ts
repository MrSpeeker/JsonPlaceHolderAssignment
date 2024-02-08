import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';

import { IJsonPlaceHolder } from '../models/json-place-holder.interface';
import { JsonPlaceHolderService } from '../services/json-place-holder.service';
import * as JsonActions from './json-place-holder.action';
import { jsonPlaceHolderEnum } from '../models/json-place-holder.type';

@Injectable()
export class JsonPlaceHolderEffects {
  loadJsonPlaceHolder$ = createEffect(() =>
    this._actions$.pipe(
      ofType(JsonActions.loadJsonPlaceHolders),
      exhaustMap(() =>
        this._jsonPlaceHolderService
          .getHundredRequests()
          .pipe(
            map((jsonItems: IJsonPlaceHolder[]) =>
              {
                const jsonItemsWithSelection: IJsonPlaceHolder[] = jsonItems.map(item => ({ ...item, itemType: jsonPlaceHolderEnum.Title })) ;
                return JsonActions.loadJsonPlaceHoldersSuccess({ jsonItemsWithSelection })
              }
            )
          )
      ),
      catchError((error: any) =>
        of(JsonActions.loadJsonPlaceHoldersFailure({ error: error.message }))
      )
    )
  );

  constructor(
    private _actions$: Actions,
    private _jsonPlaceHolderService: JsonPlaceHolderService
  ) {}
}
