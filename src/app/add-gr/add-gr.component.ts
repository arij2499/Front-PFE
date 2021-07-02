import { element } from 'protractor';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
import { ProjetService } from '../Services/projet.service';
import { ProfilService } from '../Services/profil.service';
import { Router } from '@angular/router';
import { Profil } from '../model/profil.model';
import { Projet } from '../model/projet.model';

@Component({
  selector: 'app-add-gr',
  templateUrl: './add-gr.component.html',
  styleUrls: ['./add-gr.component.css']
})
export class AddGrComponent implements OnInit {
userConnect: any;
projets: Projet[];
profils: Profil[];
users: User[];
newProfil= new Profil();
newProjet= new Projet();
selectedUser;
selectedProfil;
selectedProjet;
  constructor(private router: Router,
    private profilService:ProfilService,
    private userService: UserService,private projetService:ProjetService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
      this.userService.listeUser().subscribe(prods => {
        console.log('users', prods);
        this.users = prods;
      })
      this.profilService.listeProfil().subscribe(prods =>{
        console.log('profils', prods);
        this.profils = prods;
      })
      this.projetService.listeProjet().subscribe(prods =>
        {
          console.log('projets', prods);
          this.projets = prods;
        }
        );


  }
  addRessource()
  {
    console.log("testt",this.selectedProjet)

let ids=[];
for(const i  of this.selectedProjet){
  ids.push(parseInt(i));
}
/* this.selectedProjet.forEach(p=>{ids.push(parseInt(p))}); */
    let user ={utilisateurId:parseInt(this.selectedUser),profilId:parseInt(this.selectedProfil),projetIds:ids};
console.log("text " , user.utilisateurId)
console.log("text1 " , user.profilId)
console.log("testst3 " ,user.projetIds , "ids " , ids)
  this.userService.affectUser(user).subscribe(data=>{
     /*  this.router.navigate(['ressources']).then(()=> {
        window.location.reload();
      }); */
    });



  }


}
