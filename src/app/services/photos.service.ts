import { Injectable } from '@angular/core';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }

  getPhotoByAlbum(idAlbum:number){
    return axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => {
        if (response.data) {
          const filteredPhotos = response.data.filter((photo: { albumId: number; }) => photo.albumId === idAlbum);
            return filteredPhotos; // Devuelve las fotos filtradas
        }else{
          return null;
        }
      })
      .catch(error => {
        console.error('errror al obtener las fotos ', error);
        return null
      });
  }

}
