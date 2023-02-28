import { Component, OnInit } from '@angular/core';
import { CohetesService } from 'src/app/services/cohetes.service';

@Component({
  selector: 'app-cohetes',
  templateUrl: './cohetes.component.html',
  styleUrls: ['./cohetes.component.css']
})
export class CohetesComponent implements OnInit {
  cohetesRender!:any
  isLoaded!:boolean

  constructor(private cohetesS:CohetesService) { }

  async ngOnInit():Promise <void> {
    this.obtenerCohetes()
    this.isLoaded=true
   
  }

   obtenerCohetes(){
    this.cohetesS.obtenerCohetes().subscribe(
      (res:any)=>{
      console.log(res);
      this.cohetesRender=[...res]
      
    },err=>{
      console.log(err);
      
    })
  }

}
