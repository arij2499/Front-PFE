import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Facture } from '../model/facture.model';
const httpOptions= {
  headers:  new  HttpHeaders(  { 'Content-Type' : 'application/json'} )
};
@Injectable({
  providedIn: 'root',
})
export class FactureService{
  adress: string='http://localhost:7070/factures/api/update';
  api: string ='http://localhost:7070/factures/api';
  apiURL: string = 'http://localhost:7070/factures/api/delete';
Urlajout: string='http://localhost:7070/factures/api/add';
  factures : Facture[];
  facture: Facture;


  constructor(
    private http: HttpClient   ) { }


listeFacture(): Observable<Facture[]>{
  return this.http.get<Facture[]>(this.api);
}


 ajouterFacture(prod:Facture): Observable<Facture>{

  return this.http.post<Facture>(this.Urlajout, prod, httpOptions);
}

supprimerFacture(id : number) {
  console.log(id);
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }
  updateFacture(prod :Facture) : Observable<Facture>
  {
  return this.http.put<Facture>(this.adress, prod, httpOptions);
  }
  consulterFacture(id: number): Observable<Facture> {
   const URLGT = `${this.api}/${id}`;
  return this.http.get<Facture>(URLGT);
  }
}
