import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollaborateurService } from '../Services/collaborateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-collaborateur',
  templateUrl: './ajout-collaborateur.component.html',
  styleUrls: ['./ajout-collaborateur.component.css']
})
export class AjoutCollaborateurComponent implements OnInit {
  fileToUpload: any ;
  imageUrl: string = "/assets/img/img.png";
  ListRoleUser : any;
  ListSpecialite : any;
  ListVille :any;

  Nom!:string;
  Prenom!:string;
  Telephone!:string;
  Cin!:string;
  DateCin!:string;
  DateNaissance!:string;
  Login!:string;
  Password!:string;
  ConfirmPassword!:string;
  Email!:string;
  NomPrenom!:string;
  Image!:string;

  Ville:string="";
  RoleUser:string="";
  Specialite:string="";

  NomValid:boolean=false;
  PrenomValid:boolean=false;
  TelephoneValid:boolean=false;
  CinValid:boolean=false;
  DateCinValid:boolean=false;
  DateNaissanceValid:boolean=false;
  LoginValid:boolean=false;
  PasswordValid:boolean=false;
  ConfirmPasswordValid:boolean=false;
  EmailValid:boolean=false;
  NomPrenomValid:boolean=false;
  VilleValid:boolean=false;
  RoleUserValid:boolean=false;
  Specialitevalid:boolean=false;
  IncorrectPassword:boolean=false;
  

  
  constructor( private route: Router, private service:CollaborateurService ){}


  ngOnInit(): void {
    this.getRoleUserList();
    this.getVilleList();
    this. getSpecialiteList();
  }
   selectVille(event:any){
    this.Ville= event.target.value;
   }
   selectRole(event:any){
    this.RoleUser=event.target.value;
   }
   selectSpecialite(event:any){
    this.Specialite=event.target.value;
   }
  getRoleUserList(){
    this.service.getRoleUserList().subscribe(data =>{
      this.ListRoleUser = data;
    })
  }
  getSpecialiteList(){
    this.service.getSpecialiteList().subscribe(data =>{
      this.ListSpecialite = data;
    })
  }
  getVilleList(){
    this.service.getVilleList().subscribe(data =>{
      this.ListVille = data;
    })
  }

      addClick(){
        this.route.navigate(["AjoutCollaborateur"]);
       }


      retour(){
        this.route.navigate(["Collaborateurs"]);
       }

      handleFileInput(file: FileList) {
        this.fileToUpload = file.item(0);
    
        //Show image preview
        var reader = new FileReader();
        reader.onload = (event:any) => {
          this.imageUrl = event.target.result;
        }
        reader.readAsDataURL(this.fileToUpload);
      }

      OnSubmit(Nom:any,Prenom:any,NomPrenom:any,Telephone:any,Cin:any,DateCin:any,DateNaissance:any,Image:any,Login:any,Password:any,ConfirmPassword:any,Email:any){
        
      if(Nom.value ==undefined || Nom.value ==""){
       this.NomValid = true;
       }else{
        this.NomValid = false;
       }
       if(Prenom.value ==undefined || Prenom.value ==""){
        this.PrenomValid = true;
        }else{
         this.PrenomValid = false;
        }
        if(NomPrenom.value ==undefined || NomPrenom.value ==""){
          this.NomPrenomValid = true;
          }else{
           this.NomPrenomValid = false;
          }
        if(Telephone.value ==undefined || Telephone.value ==""){
         this.TelephoneValid = true;
         }else{
         this.TelephoneValid = false;
          }
        if(Cin.value ==undefined || Cin.value ==""){
          this.CinValid = true;
          }else{
           this.CinValid = false;
          }
          if(DateCin.value ==undefined || DateCin.value =="2014-11-01"){
            this.DateCinValid = true;
           }else{
           this.DateCinValid = false;
          }

          if(DateNaissance.value ==undefined || DateNaissance.value =="2014-11-01"){
            this.DateNaissanceValid = true;
            }else{
             this.DateNaissanceValid = false;
            }
            if(Login.value ==undefined || Login.value ==""){
             this.LoginValid = true;
             }else{
              this.LoginValid = false;
             }
             if(Password.value ==undefined || Password.value ==""){
               this.PasswordValid = true;
               }else{
                this.PasswordValid = false;
               }
             if(ConfirmPassword.value ==undefined || ConfirmPassword.value ==""){
              this.ConfirmPasswordValid = true;
              }else{
              this.ConfirmPasswordValid = false;
               }
               if(ConfirmPassword.value != "" && ConfirmPassword.value != Password.value ){
                this.IncorrectPassword = true;
                }else{
                this.IncorrectPassword = false;
                 }

             if(Email.value ==undefined || Email.value ==""){
               this.EmailValid = true;
               }else{
                this.EmailValid = false;
               }
               if(this.Ville ==undefined || this.Ville ==""){
                 this.VilleValid = true;
                }else{
                this.VilleValid = false;
               }
               if(this.RoleUser ==undefined || this.RoleUser ==""){
                this.RoleUserValid = true;
               }else{
               this.RoleUserValid = false;
              }
              if(this.Specialite ==undefined || this.Specialite ==""){
                this.Specialitevalid = true;
               }else{
               this.Specialitevalid = false;
              }
              
              this.fileToUpload = this.fileToUpload != undefined ? this.fileToUpload : "C:/E-Recrutement/src/assets/images/users/no-image.jpg";
        // ,Prenom.value,Note.value,Descript.value,Pays.value,this.fileToUpload
        this.service.addCollaborateur(Nom.value,Prenom.value,NomPrenom.value,Telephone.value,Cin.value,DateCin.value,DateNaissance.value,Login.value,Password.value,ConfirmPassword.value,Email.value,this.Ville,this.RoleUser,this.Specialite,this.fileToUpload).subscribe( data =>{
          Swal.fire('Succés...','Compte collaborateur créé avec succès','success');
            Nom.value;
            Prenom.value;
            NomPrenom.value;
            Telephone.value;
            Cin.value;
            DateCin.value;
            DateNaissance.value;
            Image.value;
            Login.value;
            Password.value;
            ConfirmPassword.value;
            Email.value;
            this.imageUrl = "/assets/img/img.png";
          }
        );
       }

}
