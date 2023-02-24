import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollaborateurService } from '../Services/collaborateur.service';

@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css']
})

export class CollaborateursComponent implements OnInit {

  p : number =1;
  ListCollaborateur : any=[];
  CollabListWithoutFilter : any=[];
  RechercheFilter:string="";
  collab:any;
  det:any;

  constructor( private route: Router, private service : CollaborateurService){}
  ngOnInit(): void {
    this.refreshListCollaborateurs();
  }
  
  addClick(){
  this.route.navigate(["AjoutCollaborateur"]);
  }
  editClick(item:any){
   this.collab=item;
  }

  refreshListCollaborateurs(){
     this.service.getCollaborateurList().subscribe(data=>{
     this.ListCollaborateur = data;
     this.CollabListWithoutFilter = data;

    })
  }

  filterFn(cherche:any){
    var rechercheFilter=cherche.value;
  
   
    this.ListCollaborateur = this.CollabListWithoutFilter.filter(function (fl:any){
      return fl.user_Nom_Prenom.toString().toLowerCase().includes(
        rechercheFilter.toString().trim().toLowerCase());
      })
      }

}
