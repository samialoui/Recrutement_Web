import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from 'src/app/Services/candidat.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ajout-modif-candidat',
  templateUrl: './ajout-modif-candidat.component.html',
  styleUrls: ['./ajout-modif-candidat.component.css']
})
export class AjoutModifCandidatComponent implements OnInit {
  fileToUpload: any ;
  LettreMotivationToUpload:any;
  CVToUpload:any;
  imageUrl: string = "/assets/img/img.png";
  ListRoleUser : any;
  ListSpecialite : any;
  ListVille :any;
  Nom!:string;
  NBExperience!:string;
  Prenom!:string;
  Telephone!:string;
  Adresse!:string;
  Cin!:string;
  DateNaissance!:string;
  Email!:string;
  NomPrenom!:string;
  Image!:string;
  CV!:string;
  LettreMotivation!:string;
  Ville:string="";
  NiveauScolaire:string="";
  Specialite!:string;


  public isNotValid: boolean = false;

  ListNiveauEtude:any;

  constructor(private service:CandidatService, private route:Router){}

  ngOnInit(): void {
    this.getVilleList();
    this.getAllNiveauEtude();
  }
  selectVille(event:any){
    this.Ville= event.target.value;
   }

   selectNiveauScolaire(event:any){
    this.NiveauScolaire= event.target.value;
   }

   selectDateNaissance(valDate:any){
    this.DateNaissance=valDate.target.value;
   }

  getAllNiveauEtude(){
    this.service.getNiveauEtudeList().subscribe(data=>{
      this.ListNiveauEtude = data;
    })
  }
  getVilleList(){
    this.service.getVilleList().subscribe(data =>{
      this.ListVille = data;
    })
  }

  retour(){
    this.route.navigate(["Candidats"]);
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

  handleCVInput(file: FileList) {
    this.CVToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      //this.cvUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  handleLettreMotivationInput(file: FileList) {
    this.LettreMotivationToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      //this.lettreMotivationUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

   OnSubmit(form:NgForm){

    console.log(this.Adresse);
    if (form.valid) {

        
          var val = {
            Candidat_Nom:this.Nom,
            Candidat_Prenom:this.Prenom,
            Candidat_Nom_Prenom:this.NomPrenom,
            Candidat_Tel:this.Telephone,
            Candidat_Adressse:this.Adresse,
            Candidat_NationaliteId:this.Cin !=undefined  ? this.Cin : "NULL",
           
            Candidat_DateNais:this.DateNaissance !=undefined  ? this.DateNaissance : "1800-01-01",
            Candidat_NiveauScolaireId:this.NiveauScolaire,
            Candidat_NbExperience:this.NBExperience,
            Candidat_Mail:this.Email,
            Candidat_IdentLieuNais:this.Ville !=""  ? this.Ville : "207",
            FormationCandidat_Specialite:this.Specialite
          };
         
  
    this.service.addCandidat(val).subscribe( data =>{
    
    

      Swal.fire('Succés...','Candidat créé avec succès','success');
    
        this.Nom= "";
        this.Prenom= "";
        this.NomPrenom= "";
        this.Telephone= "";
        this.Cin= "";
        this.DateNaissance= "";
        this.Email= "";
        this.Ville="";
        this.Specialite="";
        this.Adresse="";
        this.NBExperience="";
        this.NiveauScolaire="";
        this.isNotValid = false;
        if(this.Image !=undefined || this.Image !=""){
        this.UploadFile();
        }
        if(this.CV !=undefined || this.CV !=""){
          this.UploadCV();
          }
          if(this.LettreMotivation !=undefined || this.LettreMotivation !=""){
            this.UploadLettreMotivation();
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

   UploadCV(){
    this.service.UploadCV(this.fileToUpload).subscribe( data =>{
      });
   } 

   UploadLettreMotivation(){
    this.service.UploadLettreMotivation(this.fileToUpload).subscribe( data =>{
      });
   } 


}
