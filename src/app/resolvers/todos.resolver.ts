import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TodosService } from '../services/todos.service';

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<any> {
  constructor(
      private _todosService: TodosService
  ) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    const userIdString = route.paramMap.get('id'); // Se obtiene el valor del parámetro 'id' como cadena
    if (userIdString !== null) {
      // Si userIdString no es nulo, se convierte a número
      const userId = parseInt(userIdString, 10);
      if (!isNaN(userId)) {
        try {
          return this._todosService.getTodosUser(userId);
        } catch (error) {
          console.error('Error al cargar todos:', error);
          return null;
        }
      }
    }
    // Si userIdString es nulo o no se pudo convertir a número
    return null;
  }
}