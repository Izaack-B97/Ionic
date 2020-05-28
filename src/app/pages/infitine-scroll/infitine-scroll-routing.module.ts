import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfitineScrollPage } from './infitine-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfitineScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfitineScrollPageRoutingModule {}
