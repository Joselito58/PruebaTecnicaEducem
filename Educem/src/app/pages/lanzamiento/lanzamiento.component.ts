import { Component, OnInit } from '@angular/core';
import { LanzamientosService } from '../../services/lanzamientos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent implements OnInit {
  lanzamiento:any={}
  constructor(private LanzamietosS:LanzamientosService, private router:ActivatedRoute) { }
  id:any=''
  async ngOnInit():Promise<void> {
    this.id=this.router.snapshot.paramMap.get('id')
    this.obtenerLanzamiento(this.id)
   
  }

  obtenerLanzamiento(id:string){
    this.LanzamietosS.obtenerLanzamiento(id)
      .subscribe(res=>{
        this.lanzamiento=res
        console.log(this.lanzamiento);
        
      
    })
    
  }
}
