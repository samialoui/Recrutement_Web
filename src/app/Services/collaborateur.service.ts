import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from "src/environements/environment";
@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

 


  constructor(private http: HttpClient) { }


 // all methods bulletin
 getCollaborateurList(): Observable<any[]>{
  return this.http.get<any>(environment.apiUrl+'/Collaborateur/GetAllCollaborateurs');
}

getSpecialiteList(): Observable<any[]>{
  return this.http.get<any>(environment.apiUrl+'/Collaborateur/GetAllSpecialite');
}

getRoleUserList(): Observable<any[]>{
  return this.http.get<any>(environment.apiUrl+'/Collaborateur/GetAllRoleUsers');
}
getVilleList(): Observable<any[]>{
  return this.http.get<any>(environment.apiUrl+'/Collaborateur/GetAllVilles');
}





addCollaborateur(val: any ) {
  console.log(val);
  return this.http.post(environment.apiUrl+"/Collaborateur/AjouterCollaborateur",val);
}
/*GetLastIdCollab(): Observable<any>{
  return this.http.get<any>(this.APIUrl+'/Collaborateur/GetLastIdCollab');

}*/
UploadFile( fileToUpload: any ) {
   
 
  const formData: FormData = new FormData();
  formData.append('Image', fileToUpload, fileToUpload.name);

 

  return this.http.put(environment.apiUrl+"/Collaborateur/UploadFile",formData);
}
}
