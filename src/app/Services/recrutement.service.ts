import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecrutementService {

  readonly APIUrl = "https://localhost:44321/api";

  constructor(private http: HttpClient) { }


  // all List Recrutements
  getAllRecrutements(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Recrutement/GetAllRecrutements');
  }
}
