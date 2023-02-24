import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';
import * as alertify from 'alertifyjs';
import { OffresService } from 'src/app/Services/offres.service';
import Swal from 'sweetalert2';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-ajout-modif-offre',
  templateUrl: './ajout-modif-offre.component.html',
  styleUrls: ['./ajout-modif-offre.component.css']
})
export class AjoutModifOffreComponent implements OnInit {

  
  constructor(private service: OffresService) {}
  @Input() offre:any;
  @Output() public EstActive = new EventEmitter();

  IdOffre!:string;
  OffreDesignation!:string;
  LieuOffre!:string;
  PostesVancants!:string;
  TypeEmploi!:string;
  NbAnsExp!:string;
  NiveauEtude!:string;
  ExigenceEmploi!:string;
  DescriptionEmploi!:string;
  DateExpiration:any;
  DateModif:any;

  ListNiveauEtude:any;
  ListVille :any;
  ListTypeEmploi :any;

 
  
  ngOnInit(): void {
    this.IdOffre= this.offre.idOffre;
    this.OffreDesignation=this.offre.offreDesignation;
    this.LieuOffre=this.offre.lieuOffre;
    this.PostesVancants=this.offre.postesVancants;
    this.TypeEmploi=this.offre.typeEmploi;

    this.NbAnsExp=this.offre.nbAnsExp;
    this.NiveauEtude=this.offre.niveauEtude;
    this.ExigenceEmploi=this.offre.exigenceEmploi;
    this.DescriptionEmploi=this.offre.descriptionEmploi;
    //this.DateExpiration= this.datePiP.transform(new Date(this.offre.dateExpiration),'yyyy-MM-dd');
    this.DateExpiration= new Date(this.offre.dateExpiration);
    this.DateModif= new Date(this.offre.dateModif);
    console.log(this.DateExpiration);

    this.getAllNiveauEtude();
    this.getAllVille();
    this.getAllTypeEmploi();
  }

  addOffre(){

    var Valid = this.verifOffre();
    if(Valid){
    var val = {
      IdOffre:this.IdOffre,
      OffreDesignation:this.OffreDesignation,
      LieuOffre:this.LieuOffre,
      PostesVancants:this.PostesVancants,
      TypeEmploi:this.TypeEmploi,
      NbAnsExp:this.NbAnsExp,
      NiveauEtude:this.NiveauEtude,
      ExigenceEmploi:this.ExigenceEmploi,
       DescriptionEmploi:this.DescriptionEmploi,
      DateExpiration:this.DateExpiration,
      //DateModif:this.DateModif
    };
    this.service.addOffre(val).subscribe(res =>{
      Swal.fire('Succés...','Offre Ajoutée avec succés','success');
    //alertify.success("Offre ajouté avec succée");
    this.EstActive.emit('true');
     
    });
  }
  }

getAllNiveauEtude(){
  this.service.getNiveauEtudeList().subscribe(data=>{
    this.ListNiveauEtude = data;
  })
}
getAllVille(){
  this.service.getVilleList().subscribe(data=>{
    this.ListVille = data;
  })
}
getAllTypeEmploi(){
  this.service.getTypeEmploiList().subscribe(data=>{
    this.ListTypeEmploi = data;
  })
}

  selectVille (event: any) {
    //update the ui
    this.LieuOffre = event.target.value;
  }
  selectNiveauScolaire (event: any) {
    //update the ui
    this.NiveauEtude = event.target.value;
  }
selectTypeEmploi(event: any){
  this.TypeEmploi= event.target.value;
}

  updateOffre(){
    var val = {
      IdOffre:this.IdOffre,
      OffreDesignation:this.OffreDesignation,
      LieuOffre:this.LieuOffre,
      PostesVancants:this.PostesVancants,
      TypeEmploi:this.TypeEmploi,
      NbAnsExp:this.NbAnsExp,
      NiveauEtude:this.NiveauEtude,
      ExigenceEmploi:this.ExigenceEmploi,
       DescriptionEmploi:this.DescriptionEmploi,
      DateExpiration:this.DateExpiration
    };
    this.service.updateOffre(val).subscribe(res=>{
      //alertify.success("Offre modifié avec succée");
      Swal.fire('Succés...','Offre Modifiée avec succés','success');
    });
  }

verifOffre(){
            
    var valid= true;
    var MESSAGE= "Veuillez saisir les champs obligatoirs : \n";



    if ( this.OffreDesignation == undefined || this.OffreDesignation == "" ) 
    {
        MESSAGE+= "Offre \n";
        valid= false;
}
if ( this.LieuOffre == undefined || this.LieuOffre == "" ) 
    {
        MESSAGE+= "Lieu Offre \n";
        valid= false;
}

if ( this.PostesVancants == undefined || this.PostesVancants == "" ) 
    {
        MESSAGE+= "Postes Vancants \n";
        valid= false;
}

if ( this.TypeEmploi == undefined || this.TypeEmploi == "" ) 
    {
        MESSAGE+= "Type Emploi \n";
        valid= false;
}
if ( this.NbAnsExp == undefined || this.NbAnsExp == "" ) 
    {
        MESSAGE+= "Nombre ans expériences \n";
        valid= false;
}
if ( this.NiveauEtude == undefined || this.NiveauEtude == "" ) 
    {
        MESSAGE+= "Niveau etude \n";
        valid= false;
}

if ( this.ExigenceEmploi == undefined || this.ExigenceEmploi == "" ) 
    {
        MESSAGE+= "Exigence emploi \n";
        valid= false;
}
if ( this.DescriptionEmploi == undefined || this.DescriptionEmploi == "" ) 
    {
        MESSAGE+= "Description emploi \n";
        valid= false;
}
if ( this.DateExpiration == undefined || this.DateExpiration == "" ) 
    {
        MESSAGE+= "Datebexpiration \n";
        valid= false;
}
if(valid == false)
{
  Swal.fire("Erreur!", MESSAGE, "error");

}

    return valid;
}   
}
