import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private endpoint:string = 'https://jsonplaceholder.typicode.com/photos'

  constructor() { }

  async getPhotos() {
    try {
      const response = await axios.get(this.endpoint);
      return response.data ?? null;
    } catch (error) {
      console.error('Error al obtener todas las fotos', error);
      return null;
    }
  }

  async getPhotoByAlbum(idAlbum: number) {
    try {
      const response = await axios.get(this.endpoint);
      if (response.data) {
        const filteredPhotos = response.data.filter((photo: { albumId: number; }) => photo.albumId === idAlbum);
        return filteredPhotos;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al obtener las fotos del álbum', error);
      return null;
    }
  }
}
