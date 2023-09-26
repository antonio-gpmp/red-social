import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:Users[] = [];


  constructor( private _usersService:UsersService,
               private router:Router
                ) {
  }


  async ngOnInit() {
    this.users = await this._usersService.getUsers();
    console.log('users ', this.users);
  }

  showUser( idx:number ){
    this.router.navigate( ['/usuario',idx] );
  }

}
