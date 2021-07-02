import { Fonction } from '../model/fonction.model';

import { BrowserModule } from '@angular/platform-browser';
import { User } from '../model/user.model';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtResponse } from '../model/jwt-response';

const httpOptions= {
  headers:  new  HttpHeaders(  { 'Content-Type' : 'application/json'} )
};
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  apiURL: string = 'http://localhost:7070/login';

public loggedUser: string;
 public isloggedIn: Boolean=false;
 public loggedID : any;
 public users: User[];
public fonctions:Fonction;

public userConnect: any;
  constructor( private router: Router ,
    private http: HttpClient   ) { 
     
    }
    attemptAuth(credentials: User): Observable<JwtResponse> {
      return this.http.post<JwtResponse>(this.apiURL, credentials, httpOptions);
    }
  
    signUp(info: User): Observable<string> {
      return this.http.post<string>(this.apiURL, info, httpOptions);
    }

    getUserFromBD(nomUtilisateur:string):Observable<User>
    {

      const url = `${this.apiURL}/${nomUtilisateur}`;


      return this.http.get<User>(url);
    }

SignIn(user: User) : User{
  this.userConnect = user;
  this.loggedUser = user.nomUtilisateur;
  this.isloggedIn = true;
  // localStorage.setItem('userConnect',this.userConnect);
  localStorage.setItem('loggedUser',this.loggedUser);
  // localStorage.setItem('loggedID',this.loggedID);
  localStorage.setItem('isloggedIn', String(this.isloggedIn));
  return user;

}
getCurrentUser(){
  console.log('jjjj',localStorage.getItem('loggedUser'))};
logout(){
  this.isloggedIn=false;
  this.loggedUser = undefined;
  localStorage.removeItem('loggedUser');
  localStorage.setItem('isloggedIn', String(this.isloggedIn));
  this.router.navigate(['/login']);

}

SetLoggedUserFromLocalStorage(login: string)
{
  this.loggedUser = login;
  this.isloggedIn = true;

}
/*  isAdmin():Boolean{
  let admin:Boolean=false;
  if(!this.fonctions)//this.fonctions==undefiened
  return false;
  this.fonctions.forEach((curFonction)=>{
  if(curFonction.nom_fonction=='ADMIN'){
  admin=true;
  }
  });
  return admin;} */

  // getUserFonction(nomUtilisateur:string){
  //   this.getUserFromBD(nomUtilisateur).subscribe((user:User)=>{
  //   this.fonctions=user.fonctions;

  //   console.log(this.fonctions);
  //   });
  //   }

}


