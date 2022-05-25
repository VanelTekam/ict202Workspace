import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {IFormation} from '../interfaces/IFormation';



@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  private apiUrl = 'http://localhost:5000/formations';

  constructor(private http:HttpClient) { }

  getFormations():Observable<IFormation[]>{
    return this.http.get<IFormation[]>(this.apiUrl);
  }

  deleteFormation(f:IFormation):Observable<IFormation>{
    const url = `
    ${this.apiUrl}/${f.id}
    `;
    return this.http.delete<IFormation>(url);
  }

  updateFormationReminder(f:IFormation):Observable<IFormation>{
    const url = `${this.apiUrl}/${f.id}`;
    return this.http.put<IFormation>(url,f);
  }

  addFormation(f:IFormation):Observable<IFormation>{
    return this.http.post<IFormation>(this.apiUrl,f)
  }
}
