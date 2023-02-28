import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanzamientosService {
  url='https://api.spacexdata.com/v4/launches'
  constructor(private http:HttpClient) { }


  obtenerLanzamientos(){
    return this.http.get(this.url)
  }

  obtenerLanzamiento(id:string){
    return this.http.get(`${this.url}/${id}`)
  }


}
