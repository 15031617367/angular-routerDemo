import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoinComponent } from './logoin/logoin.component';
import { IndexComponent } from './index/index.component';
const routes: Routes = [
  {path:'',component:LogoinComponent},
  {path:"index",component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
