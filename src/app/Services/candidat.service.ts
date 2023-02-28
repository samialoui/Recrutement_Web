import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from "src/environements/environment";

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  constructor(private http: HttpClient) { }

  

  getCandidatList(): Observable<any[]>{
    return this.http.get<any>(environment.apiUrl+'/Candidat/GetAllCandidats');
  }
  

  getNiveauEtudeList(): Observable<any[]>{
    return this.http.get<any>(environment.apiUrl+'/Candidat/GetAllNiveauScolaire');
  }

  getVilleList(): Observable<any[]>{
    return this.http.get<any>(environment.apiUrl+'/Candidat/GetAllVilles');
  }
  
  addCandidat(val: any ) {
    console.log(val);
    return this.http.post(environment.apiUrl+"/Candidat/AjouterCandidat",val);
  }
 
  UploadFile( fileToUpload: any ) {
     
   
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
  
   
  
    return this.http.put(environment.apiUrl+"/Candidat/UploadFile/Image",formData);
  }

  UploadCV( fileToUpload: any ) {
     
   
    const formData: FormData = new FormData();
    formData.append('CV', fileToUpload, fileToUpload.name);
  
   
  
    return this.http.put(environment.apiUrl+"/Candidat/UploadFile/CV",formData);
  }

  UploadLettreMotivation( fileToUpload: any ) {
     
   
    const formData: FormData = new FormData();
    formData.append('LettreMotivation', fileToUpload, fileToUpload.name);
  
   
  
    return this.http.put(environment.apiUrl+"/Candidat/UploadFile/LettreMotivation",formData);
  }
}
