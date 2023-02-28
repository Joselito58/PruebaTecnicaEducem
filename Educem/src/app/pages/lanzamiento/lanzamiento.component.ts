import { Component, OnInit } from '@angular/core';
import { LanzamientosService } from '../../services/lanzamientos.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent implements OnInit {
  isLoaded!:boolean
  lanzamiento:any={}
  constructor(private LanzamietosS:LanzamientosService, private router:ActivatedRoute,    private Sanitizer: DomSanitizer
    ) { }
  id:any=''
  async ngOnInit():Promise<void> {
    this.id=this.router.snapshot.paramMap.get('id')
    this.obtenerLanzamiento(this.id)

  }

  obtenerLanzamiento(id:string){
    this.LanzamietosS.obtenerLanzamiento(id)
      .subscribe(res=>{
        this.lanzamiento=res
        this.isLoadedF()

      
    })
    
  }

  isLoadedF(){
    this.isLoaded=true
    console.log(this.lanzamiento);
    
  }


  getVideoIframe(url:string) {
    var video, results;
    console.log(url);
    
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this.Sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

}
