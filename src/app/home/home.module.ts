import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {FooterHomeComponent} from './footer-home/footer-home.component';
import {FormularioTareaComponent} from './formulario-tarea/formulario-tarea.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
    declarations: [HomePage, FooterHomeComponent, FormularioTareaComponent ]
})
export class HomePageModule {}
