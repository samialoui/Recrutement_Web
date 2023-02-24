import { Component, OnInit } from '@angular/core';
import { CollaborateurService } from '../Services/collaborateur.service';

@Component({
  selector: 'app-condidats',
  templateUrl: './condidats.component.html',
  styleUrls: ['./condidats.component.css']
})
export class CondidatsComponent implements OnInit {
  p : number =1;
  ListCollaborateur : any=[];
  CollabListWithoutFilter : any=[];

  constructor(private service:CollaborateurService){}

  ngOnInit(): void {
    this.refreshListCandidats();
  }
  refreshListCandidats(){
    this.service.getCollaborateurList().subscribe(data=>{
    this.ListCollaborateur = data;
    this.CollabListWithoutFilter = data;

   })
 }
}
