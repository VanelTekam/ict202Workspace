import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {ICompetence} from '../interfaces/ICompetence';



@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  private apiUrl = 'http://localhost:5000/competences';

  constructor(private http:HttpClient) { }

  getCompetences():Observable<ICompetence[]>{
    return this.http.get<ICompetence[]>(this.apiUrl);
  }

  deleteCompetence(c:ICompetence):Observable<ICompetence>{
    const url = `
    ${this.apiUrl}/${c.id}
    `;
    return this.http.delete<ICompetence>(url);
  }

  updateCompetenceReminder(c:ICompetence):Observable<ICompetence>{
    const url = `${this.apiUrl}/${c.id}`;
    return this.http.put<ICompetence>(url,c);
  }

  addCompetence(c:ICompetence):Observable<ICompetence>{
    return this.http.post<ICompetence>(this.apiUrl,c)
  }

}
