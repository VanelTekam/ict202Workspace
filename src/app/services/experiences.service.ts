import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IExperience} from '../interfaces/IExperience';


@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  
  private apiUrl = 'http://localhost:5000/experiences';

  constructor(private http:HttpClient) { }

  getExperiences():Observable<IExperience[]>{
    return this.http.get<IExperience[]>(this.apiUrl);
  }

  deleteExperience(e:IExperience):Observable<IExperience>{
    const url = `
    ${this.apiUrl}/${e.id}
    `;
    return this.http.delete<IExperience>(url);
  }

  updateExperienceReminder(e:IExperience):Observable<IExperience>{
    const url = `${this.apiUrl}/${e.id}`;
    return this.http.put<IExperience>(url,e);
  }

  addExperience(e:IExperience):Observable<IExperience>{
    return this.http.post<IExperience>(this.apiUrl,e)
  }
}
