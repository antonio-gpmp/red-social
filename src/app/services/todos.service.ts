import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  async getTodos(){
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
      return response.data ?? null;
    } catch (error) {
      console.error('Error al obtener todas las fotos', error);
      return null;
  }
}

  async getTodosUser (userId:number){
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
      return response.data ?? null;
    } catch (error) {
      console.error('Error al obtener todas las fotos', error);
      return null;
  }
  }


}
