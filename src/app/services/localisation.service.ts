import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {ILocalisation} from '../interfaces/ILocalisation';



@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  private apiUrl = 'http://localhost:5000/localisation';

  constructor(private http:HttpClient) { }

  getInformations():Observable<ILocalisation>{
    return this.http.get<ILocalisation>(this.apiUrl);
  }
}
