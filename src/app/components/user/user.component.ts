import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { AlbumsService } from "../../services/albums.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  user: any = {};

  albums: any = {};
  idAlbum: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private _userService: UsersService,
    private _albumService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((user: any) => {
      this.user = user.user; // Asigna los datos resueltos a user
      console.log('user in component ', this.user);
      
    });
  }

  async getAlbums() {
    this.albums = await this._albumService.getAlbums(this.idAlbum);
    console.log("albums ", this.albums);
  }

  async getPhotosByAlbums() {}
}

