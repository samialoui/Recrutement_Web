import { Component,OnInit } from '@angular/core';
import { RecrutementService } from '../Services/recrutement.service';

@Component({
  selector: 'app-mes-recrutements',
  templateUrl: './mes-recrutements.component.html',
  styleUrls: ['./mes-recrutements.component.css']
})

export class MesRecrutementsComponent implements OnInit {

  
  constructor( private service: RecrutementService){}

  listRecrutements : any=[];

  ngOnInit(): void {
    this.getAllRecrutement();
    console.log(this.getAllRecrutement);
  }

  getAllRecrutement(){
    this.service.getAllRecrutements().subscribe(data =>{
      this.listRecrutements = data;
      
    })
  }
}
