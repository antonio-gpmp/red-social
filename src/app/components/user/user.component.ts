import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { AlbumsService } from "../../services/albums.service";
import { AccordionModule } from 'primeng/accordion';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";


@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  user: any = {};

  albums: any = [];
  todos: any = [];
  idAlbum: any;

  loading = true;

  notDone:any[] = [];

  done:any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private _userService: UsersService,
    private _albumService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.user = data.user;
      this.albums = data.albums;
      this.todos = data.todos || [];
      
      this.done = this.todos.filter((element: any) => element.completed);
      this.notDone = this.todos.filter((element: any) => !element.completed);
  
      console.log('user ', this.user);
      console.log('albums ', this.albums);
      console.log('todos ', this.done);
    });
  }
  

  async getAlbums() {
    this.albums = await this._albumService.getAlbums(this.idAlbum);
    console.log("albums ", this.albums);
  }


  imageError(event: Event, album: any) {
    album.photos[0].thumbnailUrl = '/assets/img/album.jpeg'; // Cambia la ruta a la imagen por defecto
  }


  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  async getPhotosByAlbums() {}
}

