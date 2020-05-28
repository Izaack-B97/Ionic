import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfitineScrollPageRoutingModule } from './infitine-scroll-routing.module';

import { InfitineScrollPage } from './infitine-scroll.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfitineScrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfitineScrollPage]
})
export class InfitineScrollPageModule {}
