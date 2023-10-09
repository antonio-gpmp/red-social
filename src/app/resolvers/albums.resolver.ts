import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { AlbumsService } from '../services/albums.service';
import { PhotosService } from '../services/photos.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolver implements Resolve<any> {
  constructor(
    private _albumsService: AlbumsService,
    private _photoService: PhotosService
  ) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    const userIdString = route.paramMap.get('id'); // Se obtiene el valor del parámetro 'id' como cadena
    if (userIdString !== null) {
      // Si userIdString no es nulo, se convierte a número
      const userId = parseInt(userIdString, 10);
      if (!isNaN(userId)) {
        try {
          const albums: any[] = await this._albumsService.getAlbums(userId) ?? [];
          if (albums.length > 0) {
            const photos = await this._photoService.getPhotos();
            const mixAlbumsPhotos = this.getPhotosAlbums(albums, photos);
            return mixAlbumsPhotos
          } else {
            return albums
          }
        } catch (error) {
          console.error('Error al cargar datos:', error);
          return null;
        }
      }
    }
    // Si userIdString es nulo o no se pudo convertir a número
    return null;
  }

  getPhotosAlbums(albums: any[], photos: any[]): any[] {
    return albums.map((album: any) => {
      // Usamos filter para encontrar las fotos con el mismo albumId
      const fotosDelAlbum = photos.filter((photo: any) => photo.albumId === album.id);
      //Se retorna una copia del álbum con las fotos agregadas
      return {
        ...album,
        photos: fotosDelAlbum
      };
    });
  }
}
