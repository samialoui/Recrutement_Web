import { Component,OnInit } from '@angular/core';
import { OffresService } from 'src/app/Services/offres.service';

@Component({
  selector: 'app-affich-offre',
  templateUrl: './affich-offre.component.html',
  styleUrls: ['./affich-offre.component.css']
})
export class AffichOffreComponent implements OnInit {
  p : number =1;
 
  constructor( private service: OffresService) { }
  OffreList: any=[];
   //Arr : Array<any>;
  OffreListRecherche: any=[];
  VisiteList: any=[];
  Modaltitle!:string;
  ActivateAddEditOffreComp: boolean=false;
  ActivateAddDetailOffreComp: boolean=false;
  offre:any;
  det:any;
  Active = '';
  
  /*IdBulletinFilter:string="";
  MatriculeFilter:string="";
  IdentiteFilter:string="";
 
  DateSoinFilter:string="";
  IdBordereauFilter:string="";
  BoFilter:string="";
  TotBulletinFilter:string="";*/

  RechercheFilter:string="";
  OffreListWithoutFilter:any=[];
 // VisiteListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshOffreList();
    console.log(this.Active);
   //this.ActivateAddEditOffreComp = (this.Active != "true");
  }
  

  refreshOffreList(){
    this.service.getOffreList().subscribe(data=>{
      this.OffreList=data;
      this.OffreListWithoutFilter=data;
    });
  }
 /* refreshVistList(){
    this.service.getVisList().subscribe(data=>{
      this.BulletinList=data;
      this.BulletinListWithoutFilter=data;
    });
  }*/
  addClick(){
    this.offre={
      IdOffre:0,
      OffreDesignation:" ",
      LieuOffre:" ",
      PostesVancants:" ",
      TypeEmploi:" ",
      NbAnsExp:" ",
      NiveauEtude:" ",
      ExigenceEmploi:" ",
      DescriptionEmploi:" ",
      DateExpiration:" ",
      DateModif:""
      

    }
    this.Modaltitle="Ajouter Offre";
    this.ActivateAddEditOffreComp=true;
  }

  editClick(item: any){
    this.offre=item;
    this.Modaltitle="Modifier Offre";
    this.ActivateAddEditOffreComp=true;
  }

  detailClick(item: any){
    this.det=item;
    this.Modaltitle="Detail Offre";
    this.ActivateAddDetailOffreComp=true;
  }

  closeClick(){
    this.ActivateAddEditOffreComp=false;
    this.refreshOffreList();
  }

  deleteClick(item:any){
    if(confirm('Tu es sure??')){
      this.service.deleteOffre(item.IdOffre).subscribe(data=>{
        alert(data.toString());
        this.refreshOffreList()
      });
    }
  }





filterFn(recherche:any){
  var RechercheFilter=recherche.value;

 
  this.OffreList = this.OffreListWithoutFilter.filter(
  function (fl:any){

   if ( fl.lieuOffre.toString().toLowerCase().includes(
    RechercheFilter.toString().trim().toLowerCase()) == true ){
        return fl.lieuOffre.toString().toLowerCase().includes(
          RechercheFilter.toString().trim().toLowerCase());
      }
     
        else if( fl.typeEmploi_Designation.toString().toLowerCase().includes(
          RechercheFilter.toString().trim().toLowerCase()) == true ){
            return fl.typeEmploi_Designation.toString().toLowerCase().includes(
              RechercheFilter.toString().trim().toLowerCase());
          }

          else if( fl.offreDesignation.toString().toLowerCase().includes(
            RechercheFilter.toString().trim().toLowerCase()) == true ){
              return fl.offreDesignation.toString().toLowerCase().includes(
                RechercheFilter.toString().trim().toLowerCase());
            }
                    
  });

    this.service.getOffreList().subscribe(data=>{
    this.OffreListWithoutFilter=data;
  });

}





}
