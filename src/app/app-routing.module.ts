import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users',
  canActivate:[AuthGuard],
  data:{
    title: 'Users',
    anotherParam: 'Somthing Else'
  },
   component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
