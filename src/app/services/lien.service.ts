import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {ILiens} from '../interfaces/ILiens';


@Injectable({
  providedIn: 'root'
})
export class LienService {
  private apiUrl = 'http://localhost:5000/liens';

  constructor(private http:HttpClient) { }

  getLiens():Observable<ILiens>{
    return this.http.get<ILiens>(this.apiUrl);
  }
}
