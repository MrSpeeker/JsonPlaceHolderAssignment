import { createReducer, on } from '@ngrx/store';

import { IJsonPlaceHolder } from '../models/json-place-holder.interface';
import { jsonPlaceHolderEnum } from '../models/json-place-holder.type';
import * as JsonActions from './json-place-holder.action';

export interface JsonPlaceHoldersState {
  json: IJsonPlaceHolder[];
  error: any;
}

export const initialState: JsonPlaceHoldersState = {
  json: [],
  error: null,
};

export const jsonPlaceHolderReducer = createReducer(
  initialState,
  on(JsonActions.loadJsonPlaceHolders, (state) => ({ ...state })),
  on(
    JsonActions.loadJsonPlaceHoldersSuccess,
    (state, { jsonItemsWithSelection }) => ({
      ...state,
      json: [...state.json, ...jsonItemsWithSelection],
    })
  ),
  on(JsonActions.loadJsonPlaceHoldersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(JsonActions.updateItemState, (state, { currentId }) => ({
    ...state,
    json: state.json.map((json) => ({
      ...json,
      itemType:
        json.id === currentId
          ? getNextEnum(json.itemType)
          : jsonPlaceHolderEnum.Title,
    })),
  }))
);

const getNextEnum = (itemType: jsonPlaceHolderEnum) => {
  if (itemType == jsonPlaceHolderEnum.Body) {
    return jsonPlaceHolderEnum.Title;
  } else {
    return ++itemType;
  }
};
