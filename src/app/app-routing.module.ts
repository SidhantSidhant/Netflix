import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetflexCardComponent } from './sheard/component/netflex-card/netflex-card.component';
import { NetflexComponent } from './sheard/component/netflex/netflex.component';

const routes: Routes = [
  {
    path : 'netFlexdata', component : NetflexComponent
  },
  {
  path: 'card/:img', component : NetflexCardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
