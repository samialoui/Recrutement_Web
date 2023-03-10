import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from "src/environements/environment";

@Injectable({
  providedIn: 'root'
})
export class RecrutementService {



  constructor(private http: HttpClient) { }


  // all List Recrutements
  getAllRecrutements(): Observable<any[]>{
    return this.http.get<any>(environment.apiUrl+'/Recrutement/GetAllRecrutements');
  }
}
