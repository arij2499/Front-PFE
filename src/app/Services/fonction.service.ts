import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Fonction } from '../model/fonction.model';
import { Injectable } from '@angular/core';
const httpOptions= {
  headers:  new  HttpHeaders(  { 'Content-Type' : 'application/json'} )
};
@Injectable({
  providedIn: 'root',
})
export class FonctionService{
  adress: string='http://localhost:7070/fonctions/api/update';
  api: string ='http://localhost:7070/fonctions/api';
  apiURL: string = 'http://localhost:7070/fonctions/api/delete';
Urlajout: string='http://localhost:7070/fonctions/api/add';

  fonctions : Fonction[];

fonction:Fonction;

  constructor(
    private http: HttpClient   ) { }


listeFonction(): Observable<Fonction[]>{
  return this.http.get<Fonction[]>(this.api);
}


 ajouterFonction(prod:Fonction): Observable<Fonction>{

  return this.http.post<Fonction>(this.Urlajout,prod, httpOptions);
}

supprimerFonction(id : number) {
  console.log(id);
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }


   updateFonction(prod :Fonction) : Observable<Fonction>
   {
   return this.http.put<Fonction>(this.adress, prod, httpOptions);
   }

   consulterFonction(id: number): Observable<Fonction> {
    const URLGT = `${this.api}/${id}`;
   return this.http.get<Fonction>(URLGT);
   }

}
