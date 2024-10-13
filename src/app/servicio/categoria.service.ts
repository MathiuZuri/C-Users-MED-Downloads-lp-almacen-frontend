import { Injectable } from '@angular/core';
import {ProductoRepor} from "../modelo/ProductoRepor";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Categoria} from "../modelo/Categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url:string = `${environment.HOST}/categoria`;
  constructor(private http: HttpClient) { }

  findAll():void{
   // return this.http.get<Categoria[]>(this.url).subscribe();
  }
}
