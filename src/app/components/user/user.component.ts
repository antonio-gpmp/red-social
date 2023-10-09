import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { AlbumsService } from "../../services/albums.service";
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  user: any = {};

  albums: any = [];
  idAlbum: any;

  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private _userService: UsersService,
    private _albumService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.user = data.user; // Asigna los datos resueltos a user
      this.albums = data.albums;

      console.log('user ', this.user);
      console.log('albums ', this.albums);
      
    });
  }

  async getAlbums() {
    this.albums = await this._albumService.getAlbums(this.idAlbum);
    console.log("albums ", this.albums);
  }


  imageLoaded() {
    this.loading = false;
  }

  imageError() {
    this.loading = false;
    // Puedes manejar el error aquí, por ejemplo, estableciendo una imagen por defecto
    this.album.photos[0].thumbnailUrl = '/assets/default-image.jpg'; // Cambia la ruta a la imagen por defecto
  }

  async getPhotosByAlbums() {}
}

