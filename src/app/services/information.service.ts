import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {IInformations} from '../interfaces/IInformations';


@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private apiUrl = 'http://localhost:5000/informations';

  constructor(private http:HttpClient) { }

  getInformations():Observable<IInformations>{
    return this.http.get<IInformations>(this.apiUrl);
  }
}
