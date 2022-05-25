import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {IInteret} from '../interfaces/IInteret';


@Injectable({
  providedIn: 'root'
})
export class InteretsService {


  private apiUrl = 'http://localhost:5000/interets';

  constructor(private http:HttpClient) { }

  getInterets():Observable<IInteret[]>{
    return this.http.get<IInteret[]>(this.apiUrl);
  }

  deleteInteret(i:IInteret):Observable<IInteret>{
    const url = `
    ${this.apiUrl}/${i.id}
    `;
    return this.http.delete<IInteret>(url);
  }

  updateInteretReminder(i:IInteret):Observable<IInteret>{
    const url = `${this.apiUrl}/${i.id}`;
    return this.http.put<IInteret>(url,i);
  }
  
  addInteret(i:IInteret):Observable<IInteret>{
    return this.http.post<IInteret>(this.apiUrl,i)
  }
}
