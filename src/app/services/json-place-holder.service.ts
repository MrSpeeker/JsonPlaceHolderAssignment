import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IJsonPlaceHolder } from '../models/json-place-holder.interface';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceHolderService {
  constructor(private _http: HttpClient) {}

  public getHundredRequests(): Observable<IJsonPlaceHolder[]> {
    const url = `${environment.apiUrl}/posts`;
    return this._http.get<IJsonPlaceHolder[]>(url);
  }
}
