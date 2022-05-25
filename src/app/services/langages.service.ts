import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ILangage} from '../interfaces/ILangage';


@Injectable({
  providedIn: 'root'
})
export class LangagesService {

  private apiUrl = 'http://localhost:5000/langages';

  constructor(private http:HttpClient) { }

  getLangages():Observable<ILangage[]>{
    return this.http.get<ILangage[]>(this.apiUrl);
  }

  deleteLangage(e:ILangage):Observable<ILangage>{
    const url = `
    ${this.apiUrl}/${e.id}
    `;
    return this.http.delete<ILangage>(url);
  }

  updateLangageReminder(e:ILangage):Observable<ILangage>{
    const url = `${this.apiUrl}/${e.id}`;
    return this.http.put<ILangage>(url,e);
  }

  addLangage(e:ILangage):Observable<ILangage>{
    return this.http.post<ILangage>(this.apiUrl,e)
  }
}
