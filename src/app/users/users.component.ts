import { ActivatedRoute } from '@angular/router';

import { Structure } from '../model/structure.model';
import { UserService } from '../Services/User.service';
import { User } from '../model/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  userConnect: any;
  structures: Structure[];
 // currentUser = new User(); 
  constructor(private userService : UserService,private activatedRoute: ActivatedRoute, private authService: AuthService) { }
  ngOnInit()  {
    console.log('hiii',localStorage.getItem('loggedUser'));
  // console.log('pppptt',this.userConnect);
  // this.authService.isloggedIn = true;
  this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
    { console.log(prods);
      this.userConnect = prods;
    } );
    this.userService.listeUser().subscribe(prods =>
      { console.log(prods);
        this.users = prods;
      } );
    /*   this.structureService.listeStructure().subscribe(prods =>
        {
      console.log(prods);
          this.structures = prods;
        }
        ); */
      /*   this.userService.consulterUser(this.activatedRoute.snapshot.params.id).
        subscribe( prod =>{ this.currentUser = prod; });
      }
 */
    }
    consulterUser(p: User)
    {
    return  this.userService.consulterUser(p.utilisateur_id);}
      supprimerUser(p: User)
    {

    let conf = confirm("Etes-vous sûr ?");
      this.userService.supprimerUser(p.utilisateur_id).subscribe(() => {
      console.log("profil supprimé");
      this.SuprimerUserDuTableau(p);

    });

    }

    SuprimerUserDuTableau(prod : User) {

      this.users.forEach((cur, index) => {


      if(prod.utilisateur_id=== cur.utilisateur_id) {

      this.users.splice(index, 1);
      }
      });
      }
    }
