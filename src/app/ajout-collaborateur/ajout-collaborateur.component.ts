import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollaborateurService } from '../Services/collaborateur.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

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
  Adresse!:string;
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


  IncorrectPassword:boolean=false;
  public isNotValid: boolean = false;

  
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

   selectDateNaissance(valDate:any){
    this.DateNaissance=valDate.target.value;
   }
   selectDateCin(valDate:any){
    this.DateCin=valDate.target.value;
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

      OnSubmit(form:NgForm){

        console.log(this.Cin);
        if (form.valid) {

            

   
              var val = {
                User_Ident_Nom:this.Nom,
                User_Ident_Prenom:this.Prenom,
                User_Nom_Prenom:this.NomPrenom,
                User_Tele:this.Telephone,
                User_Adresse:this.Adresse  !=undefined  ? this.Adresse : "NULL",
                User_Ident_Cin:this.Cin !=undefined  ? this.Cin : "NULL",
                User_Ident_DteCin:this.DateCin !=undefined  ? this.DateCin : "1800-01-01",
                User_Ident_DteNais:this.DateNaissance !=undefined  ? this.DateNaissance : "1800-01-01",
                User_Login:this.Login,
                User_Pwd:this.Password,
                User_PwdConfirm:this.ConfirmPassword,
                User_Email:this.Email,
                User_IdentLieuNais:this.Ville !=""  ? this.Ville : "207",
                User_Role:this.RoleUser,
                User_Specialite:this.Specialite
              };
             
      
        this.service.addCollaborateur(val).subscribe( data =>{
          var User ="";
          if(this.RoleUser =="1")
          User='Admin';
          if(this.RoleUser =="2")
          User='Evaluateur';
          if(this.RoleUser =="4")
          User='Chargé de recrutement';
          var message = "Compte " +User+" créé avec succès";

          Swal.fire('Succés...',message,'success');
        
            this.Nom= "";
            this.Prenom= "";
            this.NomPrenom= "";
            this.Telephone= "";
            this.Cin= "";
            this.DateCin= "";
            this.DateNaissance= "";
            this.Login= "";
            this.Password= "";
            this.ConfirmPassword= "";
            this.Email= "";
            this.Ville="";
            this.RoleUser="";
            this.Specialite="";
            this.Adresse="";
            this.DateNaissance="";
            this.DateCin="";
            this.isNotValid = false;
            if(this.Image !=undefined || this.Image !=""){
            this.UploadFile();
            }
           
          
          } );
        }else{
          this.isNotValid = true;
        }    
}

       UploadFile(){
        this.service.UploadFile(this.fileToUpload).subscribe( data =>{
            this.imageUrl = "/assets/img/img.png";
          });
       } 
      
     }


