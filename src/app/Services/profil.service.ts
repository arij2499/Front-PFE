import { Profil } from '../model/profil.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient,  HttpHeaders } from '@angular/common/http';


const httpOptions= {
  headers:  new  HttpHeaders(  { 'Content-Type' : 'application/json'} )
};
@Injectable({
  providedIn: 'root',
})
export class ProfilService{
  adress: string='http://localhost:7070/profils/api/update';
  api: string ='http://localhost:7070/profils/api';
  apiURL: string = 'http://localhost:7070/profils/api/delete';
Urlajout: string='http://localhost:7070/profils/api/add';
  profils : Profil[];
  profil: Profil;


  constructor(
    private http: HttpClient   ) { }


listeProfil(): Observable<Profil[]>{
  return this.http.get<Profil[]>(this.api);
}


 ajouterProfil(prod:Profil): Observable<Profil>{

  return this.http.post<Profil>(this.Urlajout, prod, httpOptions);
}

supprimerProfil(id : number) {
  console.log(id);
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }


   updateProfil(prod :Profil) : Observable<Profil>
   {
   return this.http.put<Profil>(this.adress, prod, httpOptions);
   }


   consulterProfil(id: number): Observable<Profil> {
    const URLGT = `${this.api}/${id}`;
   return this.http.get<Profil>(URLGT);
   }



}
