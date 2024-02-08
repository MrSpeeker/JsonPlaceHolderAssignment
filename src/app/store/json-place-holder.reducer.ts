import { createReducer, on } from '@ngrx/store';

import { IJsonPlaceHolder } from '../models/json-place-holder.interface';
import * as JsonActions from './json-place-holder.action';
import { jsonPlaceHolderEnum } from '../models/json-place-holder.type';
import { R3SelectorScopeMode } from '@angular/compiler';

// Define the interface for your state
export interface JsonPlaceHoldersState {
  json: IJsonPlaceHolder[];
  error: any;
}

// Define the initial state
export const initialState: JsonPlaceHoldersState = {
  json: [],
  error: null,
};

// Create the reducer
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
  on(JsonActions.currentSelectedJsonItem, (state, { currentId }) => ({
    ...state,
    json: state.json.map((json) => ({
      ...json,
      itemType:
        json.id === currentId ? getNextEnum(json.itemType) : jsonPlaceHolderEnum.Title,

    })),
  })),
  on(JsonActions.previousSelectedJsonItem, (state, { previousId }) => ({
    ...state,
    json: state.json.map((json) => ({
      ...json,
      itemType:
        json.id === previousId ? getNextEnum(json.itemType) : jsonPlaceHolderEnum.Title,
        displayValue: setNextValue()
    })),
  }))
);

// Send trough current selected and previous selected
// with this so you dont have to reset all items but instead only reset previous

const setNextValue = (itemType: jsonPlaceHolderEnum, json: IJsonPlaceHolder) => {

}

const getNextEnum = (itemType: jsonPlaceHolderEnum) => {
  if (itemType == jsonPlaceHolderEnum.Body) {
    itemType = jsonPlaceHolderEnum.Title;
  } else {
    itemType++;
  }
};
