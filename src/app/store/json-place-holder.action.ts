import { createAction, props } from '@ngrx/store';

import { IJsonPlaceHolder } from '../models/json-place-holder.interface';

export const loadJsonPlaceHolders = createAction(
  '[Json Place Holder] Load Json'
);
export const loadJsonPlaceHoldersSuccess = createAction(
  '[Json Place Holder] Load Json Success',
  props<{ jsonItemsWithSelection: IJsonPlaceHolder[] }>()
);
export const loadJsonPlaceHoldersFailure = createAction(
  '[Json Place Holder] Load Json Failure',
  props<{ error: string }>()
);
export const updateItemState = createAction(
  '[Json Place Holder] Current Selected Json Item',
  props<{ currentId: number }>()
);
