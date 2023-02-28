import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from "src/environements/environment";

@Injectable({
  providedIn: 'root'
})
export class OffresService {



  constructor(private http: HttpClient) { }


 // all methods bulletin
 getOffreList(): Observable<any[]>{
  return this.http.get<any>(environment.apiUrl+'/Offre/GetAllOffres');
}

addOffre(val:any){
  return this.http.post(environment.apiUrl+'/Offre/PublierOffre',val);
}
updateOffre(val:any){
  return this.http.put(environment.apiUrl+'/Offre/ModifierOffre',val);
}
deleteOffre(val:any){
  return this.http.delete(environment.apiUrl+'/Offre/DeleteOffre',val);
}

getPaysList(): Observable<any[]>{
  return this.http.get<any>(environment.apiUrl+'/Offre/GetAllPays');
}
getVilleList(): Observable<any[]>{
  return this.http.get<any>(environment.apiUrl+'/Offre/GetAllVille');
}
getNiveauEtudeList(): Observable<any[]>{
  return this.http.get<any>(environment.apiUrl+'/Offre/GetAllNiveauEtude');
}
getTypeEmploiList(): Observable<any[]>{
  return this.http.get<any>(environment.apiUrl+'/Offre/GetAllTypeEmploi');
}
}
