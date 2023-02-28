

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from 'src/app/Services/candidat.service';
import { CollaborateurService } from 'src/app/Services/collaborateur.service';


@Component({
  selector: 'app-condidats',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent implements OnInit {
  p : number =1;
  ListCandidat : any=[];
  CandidatListWithoutFilter : any=[];

  constructor(private service:CandidatService, private route:Router){}

  ngOnInit(): void {
    this.refreshListCandidats();
  }
  refreshListCandidats(){
    this.service.getCandidatList().subscribe(data=>{
    this.ListCandidat = data;
    this.CandidatListWithoutFilter = data;

   })
 }
 addClick(){
  this.route.navigate(["AjoutCandidat"]);
 }
}
