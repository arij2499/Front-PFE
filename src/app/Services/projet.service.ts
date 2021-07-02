

import { Injectable } from '@angular/core';

import { Projet } from '../model/projet.model';
import { Observable } from 'rxjs';
import {HttpClient,  HttpHeaders } from '@angular/common/http';


const httpOptions= {
  headers:  new  HttpHeaders(  { 'Content-Type' : 'application/json'} )
};
@Injectable({
  providedIn: 'root',
})
export class ProjetService{
  adress: string='http://localhost:7070/projets/api/update';
  api: string ='http://localhost:7070/projets/api';
  apiURL: string = 'http://localhost:7070/projets/api/delete';
Urlajout: string='http://localhost:7070/projets/api/add';
  projetss : Projet[];
  projet: Projet;


  constructor(
    private http: HttpClient   ) { }


listeProjet(): Observable<Projet[]>{
  return this.http.get<Projet[]>(this.api);
}


 ajouterProjet(prod:Projet): Observable<Projet>{

  return this.http.post<Projet>(this.Urlajout, prod, httpOptions);
}

supprimerProjet(id : number) {
  console.log(id);
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }


   updateProjet(prod :Projet) : Observable<Projet>
   {
   return this.http.put<Projet>(this.adress, prod, httpOptions);
   }
   consulterProjet(id: number): Observable<Projet> {
    const URLGT = `${this.api}/${id}`;
   return this.http.get<Projet>(URLGT);
   }

   visualiserProjet(prod :Projet) : Observable<Projet>
   {
   return this.http.put<Projet>(this.adress, prod, httpOptions);
   }
  }
