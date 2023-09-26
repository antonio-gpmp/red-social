import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.getUsers();
  }


  /**
   * 
   * @returns 
   */
  getUsers(){
    let users = null
    return axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(response => {
        return response.data; // Se devuelven los usuarios
      })
      .catch(error => {
        console.error('errror al obtener los usuarios ', error);
        return null
      });
  }


  /**
   * 
   * @param userId 
   * @returns 
   */
  getUser(userId:number){
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        return response.data; // Devuelve los datos del usuario
      })
      .catch(error => {
        console.error('errror al obtener el usuario ', error);
        return null
      });
  }

}
