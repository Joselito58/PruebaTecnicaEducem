import { Component, OnInit } from '@angular/core';
import { LanzamientosService } from '../../services/lanzamientos.service';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {
  LanzamientosRender!:any
  constructor( private LanzamietosS:LanzamientosService) { }

  async ngOnInit():Promise<void> {
    this.obtenerLanzamientos()
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
