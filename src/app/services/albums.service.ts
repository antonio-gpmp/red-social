import { Injectable } from '@angular/core';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }

  getAlbums(userId:number){
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then(response => {
        return response.data; // Devuelve los albums
      })
      .catch(error => {
        console.error('errror al obtener los albums ', error);
        return null
      });
  }



}
