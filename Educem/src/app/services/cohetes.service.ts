import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CohetesService {

  url='https://api.spacexdata.com/v4/rockets'

  constructor(private http:HttpClient) { }

  obtenerCohetes(){
    return this.http.get(this.url)
  }

}
