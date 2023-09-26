import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _userService: UsersService
    ){

    this.activatedRoute.params.subscribe( async params =>{
        this.user = await this._userService.getUser( params['id'] );
        console.log('user ', this.user);
        
    });

  }

}
