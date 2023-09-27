import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UsersResolver } from './resolvers/users.resolver';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsersComponent, resolve: {users: UsersResolver} },
  { path: 'usuario/:id', component: UserComponent, resolve: {user: UserResolver} },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
