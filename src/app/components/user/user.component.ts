import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user:any = {};
  
  albums:any = {};
  idAlbum: any;


  constructor( private activatedRoute: ActivatedRoute,
               private _userService: UsersService,
               private _albumService: AlbumsService
    ){

    this.activatedRoute.params.subscribe( async params =>{
        this.user = await this._userService.getUser( params['id'] );
        console.log('user ', this.user);
        this.idAlbum = params['id']
        
    });



  }


  async getAlbums(){
    this.albums = await this._albumService.getAlbums(this.idAlbum);
    console.log('albums ', this.albums);
    
  }


}
