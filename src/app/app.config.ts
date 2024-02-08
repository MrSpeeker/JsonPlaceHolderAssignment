import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { JsonPlaceHolderEffects } from './store/json-place-holder.effect';
import { ActionReducerMap, provideStore } from '@ngrx/store';
import { jsonPlaceHolderReducer } from './store/json-place-holder.reducer';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

const reducers: ActionReducerMap<any> = {
  jsonPlaceHolder: jsonPlaceHolderReducer,
};

export const providers = [
  provideRouter(appRoutes),
  provideEffects([JsonPlaceHolderEffects]),
  provideStore(reducers),
  provideStoreDevtools({ maxAge: 25, logOnly: false }),
  importProvidersFrom([HttpClientModule]),
];
