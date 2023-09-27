import { ResolveFn } from '@angular/router';

export const userResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};




import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
  constructor(private _usersService: UsersService ) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<Observable<any>> {
    const userIdString = route.paramMap.get('id'); // Obtiene el valor del parámetro 'id' como cadena
    if (userIdString !== null) {
      // Si userIdString no es nulo, se convierte a número
      const userId = parseInt(userIdString, 10);
      if (!isNaN(userId)) {
        // Verifica que la conversión sea exitosa
        return this._usersService.getUser(userId);
      }
    }
    // Si userIdString es nulo o no se pudo convertir a número
    return of(null); // Por ejemplo, devuelve un Observable con un valor nulo
  }
}


