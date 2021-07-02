import { ProfilService } from '../Services/profil.service';
import { Router } from '@angular/router';
import { Profil } from '../model/profil.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {

  newProfil= new Profil();
userConnect: any;
  constructor(private router: Router,private userService: UserService, private profilService:ProfilService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }
  addProfil()
  {
    this.profilService.ajouterProfil(this.newProfil).subscribe(prod=> {

      console.log(prod);

    }
    );

    this.router.navigate(['profils']).then(()=> {
      window.location.reload();
    });
  }
}
