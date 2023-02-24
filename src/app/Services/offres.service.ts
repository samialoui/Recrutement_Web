import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffresService {


  readonly APIUrl = "https://localhost:44321/api";

  constructor(private http: HttpClient) { }


 // all methods bulletin
 getOffreList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Offre/GetAllOffres');
}

addOffre(val:any){
  return this.http.post(this.APIUrl+'/Offre/PublierOffre',val);
}
updateOffre(val:any){
  return this.http.put(this.APIUrl+'/Offre/ModifierOffre',val);
}
deleteOffre(val:any){
  return this.http.delete(this.APIUrl+'/Offre/DeleteOffre',val);
}

getPaysList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Offre/GetAllPays');
}
getVilleList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Offre/GetAllVille');
}
getNiveauEtudeList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Offre/GetAllNiveauEtude');
}
getTypeEmploiList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Offre/GetAllTypeEmploi');
}
}
