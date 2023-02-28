import { Component, OnInit } from '@angular/core';
import { LanzamientosService } from '../../services/lanzamientos.service';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {
  LanzamientosRender!:any
  date:any=''
  isLoaded!:boolean

  constructor( private LanzamietosS:LanzamientosService) { }

  async ngOnInit():Promise<void> {
     this.date=new Date()
        
    this.obtenerLanzamientos()
    this.isLoaded=true

  }
  obtenerLanzamientos(){
    this.LanzamietosS.obtenerLanzamientos().subscribe(
      res=>{
        console.log(res);
        this.LanzamientosRender=res

      }
    )
  }

  masInfo(){}
}
