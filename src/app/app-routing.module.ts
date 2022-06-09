import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card/card-list/card-list.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'card-list', component: CardListComponent },
  { path: 'user-list', component: UserListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
