import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  readonly APIUrl = "https://localhost:44321/api";


  constructor(private http: HttpClient) { }


 // all methods bulletin
 getCollaborateurList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Collaborateur/GetAllCollaborateurs');
}

getSpecialiteList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Collaborateur/GetAllSpecialite');
}

getRoleUserList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Collaborateur/GetAllRoleUsers');
}
getVilleList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Collaborateur/GetAllVilles');
}



addCollaborateur(Nom:any,Prenom:any,NomPrenom:any,Telephone:any,Cin:any,DateCin:any,DateNaissance:any,Login:any,Password:any,ConfirmPassword:any,Email:any,Ville : any,RoleUser: any,Specialite: any, fileToUpload: any ) {
   
    
  const formData: FormData = new FormData();
  formData.append('Image', fileToUpload, fileToUpload.name);
  formData.append('Nom', Nom);
  formData.append('Prenom', Prenom);
  formData.append('NomPrenom', NomPrenom);
  formData.append('Telephone', Telephone);
  formData.append('Cin', Cin);
  formData.append('DateCin', DateCin);
  formData.append('DateNaissance', DateNaissance);
  formData.append('Login', Login);
  formData.append('Password', Password);
  formData.append('ConfirmPassword', ConfirmPassword);
  formData.append('Email', Email);
  formData.append('Ville', Ville);
  formData.append('RoleUser', RoleUser);
  formData.append('Specialite', Specialite);

  return this.http.post(this.APIUrl+"/Collaborateur/AjouterCollaborateur", formData);
}
}
