import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<any> {
  constructor(private _usersService: UsersService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<Observable<any>> {
    return await this._usersService.getUsers();
  }
}