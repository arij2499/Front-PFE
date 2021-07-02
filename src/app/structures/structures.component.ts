import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit, Injectable } from '@angular/core';
import { Structure } from '../model/structure.model';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
@Injectable({
  providedIn: 'root'

})
export class StructuresComponent implements OnInit {


structures: Structure[];
constructor() { }

  ngOnInit() {



  }

}
