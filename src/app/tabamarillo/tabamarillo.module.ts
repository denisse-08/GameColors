import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabamarilloPageRoutingModule } from './tabamarillo-routing.module';

import { TabamarilloPage } from './tabamarillo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabamarilloPageRoutingModule
  ],
  declarations: [TabamarilloPage]
})
export class TabamarilloPageModule {}
