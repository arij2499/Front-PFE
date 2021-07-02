import { Projet } from '../model/projet.model';
import { BrowserModule } from '@angular/platform-browser';
import { User } from '../model/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

const httpOptions= {
  headers:  new  HttpHeaders(  { 'Content-Type' : 'application/json'} )
};

@Injectable({
  providedIn: 'root',
})
export class UserService{
  adress: string='http://localhost:7070/users/update';
  apiURL: string ='http://localhost:7070/users';
  api: string = 'http://localhost:7070/users/delete';
Urlajout: string='http://localhost:7070/users/add';
Ul: string='http://localhost:7070/users/projects';
URL: string='http://localhost:7070/user';
apiUser: string = 'http://localhost:7070/login';
apiProject: string='http://localhost:7070/users/affect';
  users : User[];
  user: User;
  constructor( private router: Router ,private authService: AuthService,
    private http: HttpClient   ) {
     // console.log('dddddverv',localStorage.getItem('loggedUser'));
   //  console.log(this.authService.getUserFromBD(this.authService.getCurrentUser().nomUtilisateur));
     }

    getUser(nomUtilisateur:string):Observable<User>
    {

      const url = `${this.apiUser}/${nomUtilisateur}`;


      return this.http.get<User>(url);
    }
    listeUser(): Observable<User[]>{
      return this.http.get<User[]>(this.apiURL);
    }

     ajouterUser(prod:User): Observable<User>{

      return this.http.post<User>(this.Urlajout, prod, httpOptions);
    }

    supprimerUser(id : number) {
      console.log(id);
      const url = `${this.api}/${id}`;
      return this.http.delete(url, httpOptions);
      }


      consulterUser(id: number): Observable<User> {
        const URLGT = `${this.URL}/${id}`;
       return this.http.get<User>(URLGT);
       }
       updateUser(prod :User) : Observable<User>
       {
       return this.http.put<User>(this.adress, prod, httpOptions);
       }
       visualiserUser(prod :User) : Observable<User>
       {
       return this.http.put<User>(this.adress, prod, httpOptions);
       }

      /*  finProjetByUser(id : number) {
        console.log(id);
        const url = `${this.Ul}/${id}`;
        return this.http.get<Projet[]>(this.Ul);
        } */


        affectUser(prod )
        {
        return this.http.put<null>(this.adress, prod, httpOptions);

}
}
